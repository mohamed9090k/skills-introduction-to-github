import type React from 'react';
import { cn } from '@/lib/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'surface' | 'glass';
};

export function Card({ className, variant = 'glass', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-luxe border border-white/10 p-6 shadow-soft',
        variant === 'glass'
          ? 'bg-white/6 backdrop-blur'
          : 'bg-surface-0/95 text-ink-900',
        className
      )}
      {...props}
    />
  );
}
