'use client';

import { useState, useCallback } from 'react';
import type { Card, SwipeAction, Match, SwipeActionType } from '@/types';

interface SwipeState {
  currentIndex: number;
  swipeHistory: SwipeAction[];
  matches: Match[];
}

/**
 * Custom hook for swipe state management.
 * Manages the current card, swipe actions, and match detection.
 */
export function useSwipe(cards: Card[], roomId: string, userId: string) {
  const [state, setState] = useState<SwipeState>({
    currentIndex: 0,
    swipeHistory: [],
    matches: [],
  });

  const currentCard = cards[state.currentIndex] || null;
  const isComplete = state.currentIndex >= cards.length;
  const progress = cards.length > 0 ? state.currentIndex / cards.length : 0;

  const recordSwipe = useCallback(
    (action: SwipeActionType) => {
      if (!currentCard) return;

      const swipeAction: SwipeAction = {
        userId,
        cardId: currentCard.id,
        roomId,
        action,
        timestamp: new Date().toISOString(),
      };

      setState((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        swipeHistory: [...prev.swipeHistory, swipeAction],
      }));

      // In production, this would:
      // 1. Send the swipe action to Supabase
      // 2. Check if all participants have swiped on this card
      // 3. If so, check for matches (all liked)
      // await supabase.from('swipe_actions').insert(swipeAction);
    },
    [currentCard, userId, roomId]
  );

  const swipeLeft = useCallback(() => {
    recordSwipe('dislike');
  }, [recordSwipe]);

  const swipeRight = useCallback(() => {
    recordSwipe('like');
  }, [recordSwipe]);

  const superLike = useCallback(() => {
    recordSwipe('superlike');
  }, [recordSwipe]);

  const reset = useCallback(() => {
    setState({
      currentIndex: 0,
      swipeHistory: [],
      matches: [],
    });
  }, []);

  return {
    currentCard,
    currentIndex: state.currentIndex,
    totalCards: cards.length,
    isComplete,
    progress,
    swipeHistory: state.swipeHistory,
    matches: state.matches,
    swipeLeft,
    swipeRight,
    superLike,
    reset,
  };
}
