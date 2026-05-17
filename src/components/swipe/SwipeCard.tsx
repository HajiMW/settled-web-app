'use client';

import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils/helpers';
import type { Card as CardType, SwipeActionType } from '@/types';
import { FilmCard } from '@/components/cards/FilmCard';
import { TVShowCard } from '@/components/cards/TVShowCard';
import { TakeawayCard } from '@/components/cards/TakeawayCard';
import { RestaurantCard } from '@/components/cards/RestaurantCard';
import { BoardGameCard } from '@/components/cards/BoardGameCard';
import { VideoGameCard } from '@/components/cards/VideoGameCard';
import { ActivityCard } from '@/components/cards/ActivityCard';
import { Category } from '@/types';

interface SwipeCardProps {
  card: CardType;
  onSwipe: (action: SwipeActionType) => void;
  isTop?: boolean;
}

/**
 * Draggable card with touch/mouse gesture handling.
 * Drag left = dislike (red overlay), drag right = like (green overlay), drag up = superlike (purple overlay).
 */
export function SwipeCard({ card, onSwipe, isTop = false }: SwipeCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const SWIPE_THRESHOLD = 100;
  const SUPERLIKE_THRESHOLD = -80;

  const handleStart = (clientX: number, clientY: number) => {
    if (!isTop) return;
    setIsDragging(true);
    setStartPos({ x: clientX, y: clientY });
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging || !isTop) return;
    const deltaX = clientX - startPos.x;
    const deltaY = clientY - startPos.y;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleEnd = () => {
    if (!isDragging || !isTop) return;
    setIsDragging(false);

    if (position.x > SWIPE_THRESHOLD) {
      onSwipe('like');
    } else if (position.x < -SWIPE_THRESHOLD) {
      onSwipe('dislike');
    } else if (position.y < SUPERLIKE_THRESHOLD) {
      onSwipe('superlike');
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const rotation = position.x * 0.1;
  const opacity = Math.min(Math.abs(position.x) / SWIPE_THRESHOLD, 1);
  const superlikeOpacity = Math.min(Math.abs(Math.min(position.y, 0)) / Math.abs(SUPERLIKE_THRESHOLD), 1);

  const renderCategoryCard = () => {
    switch (card.category) {
      case Category.FILMS:
        return <FilmCard card={card} />;
      case Category.TV_SHOWS:
        return <TVShowCard card={card} />;
      case Category.TAKEAWAYS:
        return <TakeawayCard card={card} />;
      case Category.RESTAURANTS:
        return <RestaurantCard card={card} />;
      case Category.BOARD_GAMES:
        return <BoardGameCard card={card} />;
      case Category.VIDEO_GAMES:
        return <VideoGameCard card={card} />;
      case Category.ACTIVITIES:
        return <ActivityCard card={card} />;
      default:
        return <FilmCard card={card} />;
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'absolute inset-0 touch-none select-none',
        !isDragging && 'transition-transform duration-300 ease-out',
        isTop ? 'z-10 cursor-grab active:cursor-grabbing' : 'z-0 scale-95 opacity-70'
      )}
      style={
        isTop
          ? {
              transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
            }
          : undefined
      }
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseUp={handleEnd}
      onMouseLeave={() => isDragging && handleEnd()}
      onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleEnd}
    >
      {/* Like overlay */}
      {isTop && position.x > 0 && (
        <div
          className="absolute inset-0 z-20 rounded-xl border-4 border-green-500 bg-green-500/10 flex items-center justify-center pointer-events-none"
          style={{ opacity }}
        >
          <span className="text-6xl font-bold text-green-500 rotate-[-20deg]">LIKE</span>
        </div>
      )}

      {/* Dislike overlay */}
      {isTop && position.x < 0 && (
        <div
          className="absolute inset-0 z-20 rounded-xl border-4 border-red-500 bg-red-500/10 flex items-center justify-center pointer-events-none"
          style={{ opacity }}
        >
          <span className="text-6xl font-bold text-red-500 rotate-[20deg]">NOPE</span>
        </div>
      )}

      {/* Superlike overlay */}
      {isTop && position.y < 0 && (
        <div
          className="absolute inset-0 z-20 rounded-xl border-4 border-purple bg-purple/10 flex items-center justify-center pointer-events-none"
          style={{ opacity: superlikeOpacity }}
        >
          <span className="text-5xl font-bold text-purple">SUPER LIKE ⭐</span>
        </div>
      )}

      {renderCategoryCard()}
    </div>
  );
}
