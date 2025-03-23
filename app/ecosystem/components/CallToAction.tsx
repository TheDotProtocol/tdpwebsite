'use client';
import { motion } from 'framer-motion';

const actions = [
  {
    title: "Explore the Ecosystem",
    description: "Discover the full potential of Dot Protocol",
    href: "/dpc20",
    icon: "🌐"
  },
  {
    title: "Download 3DOT Wallet",
    description: "Experience the future of digital assets",
    href: "#",
    icon: "📱"
  },
  {
    title: "Join the Validator Program",
    description: "Become part of our network",
    href: "#",
    icon: "🔗"
  },
  {
    title: "Discover DPC20 Tokenomics",
    description: "Learn about our innovative token model",
    href: "/dpc20#tokenomics",
    icon: "📊"
  }
];

export default function CallToAction() {
  return (
    <section className="relative py-20 bg-dark-300/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Step into the Future with Dot Protocol
          </h2>
          <p className="text-2xl text-gray-200 font-semibold">
            Join the Ecosystem that's Redefining Blockchain Innovation, Today and Beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {actions.map((action, index) => (
            <motion.a
              key={action.title}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all group cursor-pointer"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {action.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                {action.title}
              </h3>
              <p className="text-gray-400">
                {action.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 