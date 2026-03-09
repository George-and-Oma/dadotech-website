'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';
import { PARTNERS } from '@/lib/constants';

export function PartnersSection() {
  return (
    <Section background="white" padding="sm">
      <SectionHeader
        subtitle="Our Partners"
        title="Trusted by Industry Leaders"
        description="We partner with the world's leading technology companies to deliver best-in-class solutions."
      />

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {PARTNERS.map((partner, index) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <div className="h-12 px-6 flex items-center justify-center bg-gray-100 rounded-lg">
              <span className="text-xl font-bold text-gray-700">{partner}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
