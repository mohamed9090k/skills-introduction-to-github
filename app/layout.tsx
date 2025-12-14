import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import type React from 'react';
import './globals.css';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Nocturne Atelier — Luxury Perfume',
  description: 'A luxe perfume eCommerce storefront built with Next.js 14.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="min-h-dvh bg-ink-950 font-body text-white antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-radial" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
