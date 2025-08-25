import { supabase } from '../supabase/client';
import { supabaseAdmin } from '../supabase/server';
import { Product } from '@shared/schema';

// Demo data for when Supabase is not configured
const DEMO_PRODUCTS: Product[] = [
  {
    id: 'demo-1',
    name: 'TrailMaster Pro',
    slug: 'trailmaster-pro',
    description: 'High-performance mountain bike designed for serious trail riders.',
    price: '2299.00',
    imageUrl: 'https://images.unsplash.com/photo-1544191696-15693072fb5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    categoryId: 'bikes',
    featured: true,
    inStock: true,
    specifications: {
      frame: "Aluminum Alloy",
      gears: "21-speed",
      brakes: "Hydraulic Disc",
      weight: "15kg"
    },
    created_at: new Date().toISOString()
  },
  {
    id: 'demo-2',
    name: 'City Cruiser Elite',
    slug: 'city-cruiser-elite',
    description: 'Perfect urban companion for daily commuting and weekend adventures.',
    price: '1599.00',
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    categoryId: 'bikes',
    featured: true,
    inStock: true,
    specifications: {
      frame: "Steel",
      gears: "7-speed",
      brakes: "V-Brake",
      weight: "18kg"
    },
    created_at: new Date().toISOString()
  },
  {
    id: 'demo-3',
    name: 'E-Power Max',
    slug: 'e-power-max',
    description: 'Electric bike with extended range and smart features.',
    price: '3499.00',
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    categoryId: 'bikes',
    featured: true,
    inStock: true,
    specifications: {
      frame: "Carbon Fiber",
      motor: "250W",
      battery: "500Wh",
      range: "80km"
    },
    created_at: new Date().toISOString()
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
