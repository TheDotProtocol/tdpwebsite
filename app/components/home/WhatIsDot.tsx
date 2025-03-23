'use client';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Proof of Authority + QBFT Consensus",
    description: "High performance & security through advanced consensus mechanisms",
    icon: "🛡️"
  },
  {
    title: "DPC20 Token Standard",
    description: "Greater flexibility and efficiency for token creators",
    icon: "⚡"
  },
  {
    title: "Scalable Architecture",
    description: "Built for seamless Web3 experiences and future growth",
    icon: "🔄"
  }
];

export default function WhatIsDot() {
  return (
    <section className="relative py-20">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-dark-100/90 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            What is Dot Protocol?
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-br from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide"
          >
            Welcome to a decentralized ecosystem
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-200 leading-relaxed font-medium tracking-wide"
          >
            powered by <span className="text-primary">speed</span>, 
            <span className="text-primary-300"> efficiency</span>, and 
            <span className="text-primary-400"> community-focused</span> technology.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-dark-200/50 backdrop-blur-sm border border-dark-50 hover:border-primary/20 transition-all group hover:bg-dark-200/70"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
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