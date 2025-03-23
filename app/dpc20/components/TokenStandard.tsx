'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Dynamic Supply Adjustment",
    description: "Auto-adjusts token supply to maintain stable value through advanced rebase mechanisms.",
    icon: "📊"
  },
  {
    title: "Hybrid Stability Mechanism",
    description: "Combines algorithmic supply adjustments with multi-asset collateral models for enhanced stability.",
    icon: "🔄"
  },
  {
    title: "Flash Loans",
    description: "Native support for uncollateralized loans, enabling arbitrage and DeFi opportunities.",
    icon: "⚡"
  },
  {
    title: "Collateral Management",
    description: "Built-in features for managing multi-asset reserves to strengthen token stability.",
    icon: "🏦"
  },
  {
    title: "Price Oracle Integration",
    description: "Real-time price feeds from multiple sources for accurate value assessment.",
    icon: "🔮"
  },
  {
    title: "Pausable Transfers",
    description: "Enhanced security through the ability to pause transfers during emergencies.",
    icon: "🛑"
  }
];

export default function TokenStandard() {
  return (
    <section id="features" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            DPC20 Token Standard Features
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Next-generation token standard{' '}
            <span className="text-primary">enhancing</span> the traditional{' '}
            <span className="text-primary">ERC20 model</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 