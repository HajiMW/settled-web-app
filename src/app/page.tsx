'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';
import { DarkModeToggle } from '@/components/layout/DarkModeToggle';
import { SUBSCRIPTION_TIERS } from '@/types';
import { formatPrice } from '@/lib/utils/helpers';

const features = [
  {
    icon: '👥',
    title: 'Group Decisions',
    description: 'No more endless debates. Everyone swipes, and the app finds what you all agree on.',
  },
  {
    icon: '🎯',
    title: 'Multiple Categories',
    description: 'Films, TV shows, takeaways, restaurants, board games, video games, and activities.',
  },
  {
    icon: '✨',
    title: 'Smart Matches',
    description: 'Our algorithm finds the perfect match based on everyone\'s preferences.',
  },
  {
    icon: '🔗',
    title: 'Share Results',
    description: 'Deep links to order food, stream films, or book activities directly from the match.',
  },
];

const steps = [
  { number: '1', title: 'Create Room', description: 'Pick a category and invite your group with a simple code.' },
  { number: '2', title: 'Swipe', description: 'Everyone swipes right on what they like, left on what they don\'t.' },
  { number: '3', title: 'Match!', description: 'When everyone agrees, you\'ve got your answer. Settled!' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0f0f23]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-2xl font-bold font-display bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent">
            Settled
          </span>
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-display mb-6">
            <span className="bg-gradient-to-r from-deep-navy via-purple to-coral bg-clip-text text-transparent dark:from-soft-cream dark:via-purple dark:to-coral">
              Settled
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop debating. Start swiping.
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto">
            The group decision-making app that turns &quot;I don&apos;t mind, you choose&quot; into a fun, fair answer everyone agrees on.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button variant="primary" size="lg">Get Started Free</Button>
            </Link>
            <a href="#features">
              <Button variant="outline" size="lg">Learn More</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-soft-cream/50 dark:bg-deep-navy/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-display">
            Why <span className="text-coral">Settled</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-deep-navy/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-display">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral to-purple text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-soft-cream/50 dark:bg-deep-navy/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-display">
            Simple Pricing
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Start free, upgrade when you need more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUBSCRIPTION_TIERS.map((tier) => (
              <div
                key={tier.tier}
                className={`bg-white dark:bg-deep-navy/80 rounded-xl p-6 shadow-md border-2 transition-shadow hover:shadow-lg ${
                  tier.tier === 'premium'
                    ? 'border-coral relative'
                    : 'border-gray-100 dark:border-gray-800'
                }`}
              >
                {tier.tier === 'premium' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold capitalize mb-2">{tier.tier}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    {tier.price === 0 ? 'Free' : formatPrice(tier.price)}
                  </span>
                  {tier.price > 0 && (
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup">
                  <Button
                    variant={tier.tier === 'premium' ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {tier.price === 0 ? 'Get Started' : 'Subscribe'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
