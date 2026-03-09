'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Briefcase, Landmark, GraduationCap, Heart, ShoppingCart, CreditCard, Factory } from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Briefcase,
  Landmark,
  GraduationCap,
  Heart,
  ShoppingCart,
  Wallet: CreditCard,
  Factory,
};

export function IndustriesSection() {
  return (
    <section className="py-28 md:py-36 bg-[#0a0a0b] relative" id="industries">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center mb-5"
          >
            Industries We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-7 tracking-[-0.02em]"
          >
            Solutions Tailored to Your Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            We understand that different industries have unique technology requirements.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/industries#${industry.id}`}
                  className="block group h-full"
                >
                  <div className="relative h-full py-12 px-8 bg-[#111113] border border-zinc-800 rounded-2xl text-center overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:rotate-[-1deg]">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-teal-500 opacity-0 group-hover:opacity-15 transition-opacity duration-400" />

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-teal-500/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-teal-500 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                      <Icon className="w-8 h-8 text-teal-500 transition-colors duration-300 group-hover:text-zinc-900" />
                    </div>

                    {/* Name */}
                    <div className="relative z-10 font-display text-lg font-semibold text-white tracking-[-0.01em]">
                      {industry.name}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
