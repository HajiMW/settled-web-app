'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
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

const activeRooms = [
  { id: 'ABCD12', name: 'Friday Film Night', category: Category.FILMS, participants: 3, status: 'active' as const },
  { id: 'EFGH34', name: 'Takeaway Tuesday', category: Category.TAKEAWAYS, participants: 4, status: 'waiting' as const },
  { id: 'IJKL56', name: 'Game Night', category: Category.BOARD_GAMES, participants: 5, status: 'active' as const },
];

const recentMatches = [
  { id: '1', title: 'Oppenheimer', category: Category.FILMS, date: '2 hours ago', participants: ['Alex', 'Sam', 'Jordan'] },
  { id: '2', title: 'Napoli Pizza', category: Category.TAKEAWAYS, date: '1 day ago', participants: ['Alex', 'Sam', 'Taylor', 'Morgan'] },
  { id: '3', title: 'Escape Room', category: Category.ACTIVITIES, date: '3 days ago', participants: ['Alex', 'Jordan'] },
];

/**
 * Dashboard page with welcome message, quick actions, active rooms, recent matches, and stats.
 */
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold font-display">
          Welcome back, <span className="text-coral">Alex</span> 👋
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Ready to settle something today?
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/rooms/create">
          <Card className="p-6 bg-gradient-to-br from-coral/10 to-coral/5 border-coral/20 hover:border-coral/40">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Create Room</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Start a new decision session</p>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="/rooms/join">
          <Card className="p-6 bg-gradient-to-br from-purple/10 to-purple/5 border-purple/20 hover:border-purple/40">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Join Room</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enter a room code to join</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-coral">24</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total Matches</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-purple">12</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Rooms Created</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-pink">8</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Favourites</p>
        </Card>
      </div>

      {/* Active Rooms */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Active Rooms</h2>
          <Link href="/rooms/create" className="text-sm text-coral hover:underline">
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {activeRooms.map((room) => (
            <Link key={room.id} href={`/rooms/${room.id}`}>
              <Card className="p-4 flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{categoryIcons[room.category]}</span>
                  <div>
                    <h3 className="font-semibold">{room.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {room.participants} participants • Code: {room.id}
                    </p>
                  </div>
                </div>
                <Badge variant={room.status === 'active' ? 'success' : 'warning'}>
                  {room.status}
                </Badge>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Matches */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recent Matches</h2>
          <Link href="/history" className="text-sm text-coral hover:underline">
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {recentMatches.map((match) => (
            <Card key={match.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{categoryIcons[match.category]}</span>
                  <div>
                    <h3 className="font-semibold">{match.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{match.date}</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {match.participants.map((name) => (
                    <Avatar key={name} name={name} size="sm" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
