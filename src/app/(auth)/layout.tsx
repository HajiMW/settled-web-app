import React from 'react';
import Link from 'next/link';

/**
 * Auth layout with centered card and Settled wordmark above.
 * Cream/navy background split design.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-soft-cream to-white dark:from-[#0f0f23] dark:to-deep-navy px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <span className="text-3xl font-bold font-display bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent">
              Settled
            </span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Stop debating. Start swiping.
          </p>
        </div>
        <div className="bg-white dark:bg-deep-navy/80 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
