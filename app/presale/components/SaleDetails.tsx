'use client';
import { motion } from 'framer-motion';
import { PRESALE_CONFIG } from '../config';

const stats = [
  { label: 'Token Price', value: `$${PRESALE_CONFIG.tokenPriceUsd.toFixed(2)}` },
  { label: 'Soft Cap', value: `$${(PRESALE_CONFIG.softCapUsd / 1_000_000).toFixed(1)}M` },
  { label: 'Hard Cap', value: `$${(PRESALE_CONFIG.hardCapUsd / 1_000_000).toFixed(0)}M` },
  { label: 'Min Purchase', value: `$${PRESALE_CONFIG.minPurchaseUsd}` },
  { label: 'Max Purchase', value: `$${PRESALE_CONFIG.maxPurchaseUsd.toLocaleString()}` },
  { label: 'Payment', value: PRESALE_CONFIG.paymentMethods.join(' · ') },
];

export default function SaleDetails() {
  const progress = Math.min(
    (PRESALE_CONFIG.raisedUsd / PRESALE_CONFIG.hardCapUsd) * 100,
    100
  );
  const softCapProgress = Math.min(
    (PRESALE_CONFIG.raisedUsd / PRESALE_CONFIG.softCapUsd) * 100,
    100
  );

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Sale Details
          </h2>
          <p className="text-xl text-gray-300">
            Private whitelist presale — limited allocation available
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-2xl p-8 mb-10"
        >
          <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
            <div>
              <p className="text-gray-400 text-sm">Raised</p>
              <p className="text-2xl font-bold text-white">
                ${PRESALE_CONFIG.raisedUsd.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Hard Cap</p>
              <p className="text-2xl font-bold text-primary">
                ${PRESALE_CONFIG.hardCapUsd.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="relative h-4 bg-dark-300/50 rounded-full overflow-hidden mb-2">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-600 to-primary rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-primary-300/80"
              style={{ left: `${(PRESALE_CONFIG.softCapUsd / PRESALE_CONFIG.hardCapUsd) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>{progress.toFixed(1)}% of hard cap</span>
            <span>
              Soft cap {softCapProgress.toFixed(0)}% reached
            </span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 text-center"
            >
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
