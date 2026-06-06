'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FOUNDER_IMAGE = '/leadership/D729989F-0C04-4E56-A9BC-3CCD44745226_1_105_c.jpeg';

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Leadership
          </h2>
          <p className="text-xl text-gray-300">
            The vision and expertise behind Dot Protocol
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20">
                <Image
                  src={FOUNDER_IMAGE}
                  alt="Saleena Thamani, Founder of The Dot Protocol"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
            </div>
          </div>

          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            Founder
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Saleena Thamani
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Pioneering blockchain developer and architect of the DPC-20 token standard.
            She merges technical excellence with creativity, innovating at the intersection
            of fintech and blockchain. Also an accomplished fashion designer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
