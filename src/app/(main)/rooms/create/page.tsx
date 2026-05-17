'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Category } from '@/types';
import { generateRoomCode } from '@/lib/utils/helpers';

const categoryOptions = [
  { value: Category.FILMS, label: 'Films', icon: '🎬', description: 'Movies to watch together' },
  { value: Category.TV_SHOWS, label: 'TV Shows', icon: '📺', description: 'Series to binge' },
  { value: Category.TAKEAWAYS, label: 'Takeaways', icon: '🥡', description: 'Food to order in' },
  { value: Category.RESTAURANTS, label: 'Restaurants', icon: '🍽️', description: 'Places to eat out' },
  { value: Category.BOARD_GAMES, label: 'Board Games', icon: '🎲', description: 'Games to play together' },
  { value: Category.VIDEO_GAMES, label: 'Video Games', icon: '🎮', description: 'Games to play online' },
  { value: Category.ACTIVITIES, label: 'Activities', icon: '🎯', description: 'Things to do together' },
];

/**
 * Create room page with category selection, room name, settings, and invite code generation.
 */
export default function CreateRoomPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [roomName, setRoomName] = useState('');
  const [maxParticipants, setMaxParticipants] = useState(4);
  const [swipeTimeout, setSwipeTimeout] = useState(30);
  const [avoidRepeats, setAvoidRepeats] = useState(true);
  const [roomCode, setRoomCode] = useState('');
  const [isCreated, setIsCreated] = useState(false);

  const handleCreate = () => {
    if (!selectedCategory || !roomName.trim()) return;
    const code = generateRoomCode();
    setRoomCode(code);
    setIsCreated(true);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(roomCode);
  };

  if (isCreated) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="text-6xl">🎉</div>
        <h1 className="text-2xl font-bold">Room Created!</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Share this code with your group to get started.
        </p>
        <div className="bg-soft-cream dark:bg-deep-navy/50 rounded-xl p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Room Code</p>
          <p className="text-4xl font-bold font-mono tracking-widest text-coral">{roomCode}</p>
        </div>
        <div className="flex flex-col gap-3">
          <Button variant="primary" onClick={copyCode}>
            📋 Copy Code
          </Button>
          <Button variant="secondary" onClick={() => window.location.href = `/rooms/${roomCode}`}>
            Enter Room
          </Button>
          <Button variant="ghost" onClick={() => { setIsCreated(false); setRoomCode(''); }}>
            Create Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-display">Create a Room</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Choose a category and invite your group.
        </p>
      </div>

      {/* Category Selection */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Choose a category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categoryOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedCategory(option.value)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                selectedCategory === option.value
                  ? 'border-coral bg-coral/5 shadow-md'
                  : 'border-gray-200 dark:border-gray-700 hover:border-coral/50'
              }`}
            >
              <span className="text-3xl block mb-2">{option.icon}</span>
              <span className="text-sm font-semibold block">{option.label}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{option.description}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Room Name */}
      <div>
        <Input
          label="Room name"
          placeholder="e.g. Friday Film Night"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          helperText="Give your room a fun name"
        />
      </div>

      {/* Settings */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Settings</h2>
        <Card className="p-5 space-y-5">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Max participants</label>
              <span className="text-sm font-bold text-coral">{maxParticipants}</span>
            </div>
            <input
              type="range"
              min="2"
              max="8"
              value={maxParticipants}
              onChange={(e) => setMaxParticipants(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-coral"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>2</span>
              <span>8</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Swipe timeout (seconds)</label>
              <span className="text-sm font-bold text-purple">{swipeTimeout}s</span>
            </div>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={swipeTimeout}
              onChange={(e) => setSwipeTimeout(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>10s</span>
              <span>60s</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium">Avoid repeats</label>
              <p className="text-xs text-gray-500 dark:text-gray-400">Don&apos;t show previously matched items</p>
            </div>
            <button
              onClick={() => setAvoidRepeats(!avoidRepeats)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                avoidRepeats ? 'bg-coral' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  avoidRepeats ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </Card>
      </div>

      {/* Create Button */}
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={handleCreate}
        disabled={!selectedCategory || !roomName.trim()}
      >
        Create Room
      </Button>
    </div>
  );
}
