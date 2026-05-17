'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Category } from '@/types';

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
 * User profile page with avatar, info, group memberships, preferences, and subscription.
 */
export default function ProfilePage() {
  const user = {
    displayName: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: null,
    subscriptionTier: 'premium' as const,
    preferences: {
      categories: [Category.FILMS, Category.TAKEAWAYS, Category.BOARD_GAMES, Category.ACTIVITIES],
      dietaryRestrictions: ['Vegetarian'],
      favouriteGenres: ['Comedy', 'Sci-Fi', 'Thriller'],
    },
    groups: [
      { name: 'Flat 4B', members: 4 },
      { name: 'Work Lunch Crew', members: 6 },
      { name: 'Film Club', members: 3 },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold font-display">Profile</h1>

      {/* User Info */}
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Avatar name={user.displayName} size="xl" />
          <div>
            <h2 className="text-xl font-bold">{user.displayName}</h2>
            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
            <Badge variant="purple" size="md" className="mt-2">
              ✨ {user.subscriptionTier} plan
            </Badge>
          </div>
        </div>
      </Card>

      {/* Group Memberships */}
      <div>
        <h2 className="text-xl font-bold mb-4">Groups</h2>
        <div className="space-y-3">
          {user.groups.map((group) => (
            <Card key={group.name} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center">
                  <span className="text-lg">👥</span>
                </div>
                <div>
                  <p className="font-medium">{group.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{group.members} members</p>
                </div>
              </div>
              <Badge variant="default">{group.members} members</Badge>
            </Card>
          ))}
        </div>
      </div>

      {/* Preference Summary */}
      <div>
        <h2 className="text-xl font-bold mb-4">Preferences</h2>
        <Card className="p-6 space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Favourite Categories</p>
            <div className="flex flex-wrap gap-2">
              {user.preferences.categories.map((cat) => (
                <Badge key={cat} variant="coral">{categoryLabels[cat]}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Dietary Restrictions</p>
            <div className="flex flex-wrap gap-2">
              {user.preferences.dietaryRestrictions.map((diet) => (
                <Badge key={diet} variant="success">{diet}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Favourite Genres</p>
            <div className="flex flex-wrap gap-2">
              {user.preferences.favouriteGenres.map((genre) => (
                <Badge key={genre} variant="purple">{genre}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Subscription */}
      <div>
        <h2 className="text-xl font-bold mb-4">Subscription</h2>
        <Card className="p-6 bg-gradient-to-br from-purple/5 to-coral/5 border-purple/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold capitalize">{user.subscriptionTier} Plan</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">£4.99/month • Renews 15 June 2026</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Unlimited rooms
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Up to 8 participants
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Advanced recommendations
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
