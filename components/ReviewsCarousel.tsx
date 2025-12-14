'use client';

import { useState, useEffect, useRef } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  scentPurchased: string;
  testimonial: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    rating: 5,
    scentPurchased: 'Amber Noir',
    testimonial: 'Absolutely divine! The fragrance lasts all day and receives countless compliments. A true luxury experience.',
    image: '/images/profile-readme-example.png'
  },
  {
    id: 2,
    name: 'James Anderson',
    rating: 5,
    scentPurchased: 'Velvet Rose',
    testimonial: 'Exceptional quality and presentation. The scent is sophisticated and unique. Best purchase I have made this year.',
    image: '/images/profile-readme-example.png'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    rating: 4,
    scentPurchased: 'Ocean Mist',
    testimonial: 'Fresh and elegant. Perfect for daily wear. The bottle design is stunning and looks beautiful on my dresser.',
    image: '/images/profile-readme-example.png'
  },
  {
    id: 4,
    name: 'Michael Chen',
    rating: 5,
    scentPurchased: 'Midnight Oud',
    testimonial: 'Rich and complex fragrance. The longevity is impressive. Worth every penny for this premium quality.',
    image: '/images/profile-readme-example.png'
  }
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section 
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
      aria-label="Customer Reviews"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-lg">
            Discover why thousands trust us for their signature scent
          </p>
        </div>

        <div 
          ref={carouselRef}
          className="relative"
          role="region"
          aria-label="Reviews carousel"
          aria-live="polite"
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                  aria-label={`Review ${review.id} of ${reviews.length}`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <img 
                          src={review.image}
                          alt={`${review.name}'s portrait`}
                          className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-slate-100"
                        />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-3" aria-label={`${review.rating} out of 5 stars`}>
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-6 h-6 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        <blockquote className="text-slate-700 text-lg mb-4 leading-relaxed">
                          &ldquo;{review.testimonial}&rdquo;
                        </blockquote>
                        
                        <div>
                          <p className="font-semibold text-slate-900 text-xl">
                            {review.name}
                          </p>
                          <p className="text-slate-500 mt-1">
                            Purchased: <span className="font-medium text-slate-700">{review.scentPurchased}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            onKeyDown={(e) => handleKeyDown(e, goToPrevious)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 md:p-4 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            onKeyDown={(e) => handleKeyDown(e, goToNext)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 md:p-4 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Review indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onKeyDown={(e) => handleKeyDown(e, () => goToSlide(index))}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${
                  index === currentIndex
                    ? 'bg-slate-800 w-8'
                    : 'bg-slate-400 hover:bg-slate-600'
                }`}
                aria-label={`Go to review ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
