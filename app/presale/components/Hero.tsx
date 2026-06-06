'use client';
import { motion } from 'framer-motion';
import { PRESALE_CONFIG } from '../config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <span className="px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-sm font-semibold tracking-wide uppercase">
              Live Now
            </span>
            <span className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-semibold tracking-wide uppercase">
              Private Whitelist
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent tracking-tight"
          >
            DPC20 Token Presale
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl text-white mb-6 leading-relaxed font-semibold tracking-wide drop-shadow-lg"
          >
            Secure your allocation in The Dot Protocol&apos;s native token at{' '}
            <span className="text-primary">${PRESALE_CONFIG.tokenPriceUsd.toFixed(2)}</span> per{' '}
            {PRESALE_CONFIG.tokenSymbol}
          </motion.p>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-10 px-5 py-2 rounded-full border border-primary/30 bg-dark-200/40 backdrop-blur-sm text-sm md:text-base text-primary-200 tracking-wide"
          >
            Whitelist access required — connect MetaMask to participate
          </motion.p>

          <motion.a
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            href="#purchase"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
          >
            <span>Buy DPC20 Now</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
