'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Consensus Mechanism: PoA with QBFT",
    description: "Proof of Authority (PoA) reduces reliance on computational resources, while QBFT enhances security and throughput.",
    icon: "⚡",
    iconClass: "text-yellow-400"
  },
  {
    title: "Transaction Efficiency",
    description: "Fast transaction finality, lower transaction fees, and energy efficiency for high-frequency transactions in sectors like travel, retail, and remittances.",
    icon: "💰",
    iconClass: "text-green-400"
  },
  {
    title: "DPC20 Token Standard",
    description: "Next-gen token standard enhancing ERC20 with features like dynamic supply, hybrid collateral, and flash loans.",
    icon: "🔄",
    iconClass: "text-blue-400"
  }
];

export default function Features() {
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
            What Makes Dot Protocol Different?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="feature-card bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8"
            >
              <div className={`text-5xl mb-6 ${feature.iconClass}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 