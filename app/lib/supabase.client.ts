import { createClient } from '@supabase/supabase-js';

/**
 * Client-side Supabase client using anonymous key.
 * Safe for browser use - only uses public environment variables.
 */
export function getSupabaseAnon() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase client environment variables');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Check if Supabase is configured on the client
 */
export function isSupabaseConfigured(): boolean {
  return !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
}