'use client';

import React from 'react';
import { cn } from '@/lib/utils/helpers';

export interface AvatarProps {
  src?: string | null;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * User avatar with fallback initials and size variants.
 */
export function Avatar({ src, name, size = 'md', className }: AvatarProps) {
  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={cn(
          'rounded-full object-cover ring-2 ring-white dark:ring-deep-navy',
          sizeStyles[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-semibold bg-gradient-to-br from-coral to-purple text-white ring-2 ring-white dark:ring-deep-navy',
        sizeStyles[size],
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}
