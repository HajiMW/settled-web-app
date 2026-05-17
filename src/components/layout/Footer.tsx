import React from 'react';
import Link from 'next/link';

/**
 * Simple footer with links and branding.
 */
export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-deep-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-coral transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-coral transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-coral transition-colors"
            >
              About
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made with ❤️ in the UK
          </p>
        </div>
      </div>
    </footer>
  );
}
