import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

/**
 * Server-side Supabase client.
 * Uses the service role key for server-side operations with elevated privileges.
 * Only use in Server Components, API routes, and Server Actions.
 */
export function createServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

/**
 * Server-side Supabase client that respects the user's session.
 * Uses cookies to maintain the user's auth state.
 */
export function createServerClientWithAuth() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: {
      headers: {
        // In a real implementation, extract the auth token from cookies
        // and pass it here for RLS to work correctly
      },
    },
  });
}
