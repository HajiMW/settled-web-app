'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import type { Card as CardType } from '@/types';

interface MatchOverlayProps {
  card: CardType;
  onClose: () => void;
  onSaveToFavourites: () => void;
  onStartNewRound: () => void;
}

/**
 * Celebration overlay when a match is found with confetti-style animation.
 */
export function MatchOverlay({ card, onClose, onSaveToFavourites, onStartNewRound }: MatchOverlayProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: ['#ff6b6b', '#7c3aed', '#ec4899', '#fbbf24', '#34d399'][Math.floor(Math.random() * 5)],
    }));
    setConfetti(particles);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full animate-bounce"
            style={{
              left: `${particle.left}%`,
              top: '-10px',
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      <div className="relative bg-white dark:bg-deep-navy rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full text-center animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <span className="text-6xl">🎉</span>
        </div>

        <h2 className="text-2xl font-bold bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent mb-2">
          It&apos;s a Match!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Everyone agreed on...
        </p>

        <div className="bg-soft-cream dark:bg-deep-navy/50 rounded-xl p-4 mb-6">
          <h3 className="text-xl font-bold text-deep-navy dark:text-soft-cream">{card.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{card.description}</p>
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="primary" onClick={onSaveToFavourites}>
            ❤️ Save to Favourites
          </Button>
          <Button variant="secondary" onClick={onStartNewRound}>
            🔄 Start Another Round
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
