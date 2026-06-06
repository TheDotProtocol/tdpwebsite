'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Who can participate in the presale?',
    answer:
      'This is a private whitelist presale. You must have an approved whitelist code and connect an eligible MetaMask wallet to participate.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'You can pay with ETH, USDT, or BNB. Select your preferred method in the purchase panel before confirming.',
  },
  {
    question: 'What is the token price?',
    answer:
      'The presale price is fixed at $0.50 per DPC20 token for all whitelist participants during this phase.',
  },
  {
    question: 'When will I receive my tokens?',
    answer:
      'DPC20 tokens will be distributed to your connected wallet after on-chain settlement. Full blockchain integration is being finalized as part of the Dot Protocol mainnet launch.',
  },
  {
    question: 'What are the purchase limits?',
    answer:
      'Minimum purchase is $100 and maximum is $50,000 per wallet during the private whitelist phase.',
  },
  {
    question: 'How do I get a whitelist code?',
    answer:
      'Whitelist codes are distributed to approved partners, early community members, and strategic investors. Contact our team through the Community page for access requests.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-white font-semibold">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-400 leading-relaxed">{faq.answer}</p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
