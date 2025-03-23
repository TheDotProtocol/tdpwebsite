'use client';
import { motion } from 'framer-motion';

const innovations = [
  {
    title: "AI-Driven Governance",
    description: "Leveraging artificial intelligence for decentralized governance, ensuring transparency, fairness, and resilience in decision-making processes.",
    icon: "🤖"
  },
  {
    title: "Quantum-Resistant Security",
    description: "Preparing for the future with quantum-resistant encryption to safeguard data and transactions in an era of quantum computing.",
    icon: "🔒"
  },
  {
    title: "Cross-Industry Disruption",
    description: "From DeFi to emergency travel funds, our real-world use cases extend beyond typical blockchain boundaries.",
    icon: "🌐"
  },
  {
    title: "Seamless Interoperability",
    description: "Designed for seamless integration with other blockchains, protocols, and decentralized applications (dApps).",
    icon: "🔄"
  }
];

export default function Innovations() {
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
            The Future of Blockchain
          </h2>
          <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Key innovations driving the next generation of blockchain technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8 hover:bg-dark-200/70 transition-all group"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {innovation.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {innovation.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {innovation.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 