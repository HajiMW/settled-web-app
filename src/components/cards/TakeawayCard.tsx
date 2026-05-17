'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import type { Card as CardType, TakeawayMetadata } from '@/types';

interface TakeawayCardProps {
  card: CardType;
}

/**
 * Takeaway card with restaurant image, cuisine type, delivery time, price range, rating, dietary icons.
 */
export function TakeawayCard({ card }: TakeawayCardProps) {
  const metadata = card.metadata as TakeawayMetadata;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white dark:bg-deep-navy/80 rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-coral/20 to-yellow-200/30 flex items-center justify-center">
          <div className="text-center p-4">
            <span className="text-6xl">🥡</span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{metadata.cuisine}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-deep-navy dark:text-soft-cream">{card.title}</h3>
            <span className="text-lg font-semibold text-coral">{metadata.priceRange}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {card.description}
          </p>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">{card.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">{metadata.deliveryTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="coral" size="sm">{metadata.cuisine}</Badge>
            {metadata.dietaryOptions.map((option) => (
              <Badge key={option} variant="success" size="sm">
                {option}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
