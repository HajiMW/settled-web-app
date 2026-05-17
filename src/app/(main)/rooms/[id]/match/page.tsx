'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { filmsData } from '@/data/films';

/**
 * Match result page with celebration animation, matched card, and action buttons.
 */
export default function MatchResultPage() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

  // Mock matched card
  const matchedCard = filmsData[0];
  const participants = ['Alex', 'Sam', 'Jordan'];

  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: ['#ff6b6b', '#7c3aed', '#ec4899', '#fbbf24', '#34d399'][Math.floor(Math.random() * 5)],
    }));
    setConfetti(particles);
  }, []);

  return (
    <div className="max-w-md mx-auto text-center space-y-6 relative">
      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -top-20">
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full animate-bounce"
            style={{
              left: `${particle.left}%`,
              top: '0',
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: '2.5s',
            }}
          />
        ))}
      </div>

      {/* Celebration */}
      <div className="pt-8">
        <span className="text-6xl block mb-4">🎉</span>
        <h1 className="text-3xl font-bold font-display bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent">
          It&apos;s a Match!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Everyone agreed on...
        </p>
      </div>

      {/* Matched Card */}
      <Card className="p-6 text-left">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🎬</span>
          <Badge variant="purple">Film</Badge>
        </div>
        <h2 className="text-2xl font-bold mb-2">{matchedCard.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {matchedCard.description}
        </p>
        <div className="flex items-center gap-1 mb-2">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-medium">{matchedCard.rating}/10</span>
        </div>
      </Card>

      {/* Participants */}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Matched with</p>
        <div className="flex items-center justify-center gap-3">
          {participants.map((name) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <Avatar name={name} size="md" />
              <span className="text-xs">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        {matchedCard.deepLinks?.streaming && (
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Watch on</p>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(matchedCard.deepLinks.streaming).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors capitalize"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        )}

        <Button variant="primary" className="w-full">
          ❤️ Save to Favourites
        </Button>
        <Button variant="outline" className="w-full" onClick={() => {
          if (typeof window !== 'undefined' && navigator.share) {
            navigator.share({ title: `We matched on ${matchedCard.title}!`, text: `Our group chose ${matchedCard.title} on Settled!` });
          }
        }}>
          📤 Share Result
        </Button>
        <Link href="/rooms/create" className="block">
          <Button variant="secondary" className="w-full">
            🔄 Start Another Round
          </Button>
        </Link>
      </div>
    </div>
  );
}
