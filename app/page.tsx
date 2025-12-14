'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const shouldReduceMotion = useReducedMotion()
  
  // Parallax transforms - always call hooks, conditionally use them
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '70%'])
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.8,
        ease: "easeOut"
      }
    }
  }
  
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  }

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Golden hour background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      
      {/* Floating particles/background elements */}
      <motion.div 
        className="absolute inset-0"
        style={shouldReduceMotion ? {} : { y: y1 }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full gold-gradient opacity-20 blur-xl`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: shouldReduceMotion ? 'none' : `float ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </motion.div>

      {/* Main content container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left content - Hero copy and CTAs */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Main headline */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-white drop-shadow-2xl">
                    Luxury
                  </span>
                  <span className="block gold-gradient bg-clip-text text-transparent">
                    Fragrance
                  </span>
                  <span className="block text-white drop-shadow-2xl">
                    Collection
                  </span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p 
                variants={fadeInUp}
                className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed"
              >
                Discover our exclusive collection of premium fragrances. 
                Each scent tells a story of elegance, sophistication, and timeless beauty.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="glass-card px-8 py-4 text-white font-semibold text-lg gold-gradient hover:shadow-2xl transition-all duration-300"
                >
                  Shop Collection
                </motion.button>
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="glass-card px-8 py-4 text-white font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  Watch Film
                </motion.button>
              </motion.div>

              {/* Stats and perks */}
              <motion.div 
                variants={fadeInUp}
                className="space-y-6"
              >
                {/* 15M+ customers stat */}
                <div className="glass-card p-6 gold-glow">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold gold-gradient bg-clip-text text-transparent">
                      15M+
                    </div>
                    <div className="text-white/80 text-lg mt-2">
                      Satisfied Customers Worldwide
                    </div>
                  </div>
                </div>

                {/* Perks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div 
                    className="glass-card p-4 flex items-center space-x-3"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  >
                    <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Express Shipping</div>
                      <div className="text-white/70 text-sm">Free next-day delivery</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="glass-card p-4 flex items-center space-x-3"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  >
                    <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Personal Concierge</div>
                      <div className="text-white/70 text-sm">24/7 luxury service</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right content - Hero imagery */}
            <motion.div 
              className="relative h-96 lg:h-[600px]"
              style={shouldReduceMotion ? {} : { y: y2 }}
            >
              {/* Main model silhouette with perfume bottle */}
              <motion.div
                className="absolute inset-0 glass-card rounded-3xl overflow-hidden"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              >
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  {/* Placeholder for model silhouette */}
                  <div className="relative w-64 h-80 lg:w-80 lg:h-96">
                    {/* Model body silhouette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-t-full" />
                    
                    {/* Perfume bottle */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      animate={shouldReduceMotion ? {} : {
                        y: [0, -10, 0],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-16 h-24 lg:w-20 lg:h-30 gold-gradient rounded-lg shadow-2xl relative">
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white/30 rounded-full" />
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-white/20 rounded-t-lg" />
                      </div>
                    </motion.div>

                    {/* Flowing fabric effect */}
                    <motion.div
                      className="absolute -right-8 top-0 w-32 h-full opacity-30"
                      style={shouldReduceMotion ? {} : { y: y3 }}
                    >
                      <div className="w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full blur-sm" 
                           style={{ 
                             clipPath: 'polygon(0 0, 100% 10%, 80% 50%, 100% 90%, 0 100%)',
                             animation: shouldReduceMotion ? 'none' : 'float 8s ease-in-out infinite'
                           }} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating golden orbs */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 lg:w-8 lg:h-8 gold-gradient rounded-full blur-sm"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${20 + i * 20}%`,
                    animation: shouldReduceMotion ? 'none' : `glow ${2 + i}s ease-in-out infinite alternate`
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={shouldReduceMotion ? {} : {
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 gold-gradient rounded-full mt-2"
            animate={shouldReduceMotion ? {} : {
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
