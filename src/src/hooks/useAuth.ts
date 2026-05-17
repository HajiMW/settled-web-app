'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import type { User } from '@/types';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for authentication using Supabase.
 * Provides sign in, sign up, sign out, and user state management.
 */
export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setState({
            user: {
              id: session.user.id,
              email: session.user.email || '',
              displayName: session.user.user_metadata?.display_name || '',
              avatar: session.user.user_metadata?.avatar_url || null,
              preferences: {
                dietaryRestrictions: [],
                favouriteGenres: [],
                location: null,
                ukPostcode: null,
                categories: [],
              },
              subscriptionTier: 'free',
              ukPostcode: null,
              createdAt: session.user.created_at,
            },
            loading: false,
            error: null,
          });
        } else {
          setState({ user: null, loading: false, error: null });
        }
      } catch (error) {
        setState({ user: null, loading: false, error: 'Failed to check session' });
      }
    };

    checkSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setState((prev) => ({
            ...prev,
            user: {
              id: session.user.id,
              email: session.user.email || '',
              displayName: session.user.user_metadata?.display_name || '',
              avatar: session.user.user_metadata?.avatar_url || null,
              preferences: prev.user?.preferences || {
                dietaryRestrictions: [],
                favouriteGenres: [],
                location: null,
                ukPostcode: null,
                categories: [],
              },
              subscriptionTier: prev.user?.subscriptionTier || 'free',
              ukPostcode: prev.user?.ukPostcode || null,
              createdAt: session.user.created_at,
            },
            loading: false,
            error: null,
          }));
        } else {
          setState({ user: null, loading: false, error: null });
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error: any) {
      setState((prev) => ({ ...prev, loading: false, error: error.message }));
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string, displayName: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: displayName },
        },
      });
      if (error) throw error;
    } catch (error: any) {
      setState((prev) => ({ ...prev, loading: false, error: error.message }));
    }
  }, []);

  const signOut = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setState({ user: null, loading: false, error: null });
    } catch (error: any) {
      setState((prev) => ({ ...prev, loading: false, error: error.message }));
    }
  }, []);

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    signIn,
    signUp,
    signOut,
  };
}
