import Link from 'next/link';
import type React from 'react';
import { cn } from '@/lib/cn';

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50';

const variants: Record<NonNullable<CommonProps['variant']>, string> = {
  primary:
    'bg-gold-500 text-ink-950 shadow-soft hover:bg-gold-400 active:bg-gold-500/90',
  secondary:
    'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 active:bg-white/10',
  ghost: 'text-white/85 hover:text-white hover:bg-white/10'
};

const sizes: Record<NonNullable<CommonProps['size']>, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base'
};

type ButtonProps = CommonProps &
  (
    | ({
        href: React.ComponentProps<typeof Link>['href'];
      } & Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>)
    | ({
        href?: undefined;
      } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
