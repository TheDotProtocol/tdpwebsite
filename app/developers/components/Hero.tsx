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
            Welcome to the Dot Protocol Developer Hub
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto space-y-8"
          >
            <p className="text-white font-semibold leading-relaxed">
              Explore the tools, APIs, SDKs, and resources to build cutting-edge dApps, 
              smart contracts, and DeFi projects on the Dot Protocol Blockchain.
              <span className="block mt-2 text-primary-200">
                Whether you're a blockchain novice or a seasoned developer, our documentation 
                will guide you every step of the way.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <a
              href="#getting-started"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary hover:bg-primary-600 text-white transition-all duration-300 hover:scale-105"
            >
              Start Building Now
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 