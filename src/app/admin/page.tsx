'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Category } from '@/types';

const stats = [
  { label: 'Total Users', value: '12,847', change: '+234 this week', icon: '👥' },
  { label: 'Active Rooms', value: '1,293', change: '+89 today', icon: '🚪' },
  { label: 'Matches Today', value: '3,456', change: '+12% vs yesterday', icon: '✨' },
  { label: 'Revenue (MTD)', value: '£48,290', change: '+8% vs last month', icon: '💷' },
];

const users = [
  { id: '1', name: 'Sarah Mitchell', email: 'sarah@example.com', tier: 'premium', status: 'active', rooms: 15 },
  { id: '2', name: 'James Wilson', email: 'james@example.com', tier: 'free', status: 'active', rooms: 3 },
  { id: '3', name: 'Emma Thompson', email: 'emma@example.com', tier: 'group', status: 'active', rooms: 28 },
  { id: '4', name: 'Oliver Brown', email: 'oliver@example.com', tier: 'premium', status: 'suspended', rooms: 0 },
  { id: '5', name: 'Charlotte Davies', email: 'charlotte@example.com', tier: 'free', status: 'active', rooms: 7 },
];

const popularCategories = [
  { category: Category.FILMS, percentage: 28 },
  { category: Category.TAKEAWAYS, percentage: 24 },
  { category: Category.RESTAURANTS, percentage: 18 },
  { category: Category.ACTIVITIES, percentage: 14 },
  { category: Category.BOARD_GAMES, percentage: 9 },
  { category: Category.VIDEO_GAMES, percentage: 5 },
  { category: Category.TV_SHOWS, percentage: 2 },
];

const flaggedItems = [
  { id: '1', type: 'Room name', content: 'Inappropriate room name', reportedBy: 'System', date: '2 hours ago' },
  { id: '2', type: 'User report', content: 'Spam behaviour in room', reportedBy: 'user_4521', date: '5 hours ago' },
];

/**
 * Admin dashboard with stats, user management, analytics, moderation, and system health.
 */
export default function AdminPage() {
  const [userSearch, setUserSearch] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      user.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-display">Admin Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Overview of Settled platform metrics and management.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* User Management */}
      <section>
        <h2 className="text-xl font-bold mb-4">User Management</h2>
        <Card className="p-5">
          <div className="mb-4">
            <Input
              placeholder="Search users by name or email..."
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-2 font-medium text-gray-500 dark:text-gray-400">Name</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-500 dark:text-gray-400">Email</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-500 dark:text-gray-400">Tier</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-500 dark:text-gray-400">Rooms</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-2 font-medium">{user.name}</td>
                    <td className="py-3 px-2 text-gray-500 dark:text-gray-400">{user.email}</td>
                    <td className="py-3 px-2">
                      <Badge variant={user.tier === 'group' ? 'purple' : user.tier === 'premium' ? 'coral' : 'default'}>
                        {user.tier}
                      </Badge>
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant={user.status === 'active' ? 'success' : 'warning'}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-2">{user.rooms}</td>
                    <td className="py-3 px-2">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">
                          {user.status === 'active' ? 'Suspend' : 'Activate'}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Room Analytics */}
      <section>
        <h2 className="text-xl font-bold mb-4">Category Popularity</h2>
        <Card className="p-5">
          <div className="space-y-3">
            {popularCategories.map((item) => (
              <div key={item.category} className="flex items-center gap-3">
                <span className="text-sm font-medium w-28 capitalize">
                  {item.category.replace('_', ' ')}
                </span>
                <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-coral to-purple rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium w-10 text-right">{item.percentage}%</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Average session time: <span className="font-medium text-deep-navy dark:text-soft-cream">4m 32s</span>
            </p>
          </div>
        </Card>
      </section>

      {/* Content Moderation */}
      <section>
        <h2 className="text-xl font-bold mb-4">Content Moderation</h2>
        <Card className="p-5">
          {flaggedItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">
              No flagged items. All clear! ✅
            </p>
          ) : (
            <div className="space-y-3">
              {flaggedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border border-yellow-200 dark:border-yellow-800"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">{item.type}</Badge>
                      <span className="text-sm font-medium">{item.content}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Reported by {item.reportedBy} • {item.date}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Dismiss</Button>
                    <Button variant="danger" size="sm">Action</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </section>

      {/* System Health */}
      <section>
        <h2 className="text-xl font-bold mb-4">System Health</h2>
        <Card className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium">API</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Healthy • 23ms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium">Database</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Healthy • 5ms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <div>
                <p className="text-sm font-medium">Realtime</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Healthy • 12ms</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
