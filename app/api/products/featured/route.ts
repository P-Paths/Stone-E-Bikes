import { NextResponse } from 'next/server';
import { getFeaturedProducts } from '@/lib/queries/products';
import { isSupabaseConfigured } from '@/lib/supabase/server';

export async function GET() {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { message: 'Supabase not configured' },
        { status: 500 }
      );
    }

    const products = await getFeaturedProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error in GET /api/products/featured:', error);
    return NextResponse.json(
      { message: 'Failed to fetch featured products' },
      { status: 500 }
    );
  }
}
