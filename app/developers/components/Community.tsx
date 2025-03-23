'use client';
import { motion } from 'framer-motion';

const communityFeatures = [
  {
    title: "3Block Collective DAO",
    description: "Join our decentralized autonomous organization and help shape the future of Dot Protocol",
    icon: "🏛️",
    links: [
      {
        text: "Join DAO",
        url: "https://dao.3blockcollective.org"
      },
      {
        text: "View Proposals",
        url: "#"
      }
    ],
    stats: {
      members: "5,000+",
      proposals: "150+",
      treasury: "$10M+"
    }
  },
  {
    title: "GitHub Repositories",
    description: "Contribute to our open-source ecosystem and collaborate with developers worldwide",
    icon: "📦",
    links: [
      {
        text: "Core Protocol",
        url: "https://github.com/dotprotocol/core"
      },
      {
        text: "SDKs & Tools",
        url: "https://github.com/dotprotocol/sdk"
      }
    ],
    stats: {
      repos: "25+",
      contributors: "200+",
      stars: "1.5k+"
    }
  },
  {
    title: "Developer Support",
    description: "Get help from our active community and technical support team",
    icon: "💬",
    links: [
      {
        text: "Discord",
        url: "https://discord.gg/dotprotocol"
      },
      {
        text: "Telegram",
        url: "https://t.me/dotprotocol_dev"
      }
    ],
    stats: {
      members: "10,000+",
      channels: "20+",
      response: "< 2h"
    }
  }
];

const upcomingEvents = [
  {
    title: "DPC20 Developer Workshop",
    date: "March 15, 2024",
    type: "Virtual",
    registration: "#"
  },
  {
    title: "Dot Protocol Hackathon",
    date: "April 1-15, 2024",
    type: "Global",
    registration: "#"
  },
  {
    title: "Smart Contract Security Summit",
    date: "May 1, 2024",
    type: "Hybrid",
    registration: "#"
  }
];

export default function Community() {
  return (
    <section id="community" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Developer Community
          </h2>
          <p className="text-xl text-gray-200">
            Join our thriving community of developers building the future of blockchain
          </p>
        </motion.div>

        {/* Community Features */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{feature.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(feature.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xl font-bold text-primary">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-3">
                {feature.links.map((link) => (
                  <a
                    key={link.text}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-300/50 rounded-lg p-4 border border-dark-100"
              >
                <div className="text-primary text-sm mb-2">{event.date}</div>
                <h4 className="text-white font-semibold mb-2">{event.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{event.type}</span>
                  <a
                    href={event.registration}
                    className="text-primary text-sm hover:underline"
                  >
                    Register →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-gray-300 mb-8">
            Connect with fellow developers, share your ideas, and help build the future of decentralized finance.
          </p>
          <a
            href="https://discord.gg/dotprotocol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
          >
            Join Discord Community
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