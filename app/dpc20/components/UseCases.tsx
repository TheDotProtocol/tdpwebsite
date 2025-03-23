'use client';
import { motion } from 'framer-motion';

const useCases = [
  {
    title: "Travel Insurance & Emergency Funds",
    description: "Smart contracts automatically trigger instant payouts for travel insurance claims and emergency situations.",
    icon: "✈️",
    details: ["Instant claim processing", "Automated payouts", "Real-time verification"]
  },
  {
    title: "Cross-Border Payments",
    description: "Optimized routes for international transactions and remittances with minimal fees.",
    icon: "🌍",
    details: ["Low-cost transfers", "Instant settlements", "Multi-currency support"]
  },
  {
    title: "Flash Loan Arbitrage",
    description: "DeFi traders can leverage flash loans for arbitrage opportunities and liquidity management.",
    icon: "💱",
    details: ["Zero collateral", "Same-block execution", "Risk-free arbitrage"]
  },
  {
    title: "Liquidity Management",
    description: "Advanced tools for managing liquidity pools and automated market making.",
    icon: "💧",
    details: ["Dynamic pool balancing", "Yield optimization", "Risk management"]
  }
];

export default function UseCases() {
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
            Use Cases
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Real-world applications powered by{' '}
            <span className="text-primary">Dot Protocol</span> and{' '}
            <span className="text-primary">DPC20</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8 hover:bg-dark-200/70 transition-all group"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="text-primary mr-2">→</span>
                    {detail}
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