'use client';
import { motion } from 'framer-motion';

const features = [
  { name: 'Basic Transfer', dpc20: true, erc20: true, bep20: true, matic20: true, trc20: true },
  { name: 'Rebase Mechanism', dpc20: true, erc20: false, bep20: false, matic20: false, trc20: false },
  { name: 'Flash Loans', dpc20: true, erc20: false, bep20: false, matic20: false, trc20: false },
  { name: 'Collateral Management', dpc20: true, erc20: false, bep20: false, matic20: false, trc20: false },
  { name: 'Price Oracle Integration', dpc20: true, erc20: false, bep20: false, matic20: false, trc20: false },
  { name: 'Pausable Transfers', dpc20: true, erc20: false, bep20: false, matic20: false, trc20: false },
];

const Check = () => (
  <motion.svg 
    whileHover={{ scale: 1.2 }}
    className="w-6 h-6 text-primary mx-auto" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </motion.svg>
);

const Cross = () => (
  <motion.svg 
    whileHover={{ scale: 1.2 }}
    className="w-6 h-6 text-gray-500 mx-auto" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </motion.svg>
);

export default function ComparisonTable() {
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
            DPC20 vs Other Standards
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-semibold mb-4 leading-relaxed tracking-wide">
            Compare the revolutionary features of{' '}
            <span className="text-primary">DPC20</span> with existing token standards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto overflow-x-auto rounded-xl bg-dark-200/80 backdrop-blur-sm border border-dark-50 p-6"
        >
          <div className="min-w-[800px]">
            <div className="grid grid-cols-6 gap-4 mb-6 text-lg font-bold bg-dark-300/50 rounded-lg p-4">
              <div className="text-left text-white">Feature</div>
              <div className="text-center text-primary font-bold">DPC20</div>
              <div className="text-center text-gray-400">ERC20</div>
              <div className="text-center text-gray-400">BEP20</div>
              <div className="text-center text-gray-400">MATIC20</div>
              <div className="text-center text-gray-400">TRC20</div>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-6 gap-4 py-4 border-b border-dark-50 hover:bg-dark-300/30 rounded-lg px-4 transition-colors"
              >
                <div className="text-left text-gray-200 font-medium">{feature.name}</div>
                <div className="text-center">{feature.dpc20 ? <Check /> : <Cross />}</div>
                <div className="text-center">{feature.erc20 ? <Check /> : <Cross />}</div>
                <div className="text-center">{feature.bep20 ? <Check /> : <Cross />}</div>
                <div className="text-center">{feature.matic20 ? <Check /> : <Cross />}</div>
                <div className="text-center">{feature.trc20 ? <Check /> : <Cross />}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 