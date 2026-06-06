'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PRESALE_CONFIG } from '../config';

export default function TokenInfo() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent text-center">
            About DPC20
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
            DPC20 is the native token standard of The Dot Protocol — built on Proof of Authority
            with QBFT consensus. Total supply is {PRESALE_CONFIG.totalSupply} tokens, powering
            ecosystem development, community incentives, DeFi, and cross-industry applications.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Standard', value: 'DPC20' },
              { label: 'Consensus', value: 'PoA + QBFT' },
              { label: 'Total Supply', value: PRESALE_CONFIG.totalSupply },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center bg-dark-300/30 border border-dark-50 rounded-lg p-4"
              >
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-white font-bold">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/dpc20#tokenomics"
              className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-colors"
            >
              View Full Tokenomics
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
