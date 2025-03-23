'use client';
import { motion } from 'framer-motion';

const rewardPrograms = [
  {
    title: "Bug Bounty Program",
    description: "Help identify vulnerabilities in our smart contracts and infrastructure",
    rewards: {
      "Critical": "Up to $50,000",
      "High": "Up to $25,000",
      "Medium": "Up to $10,000"
    },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Content Creation",
    description: "Create tutorials, articles, and videos about Dot Protocol",
    rewards: {
      "Technical Article": "$500",
      "Video Tutorial": "$1,000",
      "Documentation": "$300"
    },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: "Community Growth",
    description: "Help grow and moderate our community channels",
    rewards: {
      "Ambassador": "$1,000/month",
      "Moderator": "$500/month",
      "Events": "$200/event"
    },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Development Grants",
    description: "Build dApps and tools for the Dot Protocol ecosystem",
    rewards: {
      "Major Project": "Up to $50,000",
      "Integration": "Up to $10,000",
      "Tools": "Up to $5,000"
    },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

const topContributors = [
  {
    name: "Sarah Chen",
    contribution: "Smart Contract Auditing",
    rewards: "$45,000",
    avatar: "SC"
  },
  {
    name: "Alex Rodriguez",
    contribution: "Tutorial Series",
    rewards: "$12,000",
    avatar: "AR"
  },
  {
    name: "Mike Wilson",
    contribution: "Community Growth",
    rewards: "$8,500",
    avatar: "MW"
  }
];

export default function Rewards() {
  return (
    <section id="rewards" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Earn Rewards
          </h2>
          <p className="text-xl text-gray-200">
            Get rewarded for contributing to the growth and security of Dot Protocol
          </p>
        </motion.div>

        {/* Reward Programs */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {rewardPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mt-4 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {program.description}
              </p>
              <div className="space-y-3">
                {Object.entries(program.rewards).map(([type, amount]) => (
                  <div key={type} className="flex justify-between items-center">
                    <span className="text-gray-400">{type}</span>
                    <span className="text-primary font-semibold">{amount}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Contributors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Top Contributors
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-lg font-semibold mx-auto mb-4">
                  {contributor.avatar}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {contributor.name}
                </h4>
                <p className="text-gray-400 text-sm mb-3">
                  {contributor.contribution}
                </p>
                <p className="text-primary font-semibold">
                  {contributor.rewards}
                </p>
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
            href="/rewards/apply"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary hover:bg-primary-600 text-white transition-all duration-300 hover:scale-105"
          >
            Start Earning
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