'use client';

import React, { useState } from 'react';
import { SwipeContainer } from '@/components/swipe/SwipeContainer';
import { MatchOverlay } from '@/components/swipe/MatchOverlay';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { filmsData } from '@/data/films';
import { tvShowsData } from '@/data/tv-shows';
import { takeawaysData } from '@/data/takeaways';
import { Category } from '@/types';
import type { Card as CardType, SwipeActionType } from '@/types';

const participants = [
  { name: 'Alex', status: 'swiping' },
  { name: 'Sam', status: 'swiping' },
  { name: 'Jordan', status: 'waiting' },
];

/**
 * Swipe room page with card stack, participant avatars, and progress.
 */
export default function SwipeRoomPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedCard, setMatchedCard] = useState<CardType | null>(null);

  // Use films data as default mock
  const cards = filmsData;
  const category = Category.FILMS;
  const roomName = 'Friday Film Night';

  const handleSwipe = (action: SwipeActionType) => {
    // Simulate a match on the 3rd swipe
    if (currentIndex === 2 && action === 'like') {
      setMatchedCard(cards[2]);
      setShowMatch(true);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const progress = cards.length > 0 ? (currentIndex / cards.length) * 100 : 0;

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* Room Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold font-display">{roomName}</h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Badge variant="coral">🎬 Films</Badge>
          <Badge variant="default">{participants.length} participants</Badge>
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
          <span>Progress</span>
          <span>{currentIndex}/{cards.length}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-coral to-purple rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Swipe Container */}
      <SwipeContainer
        cards={cards}
        currentIndex={currentIndex}
        onSwipe={handleSwipe}
      />

      {/* Participants */}
      <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        {participants.map((participant) => (
          <div key={participant.name} className="flex flex-col items-center gap-1">
            <div className="relative">
              <Avatar name={participant.name} size="sm" />
              {participant.status === 'swiping' && (
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-deep-navy" />
              )}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">{participant.name}</span>
          </div>
        ))}
      </div>

      {/* Match Overlay */}
      {showMatch && matchedCard && (
        <MatchOverlay
          card={matchedCard}
          onClose={() => setShowMatch(false)}
          onSaveToFavourites={() => setShowMatch(false)}
          onStartNewRound={() => {
            setShowMatch(false);
            setCurrentIndex(0);
          }}
        />
      )}
    </div>
  );
}
