'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "How do I get started with Dot Protocol development?",
    answer: "Begin by setting up your development environment with MetaMask, connecting to our testnet, and exploring our documentation. You can also join our Discord community for support."
  },
  {
    question: "What are the system requirements for running a validator node?",
    answer: "Validator nodes require a minimum of 8GB RAM, 4 CPU cores, 500GB SSD storage, and a stable internet connection. You'll also need to stake a minimum amount of tokens."
  },
  {
    question: "How does the DPC20 token standard differ from ERC20?",
    answer: "DPC20 extends ERC20 functionality with built-in features like dynamic supply adjustment, flash loans, and multi-asset collateral management. It's specifically designed for DeFi applications."
  },
  {
    question: "What development tools are available?",
    answer: "We provide a comprehensive suite of tools including SDKs (JavaScript, Python, Mobile), smart contract templates, testing frameworks, and debugging tools like 3DOT Bugger."
  },
  {
    question: "How can I participate in the bug bounty program?",
    answer: "You can participate by reviewing our smart contracts, finding vulnerabilities, and submitting detailed reports through our bug bounty platform. Rewards vary based on severity and impact."
  },
  {
    question: "Where can I find example DPC20 implementations?",
    answer: "You can find example implementations in our GitHub repositories, documentation, and tutorial section. We provide templates for various use cases including DeFi, gaming, and NFTs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-200">
            Common questions about developing on Dot Protocol
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
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
                </div>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Help Center Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Visit our comprehensive help center.
          </p>
          <a
            href="/developers/docs/help-center"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            Visit Help Center
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 