'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { DarkModeToggle } from '@/components/layout/DarkModeToggle';
import { Category } from '@/types';

/**
 * Settings page with account settings, preferences, notifications,
 * subscription management, and GDPR privacy section.
 */
export default function SettingsPage() {
  const [name, setName] = useState('Alex Johnson');
  const [email, setEmail] = useState('alex@example.com');
  const [notifications, setNotifications] = useState({
    matchAlerts: true,
    roomInvites: true,
    marketing: false,
    weeklyDigest: true,
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold font-display">Settings</h1>

      {/* Account Settings */}
      <section>
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <Card className="p-6 space-y-4">
          <Input
            label="Display name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <label className="block text-sm font-medium text-deep-navy dark:text-soft-cream mb-1.5">
              Password
            </label>
            <Button variant="outline" size="sm">Change password</Button>
          </div>
          <div className="pt-2">
            <Button variant="primary" size="sm">Save changes</Button>
          </div>
        </Card>
      </section>

      {/* Preferences */}
      <section>
        <h2 className="text-xl font-bold mb-4">Preferences</h2>
        <Card className="p-6 space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">Favourite Categories</p>
            <div className="flex flex-wrap gap-2">
              {Object.values(Category).map((cat) => (
                <Badge key={cat} variant="coral" size="md">
                  {cat.replace('_', ' ')}
                </Badge>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="mt-2">
              Update preferences
            </Button>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Dietary Restrictions</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" size="md">Vegetarian</Badge>
            </div>
            <Button variant="ghost" size="sm" className="mt-2">
              Update dietary preferences
            </Button>
          </div>
        </Card>
      </section>

      {/* Appearance */}
      <section>
        <h2 className="text-xl font-bold mb-4">Appearance</h2>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark mode</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark themes</p>
            </div>
            <DarkModeToggle />
          </div>
        </Card>
      </section>

      {/* Notifications */}
      <section>
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <Card className="p-6 space-y-4">
          {[
            { key: 'matchAlerts', label: 'Match alerts', description: 'Get notified when your group finds a match' },
            { key: 'roomInvites', label: 'Room invites', description: 'Notifications when someone invites you to a room' },
            { key: 'weeklyDigest', label: 'Weekly digest', description: 'A summary of your activity each week' },
            { key: 'marketing', label: 'Marketing emails', description: 'Product updates and promotional offers' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
              <button
                onClick={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    [item.key]: !prev[item.key as keyof typeof prev],
                  }))
                }
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  notifications[item.key as keyof typeof notifications]
                    ? 'bg-coral'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications[item.key as keyof typeof notifications]
                      ? 'translate-x-5'
                      : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </Card>
      </section>

      {/* Subscription */}
      <section>
        <h2 className="text-xl font-bold mb-4">Subscription</h2>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold">Premium Plan</h3>
                <Badge variant="purple">Active</Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">£4.99/month • Next billing: 15 June 2026</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Change plan</Button>
            <Button variant="ghost" size="sm">Cancel subscription</Button>
          </div>
        </Card>
      </section>

      {/* Privacy & GDPR */}
      <section>
        <h2 className="text-xl font-bold mb-4">Privacy & Data (GDPR)</h2>
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Download my data</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Export all your personal data in JSON format</p>
            </div>
            <Button variant="outline" size="sm">Download</Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Cookie preferences</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Manage your cookie consent settings</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Marketing consent</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Control how we use your data for marketing</p>
            </div>
            <button
              onClick={() =>
                setNotifications((prev) => ({ ...prev, marketing: !prev.marketing }))
              }
              className={`relative w-11 h-6 rounded-full transition-colors ${
                notifications.marketing ? 'bg-coral' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  notifications.marketing ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <hr className="border-gray-200 dark:border-gray-700" />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm text-red-600">Delete account</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Permanently delete your account and all data</p>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete
            </Button>
          </div>

          {showDeleteConfirm && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                Are you sure? This action cannot be undone. All your data, matches, and preferences will be permanently deleted.
              </p>
              <div className="flex gap-2">
                <Button variant="danger" size="sm">
                  Yes, delete my account
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setShowDeleteConfirm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </Card>
      </section>
    </div>
  );
}
