'use client';
import { motion } from 'framer-motion';

const upcomingEvents = [
  {
    title: "DPC20 Token Standard Workshop",
    date: "Mar 28, 2024",
    time: "2:00 PM UTC",
    type: "Workshop",
    speaker: "Alex Chen",
    registrants: 234,
    link: "#"
  },
  {
    title: "Building Secure Smart Contracts",
    date: "Apr 2, 2024",
    time: "3:00 PM UTC",
    type: "Webinar",
    speaker: "Sarah Williams",
    registrants: 456,
    link: "#"
  },
  {
    title: "Validator Node Setup Guide",
    date: "Apr 5, 2024",
    time: "4:00 PM UTC",
    type: "Tutorial",
    speaker: "Mike Johnson",
    registrants: 189,
    link: "#"
  }
];

const resources = [
  {
    title: "Developer Documentation",
    description: "Comprehensive guides and API references for building on Dot Protocol",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    link: "/developers/docs"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for developers and validators",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    link: "https://youtube.com/@dotprotocol"
  },
  {
    title: "Community Blog",
    description: "Latest updates, tutorials, and insights from the community",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    link: "/blog"
  },
  {
    title: "Developer Forum",
    description: "Discuss technical topics and get help from the community",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    link: "https://forum.dotprotocol.network"
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Educational Resources
          </h2>
          <p className="text-xl text-gray-200">
            Learn, grow, and master blockchain development with our community resources
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.a
                key={event.title}
                href={event.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                  event.type === 'Workshop' ? 'bg-blue-500/20 text-blue-400' :
                  event.type === 'Webinar' ? 'bg-green-500/20 text-green-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {event.type}
                </span>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                <div className="text-sm text-gray-400 space-y-1 mb-4">
                  <p>{event.date} • {event.time}</p>
                  <p>By {event.speaker}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {event.registrants} registered
                  </span>
                  <svg 
                    className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" 
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
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Learning Resources */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-300">
                {resource.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for the latest educational content and events
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-300/50 border border-dark-50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 