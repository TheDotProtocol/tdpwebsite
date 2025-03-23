'use client';
import { motion } from 'framer-motion';

export default function SecurityCompliance() {
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
            Unmatched Security and Compliance
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-semibold tracking-wide leading-relaxed">
            Enterprise-grade security with{' '}
            <span className="text-primary">regulatory compliance</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all">
              <h3 className="text-xl font-bold mb-3 text-white">AI-Driven Security</h3>
              <p className="text-gray-300">
                Advanced threat detection and automated security protocols powered by artificial intelligence.
              </p>
            </div>
            <div className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all">
              <h3 className="text-xl font-bold mb-3 text-white">Regulatory Compliance</h3>
              <p className="text-gray-300">
                Built-in compliance checks and reporting tools for businesses and institutions.
              </p>
            </div>
            <div className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all">
              <h3 className="text-xl font-bold mb-3 text-white">Regular Audits</h3>
              <p className="text-gray-300">
                Continuous security assessments and third-party audits ensure platform integrity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-full animate-pulse" />
            <div className="text-8xl">🛡️</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 