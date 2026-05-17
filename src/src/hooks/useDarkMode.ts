'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for dark mode toggle with localStorage persistence.
 * Respects the user's system preference as the default.
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('settled-dark-mode');
    if (stored !== null) {
      setIsDarkMode(stored === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Persist preference
    localStorage.setItem('settled-dark-mode', String(isDarkMode));
  }, [isDarkMode, isLoaded]);

  const toggle = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const setDarkMode = useCallback((value: boolean) => {
    setIsDarkMode(value);
  }, []);

  return {
    isDarkMode,
    isLoaded,
    toggle,
    setDarkMode,
  };
}
