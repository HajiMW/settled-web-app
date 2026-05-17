'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Avatar } from '@/components/ui/Avatar';
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

const matchHistory = [
  { id: '1', title: 'Oppenheimer', category: Category.FILMS, date: '2026-05-17', participants: ['Alex', 'Sam', 'Jordan'] },
  { id: '2', title: 'Napoli Pizza', category: Category.TAKEAWAYS, date: '2026-05-16', participants: ['Alex', 'Sam', 'Taylor', 'Morgan'] },
  { id: '3', title: 'Escape Room', category: Category.ACTIVITIES, date: '2026-05-14', participants: ['Alex', 'Jordan'] },
  { id: '4', title: 'Baldur\'s Gate 3', category: Category.VIDEO_GAMES, date: '2026-05-12', participants: ['Alex', 'Sam', 'Jordan', 'Taylor'] },
  { id: '5', title: 'Dishoom', category: Category.RESTAURANTS, date: '2026-05-10', participants: ['Alex', 'Morgan'] },
  { id: '6', title: 'Baby Reindeer', category: Category.TV_SHOWS, date: '2026-05-08', participants: ['Alex', 'Sam', 'Jordan'] },
  { id: '7', title: 'Wingspan', category: Category.BOARD_GAMES, date: '2026-05-05', participants: ['Alex', 'Sam', 'Taylor'] },
  { id: '8', title: 'Wagamama', category: Category.RESTAURANTS, date: '2026-05-03', participants: ['Alex', 'Jordan', 'Morgan'] },
  { id: '9', title: 'Dune: Part Two', category: Category.FILMS, date: '2026-05-01', participants: ['Alex', 'Sam'] },
  { id: '10', title: 'Bowling', category: Category.ACTIVITIES, date: '2026-04-28', participants: ['Alex', 'Sam', 'Jordan', 'Taylor', 'Morgan'] },
];

/**
 * History page with list of past matches, filters, and search.
 */
export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredHistory = matchHistory.filter((match) => {
    const matchesSearch = match.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || match.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold font-display">History</h1>

      {/* Search and Filters */}
      <div className="space-y-4">
        <Input
          placeholder="Search matches..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
        />
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
              {categoryIcons[cat]} {cat.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        {filteredHistory.length === 0 ? (
          <div className="text-center py-12">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="text-gray-500 dark:text-gray-400">No matches found</p>
          </div>
        ) : (
          filteredHistory.map((match) => (
            <Card key={match.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{categoryIcons[match.category]}</span>
                  <div>
                    <h3 className="font-semibold">{match.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(match.date)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {match.participants.slice(0, 3).map((name) => (
                      <Avatar key={name} name={name} size="sm" />
                    ))}
                    {match.participants.length > 3 && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium ring-2 ring-white dark:ring-deep-navy">
                        +{match.participants.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
