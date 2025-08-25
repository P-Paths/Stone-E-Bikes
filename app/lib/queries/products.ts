import { supabase } from '../supabase/client';
import { supabaseAdmin } from '../supabase/server';
import { Product } from '@shared/schema';

// Demo data for when Supabase is not configured
const DEMO_PRODUCTS: Product[] = [
  {
    id: 'askgo-26',
    name: '26" ASKGO (700W)',
    slug: 'askgo-26',
    description: 'High-performance electric bike with 700W motor and 26 inch wheels.',
    price: '701.58',
    imageUrl: '/images/e-bikes/askgo-26.png',
    categoryId: 'bikes',
    featured: true,
    inStock: true,
    specifications: {
      motor: "700W",
      wheels: "26 inch",
      type: "Electric bike",
      quality: "Premium"
    },
    createdAt: new Date()
  },
  {
    id: 'okonge-fat-20',
    name: '20" Fat Tire OKONGE',
    slug: 'okonge-fat-20',
    description: 'All-terrain fat tire electric bike with rugged build and 20 inch wheels.',
    price: '1499.58',
    imageUrl: '/images/e-bikes/okonge-fat-20.png',
    categoryId: 'bikes',
    featured: true,
    inStock: true,
    specifications: {
      design: "Fat tire",
      wheels: "20 inch",
      capability: "All-terrain",
      build: "Rugged"
    },
    createdAt: new Date()
  },
  {
    id: 'keteles-fat-26',
    name: '26" Fat Tire KETELES',
    slug: 'keteles-fat-26',
    description: 'Premium fat tire electric bike with high-end components and 26 inch wheels.',
    price: '3171.58',
    imageUrl: '/images/e-bikes/keteles-fat-26.png',
    categoryId: 'bikes',
    featured: true,
    inStock: true,
    specifications: {
      type: "Premium fat tire",
      wheels: "26 inch",
      components: "High-end",
      grade: "Professional"
    },
    createdAt: new Date()
  },
  {
    id: 'coz-trike-24',
    name: '24" Trike CO-Z',
    slug: 'coz-trike-24',
    description: '3-wheel stability electric trike with 24 inch wheels and comfortable seating.',
    price: '909.79',
    imageUrl: '/images/e-bikes/24" Trike CO-Z.png',
    categoryId: 'bikes',
    featured: true,
    inStock: true,
    specifications: {
      stability: "3-wheel",
      wheels: "24 inch",
      riding: "Easy",
      seating: "Comfortable"
    },
    createdAt: new Date()
  },
  {
    id: 'okonge-trike-20',
    name: '20" Trike OKONGE',
    slug: 'okonge-trike-20',
    description: '3-wheel trike with stable design and quality construction.',
    price: '1279.79',
    imageUrl: '/images/e-bikes/20" Trike OKONGE.png',
    categoryId: 'bikes',
    featured: true,
    inStock: true,
    specifications: {
      type: "3-wheel trike",
      wheels: "20 inch",
      design: "Stable",
      construction: "Quality"
    },
    createdAt: new Date()
  }
];

/**
 * CLIENT-SIDE PRODUCT QUERIES
 * These are safe to use in components and pages
 */

export async function getProducts(): Promise<Product[]> {
  try {
    if (!supabase) {
      console.warn('Supabase not configured, using demo data');
      return DEMO_PRODUCTS;
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase error, using demo data:', error);
      return DEMO_PRODUCTS;
    }

    return data || DEMO_PRODUCTS;
  } catch (error) {
    console.warn('Supabase not configured, using demo data');
    return DEMO_PRODUCTS;
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    if (!supabase) {
      console.warn('Supabase not configured, using demo data');
      return DEMO_PRODUCTS.filter(p => p.featured);
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase error, using demo data:', error);
      return DEMO_PRODUCTS.filter(p => p.featured);
    }

    return data || DEMO_PRODUCTS.filter(p => p.featured);
  } catch (error) {
    console.warn('Supabase not configured, using demo data');
    return DEMO_PRODUCTS.filter(p => p.featured);
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    if (!supabase) {
      console.warn('Supabase not configured, using demo data');
      return DEMO_PRODUCTS.find(p => p.slug === slug) || null;
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.warn('Supabase error, using demo data:', error);
      return DEMO_PRODUCTS.find(p => p.slug === slug) || null;
    }

    return data;
  } catch (error) {
    console.warn('Supabase not configured, using demo data');
    return DEMO_PRODUCTS.find(p => p.slug === slug) || null;
  }
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  try {
    if (!supabase) {
      console.warn('Supabase not configured, using demo data');
      return DEMO_PRODUCTS.filter(p => p.categoryId === categoryId);
    }

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId)
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase error, using demo data:', error);
      return DEMO_PRODUCTS.filter(p => p.categoryId === categoryId);
    }

    return data || DEMO_PRODUCTS.filter(p => p.categoryId === categoryId);
  } catch (error) {
    console.warn('Supabase not configured, using demo data');
    return DEMO_PRODUCTS.filter(p => p.categoryId === categoryId);
  }
}

/**
 * SERVER-SIDE PRODUCT QUERIES
 * These use admin privileges and should only be used in API routes
 */

export async function createProduct(productData: Omit<Product, 'id' | 'created_at'>): Promise<Product> {
  const { data, error } = await supabaseAdmin
    .from('products')
    .insert(productData)
    .select()
    .single();

  if (error) {
    console.error('Error creating product:', error);
    throw new Error('Failed to create product');
  }

  return data;
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
  const { data, error } = await supabaseAdmin
    .from('products')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating product:', error);
    throw new Error('Failed to update product');
  }

  return data;
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabaseAdmin
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    throw new Error('Failed to delete product');
  }
}
