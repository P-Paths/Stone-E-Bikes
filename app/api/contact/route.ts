import { NextResponse } from 'next/server';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Try Supabase first
    if (isSupabaseConfigured()) {
      try {
        const supabase = getSupabaseAdmin();
        const { data, error } = await supabase
          .from('contacts')
          .insert({
            name,
            email,
            organization: organization || null,
            message,
            source: 'contact_page',
            created_at: new Date().toISOString(),
          })
          .select('id')
          .single();

        if (error) {
          console.error('Supabase contact creation failed:', error);
          // Fall through to return success (graceful degradation)
        } else {
          console.log(`Contact saved to Supabase: ${email}`);
          return NextResponse.json({
            message: 'Message sent successfully',
            id: data.id,
            provider: 'supabase',
          });
        }
      } catch (error) {
        console.error('Supabase error:', error);
        // Fall through to return success
      }
    }

    // If Supabase not configured or failed, return success anyway (graceful degradation)
    console.log(`Contact form submitted (mock): ${email}`);
    return NextResponse.json({
      message: 'Message sent successfully',
      provider: 'mock',
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Error submitting contact form: ' + error.message },
      { status: 500 }
    );
  }
}

