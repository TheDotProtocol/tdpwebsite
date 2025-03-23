'use client';
import { motion } from 'framer-motion';

const milestones = [
  {
    title: "Network Growth",
    stats: [
      {
        value: "100+",
        label: "Active Validators",
        growth: "+25% this month"
      },
      {
        value: "1M+",
        label: "Transactions",
        growth: "+40% this quarter"
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Community",
    stats: [
      {
        value: "50K+",
        label: "Community Members",
        growth: "+15% this month"
      },
      {
        value: "200+",
        label: "Contributors",
        growth: "+30% this quarter"
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Development",
    stats: [
      {
        value: "100+",
        label: "DPC20 Tokens",
        growth: "+20% this month"
      },
      {
        value: "25+",
        label: "dApps Built",
        growth: "+35% this quarter"
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

const recentMilestones = [
  {
    date: "March 2024",
    title: "1 Million Transactions Milestone",
    description: "The network processed its millionth transaction, marking a significant achievement in adoption."
  },
  {
    date: "February 2024",
    title: "100 Validator Node Achievement",
    description: "The network reached 100 active validator nodes, enhancing decentralization and security."
  },
  {
    date: "January 2024",
    title: "Community Growth Record",
    description: "Our community grew by 50% in a single month, reaching 50,000 members across all platforms."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 bg-dark-300/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Community Achievements
          </h2>
          <p className="text-xl text-gray-200">
            Celebrating our shared success and growth milestones
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
            >
              <div className="text-primary mb-4">
                {milestone.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {milestone.title}
              </h3>
              <div className="space-y-6">
                {milestone.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-green-400">
                      {stat.growth}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Recent Milestones
          </h3>
          <div className="space-y-8">
            {recentMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary/30"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2" />
                <div className="text-sm text-primary mb-2">
                  {milestone.date}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {milestone.title}
                </h4>
                <p className="text-gray-300">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Looking Ahead
          </h3>
          <p className="text-gray-300 mb-8">
            Join us in reaching our next milestones and shaping the future of decentralized technology
          </p>
          <a
            href="/roadmap"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary hover:bg-primary-600 text-white transition-all duration-300 hover:scale-105"
          >
            View Roadmap
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