'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import type { Card as CardType, RestaurantMetadata } from '@/types';

interface RestaurantCardProps {
  card: CardType;
}

/**
 * Restaurant card with photo, name, cuisine, location, price range, rating.
 */
export function RestaurantCard({ card }: RestaurantCardProps) {
  const metadata = card.metadata as RestaurantMetadata;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white dark:bg-deep-navy/80 rounded-xl shadow-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-purple/20 to-coral/20 flex items-center justify-center">
          <div className="text-center p-4">
            <span className="text-6xl">🍽️</span>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{metadata.location}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="purple" size="sm">{metadata.cuisine}</Badge>
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
