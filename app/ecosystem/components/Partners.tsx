'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: "Kibouor",
    logo: "/logo-DCtXmDSQ.png",
    description: "The Dot Protocol Foundation",
    website: "https://www.kibouor.org/",
    bgClass: "bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-sm"
  },
  {
    name: "Global Dot Bank",
    logo: "/logo1gdb.png",
    description: "World's first Crypto Only Bank",
    website: "https://www.globaldotbank.org/",
    bgClass: "bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm"
  },
  {
    name: "3 Block Collective",
    logo: "/logo2.png",
    description: "Governance & Community",
    website: "https://www.3blockcollective.org/",
    bgClass: "bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-sm"
  },
  {
    name: "Hexchange",
    logo: "/main-logo.png",
    description: "World's first Hybrid Crypto Exchange",
    website: "https://www.hexchange.io/",
    bgClass: "bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-sm"
  }
];

export default function Partners() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Ecosystem Partners
          </h2>
          <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Building the future of blockchain together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden group ${
                partner.bgImage ? 'h-[300px]' : 'h-[250px]'
              } cursor-pointer transform transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 ${partner.bgClass}`} />
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-300 text-center">
                  {partner.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary text-sm flex items-center">
                    Visit Website
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-4 h-4 ml-1"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 