import Link from 'next/link';
import { Button } from '@/components/Button';

const links = [
  { href: '#collections', label: 'Collections' },
  { href: '#bestsellers', label: 'Bestsellers' },
  { href: '#craft', label: 'Craft' },
  { href: '#journal', label: 'Journal' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/65 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-white"
          aria-label="Nocturne Atelier"
        >
          Nocturne Atelier
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="#bestsellers"
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Explore
          </Button>
          <Button href="#" variant="primary" size="sm">
            Add to bag
          </Button>
        </div>
      </div>
    </header>
  );
}
