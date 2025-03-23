'use client';
import { motion } from 'framer-motion';

export default function Abstract() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent text-center">
            Abstract
          </h2>
          
          <div className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-200 leading-relaxed"
            >
              The Dot Protocol introduces a next-generation blockchain ecosystem built on{' '}
              <span className="text-primary font-semibold">Proof of Authority (PoA)</span> with{' '}
              <span className="text-primary font-semibold">QBFT consensus</span>, designed for high scalability, 
              energy efficiency, and industry-specific use cases such as travel, finance, and emergency services.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-200 leading-relaxed"
            >
              At its core lies the{' '}
              <span className="text-primary font-semibold">DPC20 token standard</span>, a groundbreaking 
              enhancement of the ERC20 model with dynamic supply adjustments, hybrid stability mechanisms, 
              and advanced collateral management.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-200 leading-relaxed"
            >
              Together, Dot Protocol and DPC20 set a new benchmark for security, scalability, and versatility 
              in decentralized finance (DeFi) and cross-industry applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="bg-dark-300/50 rounded-lg px-4 py-2 text-primary border border-primary/20">
                High Scalability
              </div>
              <div className="bg-dark-300/50 rounded-lg px-4 py-2 text-primary border border-primary/20">
                Energy Efficient
              </div>
              <div className="bg-dark-300/50 rounded-lg px-4 py-2 text-primary border border-primary/20">
                Industry Solutions
              </div>
              <div className="bg-dark-300/50 rounded-lg px-4 py-2 text-primary border border-primary/20">
                Advanced DeFi
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 