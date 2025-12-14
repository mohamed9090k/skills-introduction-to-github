import Image from 'next/image';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';

export default function HomePage() {
  return (
    <div className="pb-12">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-gold-200/85">
              EAU DE PARFUM · LIMITED STUDIO RUN
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-white sm:text-6xl">
              A nocturnal signature—
              <span className="block text-gold-200">smoky teal & gilded amber</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Nocturne Atelier blends deep navy elegance with soft teal aromatics
              and warm gold accents. This base layout ships with a luxury-ready
              design system and reusable components for building a perfume
              storefront.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#bestsellers" size="lg">
                Shop the drop
              </Button>
              <Button href="#craft" variant="ghost" size="lg">
                Read the story
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[{
                label: 'Sillage',
                value: 'Velvet'
              }, {
                label: 'Wear',
                value: '10+ hours'
              }, {
                label: 'Notes',
                value: 'Amber · Teal'
              }].map((item) => (
                <div
                  key={item.label}
                  className="rounded-luxe border border-white/10 bg-white/5 px-4 py-4"
                >
                  <p className="text-xs tracking-widest text-white/55">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-xl text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-luxe-lg bg-gilded blur-2xl" />
            <Card className="relative overflow-hidden p-8 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs tracking-widest text-white/65">FEATURED</p>
                <p className="text-xs text-gold-200/80">50ml · $168</p>
              </div>

              <div className="mt-7">
                <Image
                  src="/images/bottle-3d.svg"
                  alt="3D bottle render"
                  width={560}
                  height={720}
                  priority
                  className="mx-auto w-full max-w-[320px]"
                />
              </div>

              <div className="mt-8">
                <p className="font-display text-2xl text-white">Nocturne Nº1</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Dark citrus, smoked tea, and ambered woods. Bottled in a
                  hand-polished glass silhouette.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Section
        id="collections"
        kicker="Collections"
        title="Curated drops, seasonal accords"
        description="Design tokens and components are ready for product grids, editorial storytelling, and checkout flows."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[{
            title: 'Deep Navy',
            desc: 'Velvety darkness for evening releases.',
            accent: 'text-ink-200'
          }, {
            title: 'Smoky Teal',
            desc: 'Aromatic freshness with a studio edge.',
            accent: 'text-teal-200'
          }, {
            title: 'Gold',
            desc: 'Gilded highlights for key actions.',
            accent: 'text-gold-200'
          }].map((item) => (
            <Card key={item.title} className="h-full">
              <p className={`font-display text-2xl ${item.accent}`}>{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="bestsellers"
        kicker="Bestsellers"
        title="Signature bottles"
        description="High-resolution SVG assets are included under public/images for hero, model, and 3D bottle scenes."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="flex flex-col justify-between gap-6">
            <div>
              <p className="font-display text-2xl text-white">Atelier Amber</p>
              <p className="mt-2 text-sm text-white/70">
                An ambered resin trail with a gold shimmer.
              </p>
            </div>
            <Image
              src="/images/bottle-amber.svg"
              alt="Amber bottle"
              width={540}
              height={520}
              className="mx-auto w-full max-w-[300px]"
            />
          </Card>
          <Card className="flex flex-col justify-between gap-6">
            <div>
              <p className="font-display text-2xl text-white">Teal Smoke</p>
              <p className="mt-2 text-sm text-white/70">
                Cool aromatics wrapped in nocturnal woods.
              </p>
            </div>
            <Image
              src="/images/bottle-teal.svg"
              alt="Teal bottle"
              width={540}
              height={520}
              className="mx-auto w-full max-w-[300px]"
            />
          </Card>
        </div>
      </Section>

      <Section
        id="craft"
        kicker="Craft"
        title="A modern stack for modern luxury"
        description="Next.js 14 App Router + TypeScript + Tailwind CSS, wired with font pairing, gradient surfaces, rounded radii, and soft shadows."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <p className="font-display text-2xl text-white">Typography</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Headings use Cormorant Garamond and the body copy uses Inter, both
              delivered through next/font.
            </p>
          </Card>
          <Card>
            <p className="font-display text-2xl text-white">Tokens</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Deep navy foundations, smoky teal accents, and gold highlights are
              defined in Tailwind theme extensions.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        id="journal"
        kicker="Journal"
        title="Editorial-ready layouts"
        description="Use Section + Card components for storytelling modules, lookbooks, and product launches."
      >
        <Card className="relative overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-display text-3xl text-white">
                Studio notes: midnight florals
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Pair bold hero imagery with a restrained palette and generous
                spacing. Extend this module into a full editorial experience by
                adding MDX or CMS-backed content.
              </p>
              <div className="mt-6">
                <Button href="#" variant="secondary">
                  Read more
                </Button>
              </div>
            </div>

            <div className="rounded-luxe border border-white/10 bg-white/5 p-6">
              <Image
                src="/images/hero-model.svg"
                alt="Hero model illustration"
                width={720}
                height={520}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
