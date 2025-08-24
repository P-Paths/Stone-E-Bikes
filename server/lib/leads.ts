import { getSupabaseAdmin, isSupabaseConfigured } from './supabase.server';
import { storage } from '../storage';

export interface LeadData {
  name?: string;
  email: string;
  phone?: string;
  message: string;
  website_id?: number;
}

export interface LeadResult {
  provider: 'supabase' | 'postgres' | 'mock';
  id: string | number | null;
  mock?: boolean;
}

/**
 * Create a lead with fallback logic:
 * 1. Try Supabase if configured
 * 2. Fall back to Postgres if available
 * 3. Mock response if neither available
 */
export async function createLead(data: LeadData): Promise<LeadResult> {
  const website_id = data.website_id || Number(process.env.WEBSITE_ID || 2);
  
  // Option 1: Supabase (preferred)
  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseAdmin();
      const { data: result, error } = await supabase
        .from('leads')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          website_id,
          created_at: new Date().toISOString()
        })
        .select('id')
        .single();

      if (error) {
        console.error('Supabase lead creation failed:', error);
        throw error;
      }

      console.log(`Lead saved to Supabase: ${data.email} (website_id: ${website_id})`);
      return {
        provider: 'supabase',
        id: result.id
      };
    } catch (error) {
      console.error('Supabase lead creation error, falling back to Postgres:', error);
      // Fall through to Postgres fallback
    }
  }

  // Option 2: Postgres fallback
  try {
    const submission = await storage.createContactSubmission({
      firstName: data.name?.split(' ')[0] || '',
      lastName: data.name?.split(' ').slice(1).join(' ') || '',
      email: data.email,
      message: data.message
    });

    console.log(`Lead saved to Postgres: ${data.email} (website_id: ${website_id})`);
    return {
      provider: 'postgres',
      id: submission.id
    };
  } catch (error) {
    console.error('Postgres lead creation failed:', error);
  }

  // Option 3: Mock response (demo mode)
  console.warn(`Leads mocked: missing Supabase and Postgres for ${data.email} (website_id: ${website_id})`);
  return {
    provider: 'mock',
    id: null,
    mock: true
  };
}