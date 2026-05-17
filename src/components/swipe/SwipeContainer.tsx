'use client';

import React from 'react';
import { SwipeCard } from './SwipeCard';
import { SwipeActions } from './SwipeActions';
import type { Card as CardType, SwipeActionType } from '@/types';

interface SwipeContainerProps {
  cards: CardType[];
  currentIndex: number;
  onSwipe: (action: SwipeActionType) => void;
}

/**
 * Container managing the card stack, showing current card with next card peeking behind.
 */
export function SwipeContainer({ cards, currentIndex, onSwipe }: SwipeContainerProps) {
  const currentCard = cards[currentIndex];
  const nextCard = cards[currentIndex + 1];

  if (!currentCard) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center p-8">
        <span className="text-6xl mb-4">🎉</span>
        <h3 className="text-xl font-bold text-deep-navy dark:text-soft-cream mb-2">
          All done!
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          You&apos;ve swiped through all the options. Waiting for others to finish...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full max-w-sm h-[500px]">
        {nextCard && (
          <SwipeCard key={nextCard.id} card={nextCard} onSwipe={onSwipe} isTop={false} />
        )}
        <SwipeCard key={currentCard.id} card={currentCard} onSwipe={onSwipe} isTop={true} />
      </div>
      <SwipeActions onSwipe={onSwipe} />
    </div>
  );
}
