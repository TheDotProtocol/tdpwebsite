'use client';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Layer 1 Blockchain with Next-Gen Consensus",
    description: "Our proprietary Layer 1 blockchain, built on Proof of Authority (PoA) and QBFT consensus, ensures lightning-fast transaction speeds, minimal energy consumption, and enhanced security.",
    icon: "🔗",
    features: ["Lightning-fast speeds", "Energy efficient", "Enhanced security"]
  },
  {
    title: "DPC20 Token Standard",
    description: "The DPC20 standard integrates dynamic supply adjustments, hybrid stability mechanisms, flash loans, and multi-asset collateral management.",
    icon: "🔄",
    features: ["Dynamic supply", "Hybrid stability", "Flash loans"]
  },
  {
    title: "AI-Driven Wallet: 3DOT Wallet",
    description: "A futuristic wallet that integrates AI-powered trading bots, biometric security, time-locked savings, and flash loan access.",
    icon: "🤖",
    features: ["AI trading bots", "Biometric security", "Portfolio insights"]
  },
  {
    title: "Decentralized Exchange (DEX)",
    description: "Our native Dexchange offers unparalleled liquidity with a dual AMM and order-book model, supporting native flash loans and instant swaps.",
    icon: "💱",
    features: ["Dual AMM model", "Flash loans", "AI trading"]
  },
  {
    title: "NFT Marketplace & Metaverse",
    description: "Next-gen NFT marketplace and metaverse platform allowing users to create, trade, and showcase digital assets.",
    icon: "🎮",
    features: ["Digital assets", "Metaverse integration", "NFT trading"]
  },
  {
    title: "Payment Solutions",
    description: "Bridging crypto and traditional finance with crypto debit/credit cards and merchant payment solutions.",
    icon: "💳",
    features: ["Crypto cards", "Merchant tools", "Seamless payments"]
  }
];

export default function KeyPillars() {
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
            Key Pillars of the Ecosystem
          </h2>
          <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Building blocks of our revolutionary blockchain platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8 hover:bg-dark-200/70 transition-all group"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="text-primary mr-2">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 