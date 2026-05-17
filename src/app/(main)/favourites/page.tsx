'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
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

const initialFavourites = [
  { id: '1', title: 'Oppenheimer', category: Category.FILMS, rating: 8.3, description: 'Christopher Nolan\'s epic biographical thriller' },
  { id: '2', title: 'Napoli Pizza', category: Category.TAKEAWAYS, rating: 4.7, description: 'Wood-fired Neapolitan-style pizzas' },
  { id: '3', title: 'Escape Room', category: Category.ACTIVITIES, rating: 4.6, description: 'Solve puzzles and escape within 60 minutes' },
  { id: '4', title: 'Baldur\'s Gate 3', category: Category.VIDEO_GAMES, rating: 9.7, description: 'A sprawling RPG in the D&D universe' },
  { id: '5', title: 'Dishoom', category: Category.RESTAURANTS, rating: 4.7, description: 'Bombay-inspired café' },
  { id: '6', title: 'Wingspan', category: Category.BOARD_GAMES, rating: 8.1, description: 'Competitive bird-collection engine-building game' },
];

/**
 * Favourites page with grid of saved matches, category filter, and remove option.
 */
export default function FavouritesPage() {
  const [favourites, setFavourites] = useState(initialFavourites);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredFavourites = favourites.filter(
    (fav) => selectedCategory === 'all' || fav.category === selectedCategory
  );

  const removeFavourite = (id: string) => {
    setFavourites((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-display">Favourites</h1>
        <Badge variant="coral" size="md">{favourites.length} saved</Badge>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-coral text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          All
        </button>
        {Object.values(Category).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-coral text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {categoryIcons[cat]}
          </button>
        ))}
      </div>

      {/* Favourites Grid */}
      {filteredFavourites.length === 0 ? (
        <div className="text-center py-16">
          <span className="text-5xl block mb-4">💔</span>
          <h3 className="text-lg font-bold mb-2">No favourites yet</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Save matches to find them here later.
          </p>
          <Link href="/rooms/create">
            <Button variant="primary">Create a Room</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFavourites.map((fav) => (
            <Card key={fav.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{categoryIcons[fav.category]}</span>
                <button
                  onClick={() => removeFavourite(fav.id)}
                  className="p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove from favourites"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h3 className="font-bold mb-1">{fav.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                {fav.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">{fav.rating}</span>
                </div>
                <Link href={`/rooms/create?category=${fav.category}`}>
                  <Button variant="ghost" size="sm">
                    🔄 New room
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
