import type React from 'react';
import { cn } from '@/lib/cn';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  kicker?: string;
  title: string;
  description?: string;
};

export function Section({
  kicker,
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-16 sm:py-20', className)} {...props}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <header className="max-w-2xl">
          {kicker ? (
            <p className="text-xs font-semibold tracking-[0.32em] text-gold-200/85">
              {kicker}
            </p>
          ) : null}
          <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {description}
            </p>
          ) : null}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
