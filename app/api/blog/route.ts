import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts, createBlogPost } from '@/lib/queries/blog';
import { isSupabaseConfigured } from '@/lib/supabase/server';

export async function GET() {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { message: 'Supabase not configured' },
        { status: 500 }
      );
    }

    const posts = await getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error in GET /api/blog:', error);
    return NextResponse.json(
      { message: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { message: 'Supabase not configured' },
        { status: 500 }
      );
    }

    const postData = await request.json();
    const post = await createBlogPost(postData);
    
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/blog:', error);
    return NextResponse.json(
      { message: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
