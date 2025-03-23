'use client';
import { motion } from 'framer-motion';

const roadmapData = {
  2024: [
    "Launch mainnet",
    "AI-driven governance systems",
    "Native 3DOT Wallet for iOS & Android",
    "Launch NFT Marketplace"
  ],
  2025: [
    "DeFi partnerships",
    "Launch Hexchange (Hybrid Exchange)",
    "Debit/Credit Card Solutions",
    "Merchant Payment Integration"
  ],
  2026: [
    "Quantum-resistant security integration",
    "Global expansion",
    "Advanced cross-chain solutions",
    "Industry-specific blockchain solutions"
  ]
};

export default function Roadmap() {
  return (
    <section className="relative py-20 bg-dark-300/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Roadmap
          </h2>
          <p className="text-xl text-gray-200">
            Our journey to revolutionize blockchain technology
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {Object.entries(roadmapData).map(([year, milestones], index) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              <div className="flex items-start gap-8">
                <div className="w-32 flex-shrink-0">
                  <div className="text-3xl font-bold text-primary">{year}</div>
                </div>
                <div className="flex-1 bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {milestones.map((milestone, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-gray-200">{milestone}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 