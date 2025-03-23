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
            A Visionary Blockchain Future
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto space-y-8"
          >
            <p className="text-white font-semibold leading-relaxed">
              The Dot Protocol Ecosystem isn&apos;t just a blockchain platform; it&apos;s a dynamic, 
              futuristic, and interconnected web of innovation that redefines how industries 
              interact with decentralized technology.
              <span className="block mt-2 text-primary-200">
                Powering the next generation of decentralized solutions.
              </span>
            </p>
            <p className="text-white font-semibold leading-relaxed">
              With cutting-edge features, seamless cross-industry applications, and AI-driven 
              capabilities, the Dot Protocol Ecosystem represents the future of blockchain — 
              a future where technology adapts, evolves, and transforms industries in real time.
              <span className="block mt-2 text-primary-200">
                Building tomorrow&apos;s blockchain, today.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 