'use client';
import { motion } from 'framer-motion';

const techFeatures = [
  {
    title: "Consensus Mechanism: PoA with QBFT",
    description: [
      "Proof of Authority (PoA) reduces computational load by using a network of pre-approved validators.",
      "QBFT (Quorum Byzantine Fault Tolerance) enhances security and boosts transaction throughput.",
      "Ensures a resilient and energy-efficient ecosystem."
    ],
    icon: "🔒"
  },
  {
    title: "Transaction Efficiency",
    description: [
      "Faster Finality: Transactions are processed and finalized swiftly.",
      "Low Transaction Costs: Ideal for high-frequency sectors like travel bookings.",
      "Energy Efficiency: Minimal energy consumption compared to PoW chains."
    ],
    icon: "⚡"
  }
];

export default function Technology() {
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
            Dot Protocol's Technology
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Advanced blockchain infrastructure{' '}
            <span className="text-primary">designed for the future</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8 hover:bg-dark-200/70 transition-all"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.description.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-primary mr-2">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-12 p-8 bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-4xl font-bold text-primary mb-2">100x</h4>
              <p className="text-gray-300">Faster Transaction Speed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary mb-2">99%</h4>
              <p className="text-gray-300">More Energy Efficient</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary mb-2">0.001$</h4>
              <p className="text-gray-300">Average Transaction Cost</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 