'use client';
import { motion } from 'framer-motion';

const components = [
  {
    title: "DPC20 Token Standard",
    description: "Next-gen token standard enhancing ERC20 with features like dynamic supply, hybrid collateral, and flash loans.",
    icon: "🔄",
    features: [
      {
        name: "Dynamic Supply Management",
        description: "Automatic supply adjustments based on market conditions and predefined parameters"
      },
      {
        name: "Hybrid Collateral System",
        description: "Support for multiple collateral types with automated risk management"
      },
      {
        name: "Flash Loan Capability",
        description: "Built-in flash loan functionality for DeFi applications"
      }
    ]
  },
  {
    title: "Consensus Mechanism (PoA + QBFT)",
    description: "High-performance consensus combining Proof of Authority with QBFT for optimal security and efficiency.",
    icon: "⚡",
    features: [
      {
        name: "Validator Network",
        description: "Carefully selected network of trusted validators ensuring network security"
      },
      {
        name: "QBFT Consensus",
        description: "Byzantine fault-tolerant consensus for immediate transaction finality"
      },
      {
        name: "Energy Efficiency",
        description: "Minimal energy consumption compared to traditional PoW systems"
      }
    ]
  },
  {
    title: "Validator Program",
    description: "Join the network of trusted validators helping secure and maintain the Dot Protocol blockchain.",
    icon: "🛡️",
    features: [
      {
        name: "Validator Requirements",
        description: "Technical specifications and staking requirements for validators"
      },
      {
        name: "Rewards System",
        description: "Competitive rewards for network validation and maintenance"
      },
      {
        name: "Monitoring Tools",
        description: "Advanced tools for network health and performance monitoring"
      }
    ]
  }
];

export default function CoreComponents() {
  return (
    <section id="core-components" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Core Components of Dot Protocol
          </h2>
          <p className="text-xl text-gray-200">
            Delve deeper into the unique technological features that set Dot Protocol apart 
            from other blockchains.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-8 hover:bg-dark-200/70 transition-all">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{component.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {component.title}
                    </h3>
                    <p className="text-gray-300 mt-1">
                      {component.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {component.features.map((feature, i) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-dark-300/50 rounded-lg p-4 border border-dark-100"
                    >
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Diagram */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="mt-8 h-48 rounded-lg bg-dark-300/30 border border-dark-100 flex items-center justify-center"
                >
                  <div className="text-center text-gray-400">
                    <p className="text-sm mb-2">Interactive Diagram Coming Soon</p>
                    <p className="text-xs">Visualize the {component.title} architecture</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#apis-sdks"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Explore APIs & SDKs
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 