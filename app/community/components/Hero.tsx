'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500/90 to-dark-300/90" />
        <div className="grid-animation" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Welcome to the Dot Protocol Community
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto space-y-8"
          >
            <p className="text-white font-semibold leading-relaxed">
              Building the Future, Together
              <span className="block mt-4 text-gray-300">
                Join our global community of innovators, creators, and disruptors shaping 
                the next era of blockchain technology. Whether you&apos;re a developer, trader, 
                validator, or simply curious, there&apos;s a place for you in the Dot Protocol ecosystem.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#why-join"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary hover:bg-primary-600 text-white transition-all duration-300 hover:scale-105"
            >
              Join the Community
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
            <a
              href="#validator"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Become a Validator
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 