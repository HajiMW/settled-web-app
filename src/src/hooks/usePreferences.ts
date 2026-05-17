'use client';

import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import type { UserPreferences, Category } from '@/types';

const DEFAULT_PREFERENCES: UserPreferences = {
  dietaryRestrictions: [],
  favouriteGenres: [],
  location: null,
  ukPostcode: null,
  categories: [],
};

/**
 * Custom hook for user preferences management.
 * Handles loading, updating, and persisting user preferences.
 */
export function usePreferences(userId: string | null) {
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadPreferences = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    try {
      // In production, fetch from Supabase:
      // const { data, error } = await supabase
      //   .from('user_preferences')
      //   .select('*')
      //   .eq('user_id', userId)
      //   .single();

      // For now, try localStorage
      const stored = localStorage.getItem(`settled-preferences-${userId}`);
      if (stored) {
        setPreferences(JSON.parse(stored));
      }
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }, [userId]);

  const updatePreferences = useCallback(
    async (updates: Partial<UserPreferences>) => {
      if (!userId) return;
      setLoading(true);
      try {
        const updated = { ...preferences, ...updates };
        setPreferences(updated);

        // Persist to localStorage (and Supabase in production)
        localStorage.setItem(`settled-preferences-${userId}`, JSON.stringify(updated));

        // In production:
        // await supabase
        //   .from('user_preferences')
        //   .upsert({ user_id: userId, ...updated });

        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    },
    [userId, preferences]
  );

  const addDietaryRestriction = useCallback(
    (restriction: string) => {
      updatePreferences({
        dietaryRestrictions: [...preferences.dietaryRestrictions, restriction],
      });
    },
    [preferences.dietaryRestrictions, updatePreferences]
  );

  const removeDietaryRestriction = useCallback(
    (restriction: string) => {
      updatePreferences({
        dietaryRestrictions: preferences.dietaryRestrictions.filter((r) => r !== restriction),
      });
    },
    [preferences.dietaryRestrictions, updatePreferences]
  );

  const toggleCategory = useCallback(
    (category: Category) => {
      const exists = preferences.categories.includes(category);
      updatePreferences({
        categories: exists
          ? preferences.categories.filter((c) => c !== category)
          : [...preferences.categories, category],
      });
    },
    [preferences.categories, updatePreferences]
  );

  const setPostcode = useCallback(
    (postcode: string) => {
      updatePreferences({ ukPostcode: postcode, location: postcode });
    },
    [updatePreferences]
  );

  return {
    preferences,
    loading,
    error,
    loadPreferences,
    updatePreferences,
    addDietaryRestriction,
    removeDietaryRestriction,
    toggleCategory,
    setPostcode,
  };
}
