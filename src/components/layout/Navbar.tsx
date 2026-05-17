'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { Avatar } from '@/components/ui/Avatar';
import { DarkModeToggle } from './DarkModeToggle';

/**
 * Top navigation with Settled wordmark, nav links, user avatar dropdown,
 * dark mode toggle. Responsive with mobile hamburger menu.
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/history', label: 'History' },
    { href: '/favourites', label: 'Favourites' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-deep-navy/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-display bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent">
              Settled
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-deep-navy/70 dark:text-soft-cream/70 hover:text-coral dark:hover:text-coral transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <DarkModeToggle />

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center"
              >
                <Avatar name="Alex Johnson" size="sm" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-deep-navy rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 py-2 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-deep-navy dark:text-soft-cream hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-deep-navy dark:text-soft-cream hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Settings
                  </Link>
                  <hr className="my-1 border-gray-100 dark:border-gray-800" />
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-deep-navy/70 dark:text-soft-cream/70 hover:text-coral"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
