'use client';
import { motion } from 'framer-motion';

export default function DeveloperCommunity() {
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
            Build with Dot Protocol
          </h2>
          <p className="text-xl text-gray-300">
            Empowering Developers and Communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Developer Resources */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8 hover:bg-dark-200/70 transition-all group"
          >
            <div className="text-5xl mb-6">👨‍💻</div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
              Developer Resources
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                Comprehensive documentation and SDKs
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                AI-powered development tools
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                Layer 2 scaling solutions
              </li>
            </ul>
            <button className="mt-8 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors">
              Start Building
            </button>
          </motion.div>

          {/* Community Engagement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8 hover:bg-dark-200/70 transition-all group"
          >
            <div className="text-5xl mb-6">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
              Community Engagement
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                Join the DAO for collaborative development
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                Participate in AI-powered hackathons
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                Access community grants and funding
              </li>
            </ul>
            <button className="mt-8 border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-colors">
              Join Community
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 