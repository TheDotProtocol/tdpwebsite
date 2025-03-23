'use client';
import { motion } from 'framer-motion';

const governanceFeatures = [
  {
    title: "Submit Proposals",
    description: "Create and submit proposals for protocol improvements, funding requests, or parameter changes.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    stats: {
      "Active Proposals": "12",
      "Passed Proposals": "150+"
    }
  },
  {
    title: "Vote on Changes",
    description: "Participate in governance decisions with voting power based on your 3DOT holdings.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: {
      "Voting Power": "1 3DOT = 1 Vote",
      "Active Voters": "5,000+"
    }
  },
  {
    title: "Manage Treasury",
    description: "Help manage and allocate the community treasury for ecosystem growth and development.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    stats: {
      "Treasury Size": "$10M+",
      "Funded Projects": "45+"
    }
  }
];

const activeProposals = [
  {
    id: "DIP-42",
    title: "Implement Cross-Chain Bridge Security Upgrade",
    status: "Voting",
    votes: {
      for: 78,
      against: 22
    },
    timeLeft: "2 days",
    category: "Technical"
  },
  {
    id: "DIP-43",
    title: "Increase Validator Rewards by 2%",
    status: "Voting",
    votes: {
      for: 65,
      against: 35
    },
    timeLeft: "5 days",
    category: "Economic"
  },
  {
    id: "DIP-44",
    title: "Community Development Fund Allocation",
    status: "Discussion",
    votes: {
      for: 0,
      against: 0
    },
    timeLeft: "12 days",
    category: "Community"
  }
];

export default function BlockCollective() {
  return (
    <section id="block-collective" className="relative py-20 bg-dark-300/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            3Block Collective DAO
          </h2>
          <p className="text-xl text-gray-200">
            Shape the future of Dot Protocol through decentralized governance
          </p>
        </motion.div>

        {/* Governance Features */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {governanceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {feature.description}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(feature.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-400">{key}</span>
                    <span className="text-primary font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Proposals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Active Proposals
          </h3>
          <div className="space-y-4">
            {activeProposals.map((proposal) => (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-mono">{proposal.id}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      proposal.category === 'Technical' ? 'bg-blue-500/20 text-blue-400' :
                      proposal.category === 'Economic' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {proposal.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      proposal.status === 'Voting' ? 'bg-primary/20 text-primary' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {proposal.status}
                    </span>
                    <span className="text-gray-400">{proposal.timeLeft} left</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  {proposal.title}
                </h4>
                {proposal.status === 'Voting' && (
                  <div className="w-full h-2 bg-dark-300 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary"
                      style={{ width: `${proposal.votes.for}%` }}
                    />
                  </div>
                )}
                {proposal.status === 'Voting' && (
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-gray-400">For: {proposal.votes.for}%</span>
                    <span className="text-gray-400">Against: {proposal.votes.against}%</span>
                  </div>
                )}
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
            href="https://dao.3blockcollective.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary hover:bg-primary-600 text-white transition-all duration-300 hover:scale-105"
          >
            Join the DAO
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