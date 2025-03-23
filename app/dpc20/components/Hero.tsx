'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500/90 to-dark-300/90" />
        <div className="blockchain-nodes-animation" /> {/* We'll add this animation in globals.css */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            DPC20 Token Standard
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white mb-12 leading-relaxed font-semibold tracking-wide"
          >
            Redefining Blockchain Innovation with{' '}
            <span className="text-primary">Next-Generation</span>{' '}
            Token Standards
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#features"
              className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Explore Features
            </a>
            <a
              href="#tokenomics"
              className="border border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
            >
              View Tokenomics
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 