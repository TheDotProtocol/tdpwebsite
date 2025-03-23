'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Set Up Your Wallet",
    description: "Install MetaMask or any Web3 wallet and configure it for Dot Protocol",
    icon: "👛",
    details: [
      "Download and install MetaMask",
      "Add Dot Protocol network",
      "Secure your wallet"
    ]
  },
  {
    title: "Connecting to the Testnet (Chennai)",
    description: "Configure your development environment to interact with Chennai testnet",
    icon: "🔗",
    details: [
      "Configure network settings",
      "Get test tokens from faucet",
      "Verify connection"
    ]
  },
  {
    title: "Deploying Your First DPC20 Smart Contract",
    description: "Create and deploy a basic DPC20 token contract",
    icon: "📝",
    details: [
      "Write your token contract",
      "Compile and test locally",
      "Deploy to testnet"
    ]
  },
  {
    title: "Minting and Managing DPC20 Tokens",
    description: "Learn to interact with your deployed token contract",
    icon: "⚡",
    details: [
      "Mint your first tokens",
      "Implement token features",
      "Monitor transactions"
    ]
  }
];

export default function GettingStarted() {
  return (
    <section id="getting-started" className="relative py-20 bg-dark-300/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Getting Started
          </h2>
          <p className="text-xl text-gray-200">
            Jump right in with our beginner-friendly guide that helps you set up your development 
            environment and start interacting with the Dot Protocol Blockchain in minutes.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 flex-shrink-0 bg-dark-200/50 rounded-2xl flex items-center justify-center border border-dark-50">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {step.description}
                    </p>
                    <ul className="grid md:grid-cols-3 gap-4">
                      {step.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2 text-gray-400"
                        >
                          <span className="text-primary">→</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-20 bottom-0 w-[1px] bg-gradient-to-b from-primary/20 to-transparent" />
              )}
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
            href="#core-components"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Explore Core Components
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