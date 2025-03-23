'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent tracking-tight"
          >
            Redefining Blockchain, Reinventing Possibilities
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-semibold tracking-wide drop-shadow-lg"
          >
            The Dot Protocol – A next-gen blockchain protocol with Proof of Authority, 
            QBFT consensus, and the groundbreaking DPC20 token standard.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/presale"
              className="group bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Join the Revolution</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/ecosystem"
              className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg transition-colors w-full sm:w-auto backdrop-blur-sm"
            >
              Explore Ecosystem
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
