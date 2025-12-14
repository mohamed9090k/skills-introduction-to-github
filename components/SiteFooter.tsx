export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-white">Nocturne Atelier</p>
          <p className="text-sm text-white/60">
            Luxury perfume eCommerce prototype. Built with Next.js, TypeScript, and
            Tailwind CSS.
          </p>
        </div>
        <p className="mt-6 text-xs text-white/45">
          © {new Date().getFullYear()} Nocturne Atelier. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
