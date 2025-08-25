import { createClient } from '@supabase/supabase-js';

/**
 * Client-side Supabase client using anonymous key.
 * Safe for browser use - only uses public environment variables.
 */
export function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a mock client for demo purposes
    console.warn('Supabase not configured, using demo mode');
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Check if Supabase is configured on the client
 */
export function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

// Create a singleton instance for the client
export const supabase = createSupabaseClient();
