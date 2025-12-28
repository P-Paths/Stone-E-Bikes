import { NextResponse } from 'next/server';
import { createClient } from '../../../../lib/supabase/server';

export async function GET(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    const { data: adminUser } = await supabase
      .from('admin_users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!adminUser) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get('page');

    if (pageSlug) {
      // Get content for specific page
      const { data: content, error } = await supabase
        .from('page_content')
        .select('*')
        .eq('page_slug', pageSlug)
        .order('section_key', { ascending: true });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ content: content || [] });
    } else {
      // Get all pages
      const { data: pages, error } = await supabase
        .from('page_content')
        .select('page_slug')
        .order('page_slug', { ascending: true });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      const uniquePages = [...new Set((pages || []).map((p) => p.page_slug))];
      return NextResponse.json({ pages: uniquePages });
    }
  } catch (error: any) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    const { data: adminUser } = await supabase
      .from('admin_users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (!adminUser) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { pageSlug, sectionKey, content } = body;

    if (!pageSlug || !sectionKey || !content) {
      return NextResponse.json(
        { error: 'pageSlug, sectionKey, and content are required' },
        { status: 400 }
      );
    }

    // Upsert content
    const { data: savedContent, error } = await supabase
      .from('page_content')
      .upsert(
        {
          page_slug: pageSlug,
          section_key: sectionKey,
          content,
          updated_by: user.id,
        },
        {
          onConflict: 'page_slug,section_key',
        }
      )
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ content: savedContent });
  } catch (error: any) {
    console.error('Error saving content:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

