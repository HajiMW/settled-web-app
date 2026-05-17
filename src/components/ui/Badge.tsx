'use client';

import React from 'react';
import { cn } from '@/lib/utils/helpers';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'coral' | 'purple' | 'pink' | 'success' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Small label badges for categories, status, and pricing tiers.
 */
export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  const variantStyles = {
    default: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    coral: 'bg-coral/10 text-coral',
    purple: 'bg-purple/10 text-purple',
    pink: 'bg-pink/10 text-pink',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
