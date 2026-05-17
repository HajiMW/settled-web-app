'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import type { Card as CardType, BoardGameMetadata } from '@/types';

interface BoardGameCardProps {
  card: CardType;
}

/**
 * Board game card with box art, name, player count, duration, complexity meter, category.
 */
export function BoardGameCard({ card }: BoardGameCardProps) {
  const metadata = card.metadata as BoardGameMetadata;

  const complexityColors = {
    light: 'bg-green-400',
    medium: 'bg-yellow-400',
    heavy: 'bg-red-400',
  };

  const complexityWidth = {
    light: 'w-1/3',
    medium: 'w-2/3',
    heavy: 'w-full',
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white dark:bg-deep-navy/80 rounded-xl shadow-lg overflow-hidden">
        <div className="h-56 bg-gradient-to-br from-green-100/50 to-blue-100/50 dark:from-green-900/20 dark:to-blue-900/20 flex items-center justify-center">
          <div className="text-center p-4">
            <span className="text-6xl">🎲</span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{card.title}</p>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-deep-navy dark:text-soft-cream mb-2">{card.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {card.description}
          </p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">👥</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{metadata.playerCount} players</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">⏱️</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{metadata.duration}</span>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">Complexity</span>
              <span className="text-xs font-medium capitalize text-gray-600 dark:text-gray-400">{metadata.complexity}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${complexityColors[metadata.complexity]} ${complexityWidth[metadata.complexity]}`} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Badge variant="purple" size="sm">{metadata.category}</Badge>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">{card.rating}/10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
