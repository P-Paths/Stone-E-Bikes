import { supabase } from '../supabase/client';
import { supabaseAdmin } from '../supabase/server';
import { BlogPost } from '@shared/schema';

/**
 * CLIENT-SIDE BLOG QUERIES
 * These are safe to use in components and pages
 */

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    throw new Error('Failed to fetch blog posts');
  }

  return data || [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }

  return data;
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('category', category)
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts by category:', error);
    throw new Error('Failed to fetch blog posts by category');
  }

  return data || [];
}

/**
 * SERVER-SIDE BLOG QUERIES
 * These use admin privileges and should only be used in API routes
 */

export async function createBlogPost(postData: Omit<BlogPost, 'id' | 'created_at'>): Promise<BlogPost> {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .insert(postData)
    .select()
    .single();

  if (error) {
    console.error('Error creating blog post:', error);
    throw new Error('Failed to create blog post');
  }

  return data;
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost> {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating blog post:', error);
    throw new Error('Failed to update blog post');
  }

  return data;
}

export async function deleteBlogPost(id: string): Promise<void> {
  const { error } = await supabaseAdmin
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting blog post:', error);
    throw new Error('Failed to delete blog post');
  }
}

export async function publishBlogPost(id: string): Promise<BlogPost> {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .update({ 
      published: true, 
      published_at: new Date().toISOString() 
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error publishing blog post:', error);
    throw new Error('Failed to publish blog post');
  }

  return data;
}
