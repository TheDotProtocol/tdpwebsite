'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Connect MetaMask',
    description: 'Link your wallet to verify eligibility and prepare for purchase.',
  },
  {
    step: '02',
    title: 'Enter Whitelist Code',
    description: 'This is a private presale — only approved whitelist addresses can participate.',
  },
  {
    step: '03',
    title: 'Choose Payment',
    description: 'Pay with ETH, USDT, or BNB at the fixed presale price of $0.50 per DPC20.',
  },
  {
    step: '04',
    title: 'Receive DPC20',
    description: 'Tokens are allocated to your wallet once the transaction is confirmed on-chain.',
  },
];

export default function HowItWorks() {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300">Four simple steps to secure your allocation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
            >
              <div className="text-3xl font-bold text-primary mb-4">{item.step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
