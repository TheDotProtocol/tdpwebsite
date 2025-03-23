'use client';
import { motion } from 'framer-motion';

export default function AboutHero() {
  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500/90 to-dark-300/90" />
        <div className="grid-animation" /> {/* We'll add this animation in globals.css */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Powerful Blockchain Infrastructure
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white mb-12 leading-relaxed font-bold tracking-wide drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-primary-200 to-primary-400 bg-clip-text text-transparent">
              Dot Protocol
            </span>{' '}
            leverages{' '}
            <span className="text-primary-300">
              Proof of Authority (PoA)
            </span>{' '}
            with{' '}
            <span className="text-primary-400">
              QBFT consensus
            </span>{' '}
            to deliver unparalleled scalability and energy efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <a
              href="#features"
              onClick={scrollToFeatures}
              className="inline-flex flex-col items-center gap-2 group"
            >
              <span className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300">
                Learn More About The Dot Protocol
              </span>
              <motion.svg
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-6 h-6 text-primary mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 