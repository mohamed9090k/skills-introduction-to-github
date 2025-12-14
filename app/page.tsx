import ReviewsCarousel from '@/components/ReviewsCarousel';
import NewsletterSignup from '@/components/NewsletterSignup';
import LuxuryFooter from '@/components/LuxuryFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Luxury Scents
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Discover your signature fragrance from our exclusive collection of premium perfumes
          </p>
        </div>
      </section>

      <ReviewsCarousel />
      
      <NewsletterSignup />
      
      <LuxuryFooter />
    </main>
  );
}
