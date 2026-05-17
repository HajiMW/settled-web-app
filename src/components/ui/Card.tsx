'use client';

import React from 'react';
import { cn } from '@/lib/utils/helpers';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

/**
 * Base card wrapper with hover effects, rounded corners, and shadow.
 */
export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white dark:bg-deep-navy/80 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden',
        hover && 'transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
