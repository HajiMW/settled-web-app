'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { Category } from '@/types';

const categoryIcons: Record<Category, string> = {
  [Category.FILMS]: '🎬',
  [Category.TV_SHOWS]: '📺',
  [Category.TAKEAWAYS]: '🥡',
  [Category.RESTAURANTS]: '🍽️',
  [Category.BOARD_GAMES]: '🎲',
  [Category.VIDEO_GAMES]: '🎮',
  [Category.ACTIVITIES]: '🎯',
};

const categoryLabels: Record<Category, string> = {
  [Category.FILMS]: 'Films',
  [Category.TV_SHOWS]: 'TV Shows',
  [Category.TAKEAWAYS]: 'Takeaways',
  [Category.RESTAURANTS]: 'Restaurants',
  [Category.BOARD_GAMES]: 'Board Games',
  [Category.VIDEO_GAMES]: 'Video Games',
  [Category.ACTIVITIES]: 'Activities',
};

/**
 * Side navigation for desktop with category icons and room list.
 */
export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-deep-navy/50 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
          Categories
        </h3>
        <nav className="space-y-1">
          {Object.values(Category).map((category) => (
            <Link
              key={category}
              href={`/rooms/create?category=${category}`}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-deep-navy/70 dark:text-soft-cream/70 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-coral transition-colors"
            >
              <span className="text-lg">{categoryIcons[category]}</span>
              <span>{categoryLabels[category]}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
          Active Rooms
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-coral/5 border border-coral/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div>
              <p className="text-sm font-medium text-deep-navy dark:text-soft-cream">Friday Film Night</p>
              <p className="text-xs text-gray-500">3 participants</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-purple/5 border border-purple/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div>
              <p className="text-sm font-medium text-deep-navy dark:text-soft-cream">Takeaway Tuesday</p>
              <p className="text-xs text-gray-500">4 participants</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-gray-100 dark:border-gray-800">
        <Link
          href="/rooms/create"
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-coral text-white rounded-xl font-medium text-sm hover:bg-coral/90 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Room
        </Link>
      </div>
    </aside>
  );
}
