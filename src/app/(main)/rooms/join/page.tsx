'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Category } from '@/types';

/**
 * Join room page with room code input and room preview.
 */
export default function JoinRoomPage() {
  const [roomCode, setRoomCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [roomPreview, setRoomPreview] = useState<{
    name: string;
    category: Category;
    participants: number;
    maxParticipants: number;
    host: string;
  } | null>(null);
  const [error, setError] = useState('');

  const handleLookup = () => {
    if (roomCode.length < 6) {
      setError('Room code must be 6 characters');
      return;
    }
    setLoading(true);
    setError('');

    // Mock room lookup
    setTimeout(() => {
      setRoomPreview({
        name: 'Friday Film Night',
        category: Category.FILMS,
        participants: 3,
        maxParticipants: 4,
        host: 'Sam',
      });
      setLoading(false);
    }, 800);
  };

  const handleJoin = () => {
    window.location.href = `/rooms/${roomCode}`;
  };

  return (
    <div className="max-w-md mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-display">Join a Room</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Enter the room code shared by your group.
        </p>
      </div>

      {/* Room Code Input */}
      <div className="space-y-4">
        <Input
          label="Room Code"
          placeholder="e.g. ABCD12"
          value={roomCode}
          onChange={(e) => {
            setRoomCode(e.target.value.toUpperCase());
            setError('');
            setRoomPreview(null);
          }}
          error={error}
          className="text-center text-2xl font-mono tracking-widest"
        />
        <Button
          variant="primary"
          className="w-full"
          onClick={handleLookup}
          loading={loading}
          disabled={roomCode.length < 6}
        >
          Find Room
        </Button>
      </div>

      {/* Room Preview */}
      {roomPreview && (
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3">Room Found!</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Room Name</span>
              <span className="font-medium">{roomPreview.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Category</span>
              <Badge variant="coral">{roomPreview.category.replace('_', ' ')}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Participants</span>
              <span className="font-medium">
                {roomPreview.participants}/{roomPreview.maxParticipants}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Host</span>
              <span className="font-medium">{roomPreview.host}</span>
            </div>
          </div>
          <Button variant="secondary" className="w-full mt-4" onClick={handleJoin}>
            Join Room
          </Button>
        </Card>
      )}

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-[#0f0f23] text-gray-500">or</span>
        </div>
      </div>

      {/* Paste Link */}
      <div>
        <Input
          label="Paste invite link"
          placeholder="https://settled.app/join/ABCD12"
          helperText="Paste the full invite link shared with you"
        />
      </div>
    </div>
  );
}
