import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Browser-side Supabase client.
 * Uses the public anon key for client-side operations.
 * Falls back gracefully when environment variables are not configured.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

export default supabase;
