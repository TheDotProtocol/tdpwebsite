'use client';
import { motion } from 'framer-motion';

const bountyLevels = [
  {
    level: "Critical",
    reward: "Up to $50,000",
    description: "Severe vulnerabilities that could compromise the network",
    icon: "🔥",
    examples: [
      "Consensus manipulation",
      "Token theft",
      "Smart contract vulnerabilities"
    ]
  },
  {
    level: "High",
    reward: "Up to $25,000",
    description: "Significant issues affecting protocol security",
    icon: "⚠️",
    examples: [
      "Economic attacks",
      "Flash loan exploits",
      "Rebase manipulation"
    ]
  },
  {
    level: "Medium",
    reward: "Up to $10,000",
    description: "Moderate impact vulnerabilities",
    icon: "⚡",
    examples: [
      "Gas optimization issues",
      "Minor smart contract bugs",
      "UI/UX vulnerabilities"
    ]
  }
];

const topContributors = [
  {
    name: "Alice Chen",
    contributions: "15 bugs reported",
    rewards: "$45,000",
    avatar: "👩‍💻"
  },
  {
    name: "John Smith",
    contributions: "12 bugs reported",
    rewards: "$30,000",
    avatar: "👨‍💻"
  },
  {
    name: "Maria Garcia",
    contributions: "10 bugs reported",
    rewards: "$28,000",
    avatar: "👩‍💻"
  }
];

export default function BugBounty() {
  return (
    <section id="bug-bounty" className="relative py-20 bg-dark-300/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Bug Bounty Program
          </h2>
          <p className="text-xl text-gray-200">
            Help secure the Dot Protocol ecosystem and earn rewards for finding vulnerabilities
          </p>
        </motion.div>

        {/* Bounty Levels */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {bountyLevels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{level.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{level.level}</h3>
                  <p className="text-primary font-semibold">{level.reward}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{level.description}</p>
              <ul className="space-y-2">
                {level.examples.map((example) => (
                  <li key={example} className="flex items-center text-gray-400">
                    <span className="text-primary mr-2">→</span>
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Top Contributors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Top Contributors
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-300/50 rounded-lg p-4 border border-dark-100 text-center"
              >
                <div className="text-4xl mb-3">{contributor.avatar}</div>
                <h4 className="text-white font-semibold mb-2">{contributor.name}</h4>
                <p className="text-gray-400 text-sm">{contributor.contributions}</p>
                <p className="text-primary font-semibold mt-2">{contributor.rewards}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
          >
            Submit a Bug Report
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