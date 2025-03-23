'use client';
import { motion } from 'framer-motion';

const tokenomics = [
  { name: "Founders & Team", percentage: 10, tokens: "100 billion", color: "bg-[#FF6B6B]" },
  { name: "Ecosystem Development", percentage: 25, tokens: "250 billion", color: "bg-[#4ECDC4]" },
  { name: "Community & Incentives", percentage: 20, tokens: "200 billion", color: "bg-[#45B7D1]" },
  { name: "Partnerships & Marketing", percentage: 15, tokens: "150 billion", color: "bg-[#96CEB4]" },
  { name: "Liquidity & Exchanges", percentage: 15, tokens: "150 billion", color: "bg-[#FFEEAD]" },
  { name: "Reserve & Emergency Fund", percentage: 10, tokens: "100 billion", color: "bg-[#D4A5A5]" },
  { name: "Advisors & Legal", percentage: 5, tokens: "50 billion", color: "bg-[#9A8C98]" }
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Total Supply:{' '}
            <span className="text-primary">1 Trillion DPC20 Tokens</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Pie Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {tokenomics.map((item, index) => {
                const rotation = index * (360 / tokenomics.length);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ rotate: rotation - 90, scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`absolute w-full h-full origin-center ${item.color}`}
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      clipPath: `polygon(50% 50%, 50% 0, ${50 + 50 * Math.cos((2 * Math.PI * (index + 1)) / tokenomics.length)}% ${50 + 50 * Math.sin((2 * Math.PI * (index + 1)) / tokenomics.length)}%)`
                    }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Allocation Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {tokenomics.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-lg hover:bg-dark-200/70 transition-all"
              >
                <div className={`w-4 h-4 rounded-full ${item.color} mr-4`} />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <p className="text-gray-400">{item.tokens}</p>
                </div>
                <div className="text-primary font-bold">{item.percentage}%</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 