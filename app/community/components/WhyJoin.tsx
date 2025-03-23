'use client';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Collaborate",
    description: "Work alongside developers, validators, and enthusiasts to create cutting-edge dApps, NFTs, DeFi solutions, and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stats: {
      projects: "100+",
      contributors: "1000+"
    }
  },
  {
    title: "Learn",
    description: "Stay ahead with exclusive tutorials, webinars, and guides to help you build and grow in the blockchain space.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    stats: {
      tutorials: "50+",
      workshops: "Monthly"
    }
  },
  {
    title: "Earn",
    description: "Participate in bounties, become a validator, or contribute to the ecosystem to earn 3DOT tokens and other rewards.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: {
      rewards: "$1M+",
      validators: "100+"
    }
  },
  {
    title: "Shape the Future",
    description: "Have a voice in the direction of Dot Protocol by joining the 3Block Collective DAO and participating in governance.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    stats: {
      proposals: "150+",
      "active voters": "5000+"
    }
  }
];

export default function WhyJoin() {
  return (
    <section id="why-join" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Why Join the Dot Protocol Community?
          </h2>
          <p className="text-xl text-gray-200">
            Building the future is a team effort, and at Dot Protocol, community is at the core of everything we do.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mt-4 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {benefit.description}
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {Object.entries(benefit.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xl font-bold text-primary">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-20 relative h-[400px] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400 text-center">
                Interactive Global Community Map
                <span className="block text-sm mt-2">Coming Soon</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 