'use client';
import { motion } from 'framer-motion';

const ecosystemItems = [
  {
    title: "Dot Protocol",
    description: "Quantum-resistant security and adaptive PoA with QBFT for scalability, security, and decentralization.",
    icon: "🔐"
  },
  {
    title: "Global Dot Bank",
    description: "Decentralized banking for global transactions. Real-time cross-border payments, tokenized assets, and multi-currency support.",
    icon: "🏦"
  },
  {
    title: "Kibouor (The Dot Protocol Foundation)",
    description: "An initiative that brings hope and happiness.",
    icon: "🌟"
  },
  {
    title: "3 Block Collective",
    description: "The Governance Board of The Dot Protocol Company and its brands and subsidiaries.",
    icon: "⚖️"
  },
  {
    title: "Hexchange (Hybrid Exchange)",
    description: "A hybrid exchange combining centralized liquidity with decentralized security.",
    icon: "💱"
  },
  {
    title: "3DOT Bugger (Native AI Assistant)",
    description: "Your personal AI assistant for crypto trading and portfolio optimization.",
    icon: "🤖"
  },
  {
    title: "Native Wallet",
    description: "Feature-rich wallet with decentralized identity and AI-powered asset management.",
    icon: "👛"
  },
  {
    title: "Crypto Debit Cards",
    description: "Programmable money with instant cashback and real-time fiat conversion.",
    icon: "💳"
  },
  {
    title: "Merchant POS Machine",
    description: "AI-powered sales analytics and offline crypto payments with immediate settlement.",
    icon: "🏪"
  },
  {
    title: "NFT Marketplace",
    description: "Programmable NFTs with multi-chain interoperability and immersive AR/VR experiences.",
    icon: "🎨"
  }
];

export default function Ecosystem() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            The Dot Protocol Ecosystem
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-semibold tracking-wide">
            A comprehensive suite of blockchain solutions powering the future of finance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card group bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 