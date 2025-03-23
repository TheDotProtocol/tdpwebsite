'use client';
import { motion } from 'framer-motion';

const tools = [
  {
    title: "Block Explorer Integration",
    description: "Monitor transactions and smart contracts in real-time",
    icon: "🔍",
    features: [
      "Transaction tracking",
      "Smart contract verification",
      "Network analytics"
    ],
    link: "https://dotprotocolscan.com",
    buttonText: "Open Explorer"
  },
  {
    title: "Smart Contract IDE",
    description: "Develop and deploy smart contracts with our integrated development environment",
    icon: "💻",
    features: [
      "Solidity support",
      "Live compilation",
      "Automated testing"
    ],
    link: "#",
    buttonText: "Launch IDE",
    integrations: ["Remix", "Hardhat", "Truffle"]
  },
  {
    title: "Testnet Faucet",
    description: "Get test DPC20 tokens for development and testing",
    icon: "🚰",
    features: [
      "Instant token delivery",
      "Multiple token types",
      "Rate limiting"
    ],
    link: "#",
    buttonText: "Request Tokens"
  },
  {
    title: "3DOT Bugger Integration",
    description: "AI-powered debugging and optimization tools",
    icon: "🤖",
    features: [
      "Automated auditing",
      "Performance optimization",
      "Security scanning"
    ],
    link: "#",
    buttonText: "Connect AI Tools"
  }
];

export default function DeveloperTools() {
  return (
    <section id="developer-tools" className="relative py-20 bg-dark-300/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Developer Tools
          </h2>
          <p className="text-xl text-gray-200">
            Essential tools and resources to accelerate your development process
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-dark-300/50 rounded-lg text-2xl group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 mt-1">
                    {tool.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-400"
                  >
                    <span className="text-primary mr-2">→</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Integrations if any */}
              {tool.integrations && (
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Supported IDEs:</div>
                  <div className="flex flex-wrap gap-2">
                    {tool.integrations.map((integration) => (
                      <span
                        key={integration}
                        className="px-3 py-1 bg-dark-300/50 rounded-full text-xs text-primary border border-primary/20"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                {tool.buttonText}
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Quick Access Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 p-6 bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Quick Access Development Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/developers/docs"
                className="px-4 py-2 bg-dark-300/50 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-dark-300/50 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              >
                GitHub Repos
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-dark-300/50 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              >
                Support Channel
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 