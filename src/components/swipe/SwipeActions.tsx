'use client';

import React from 'react';
import type { SwipeActionType } from '@/types';

interface SwipeActionsProps {
  onSwipe: (action: SwipeActionType) => void;
}

/**
 * Bottom action buttons (X dislike, heart like, star superlike) as alternative to gestures.
 */
export function SwipeActions({ onSwipe }: SwipeActionsProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Dislike button */}
      <button
        onClick={() => onSwipe('dislike')}
        className="w-14 h-14 rounded-full bg-white dark:bg-deep-navy border-2 border-red-400 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
        aria-label="Dislike"
      >
        <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Superlike button */}
      <button
        onClick={() => onSwipe('superlike')}
        className="w-12 h-12 rounded-full bg-white dark:bg-deep-navy border-2 border-purple flex items-center justify-center shadow-lg hover:scale-110 hover:bg-purple/10 transition-all duration-200"
        aria-label="Super like"
      >
        <svg className="w-6 h-6 text-purple" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </button>

      {/* Like button */}
      <button
        onClick={() => onSwipe('like')}
        className="w-14 h-14 rounded-full bg-white dark:bg-deep-navy border-2 border-green-400 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200"
        aria-label="Like"
      >
        <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    </div>
  );
}
