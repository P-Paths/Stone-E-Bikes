import { NextRequest, NextResponse } from 'next/server';
import { getProducts, createProduct } from '../../../../lib/queries/products';
import { isSupabaseConfigured } from '../../../../lib/supabase/server';

export async function GET() {
  try {
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        { message: 'Supabase not configured' },
        { status: 500 }
      );
    }

    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error in GET /api/products:', error);
    return NextResponse.json(
      { message: 'Failed to fetch products' },
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

    const productData = await request.json();
    const product = await createProduct(productData);
    
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/products:', error);
    return NextResponse.json(
      { message: 'Failed to create product' },
      { status: 500 }
    );
  }
}
