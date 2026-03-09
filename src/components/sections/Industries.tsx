'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Briefcase, Landmark, GraduationCap, Heart, ShoppingCart, Wallet, Factory, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { INDUSTRIES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Briefcase,
  Landmark,
  GraduationCap,
  Heart,
  ShoppingCart,
  Wallet,
  Factory,
};

export function IndustriesSection() {
  return (
    <Section background="gradient">
      <SectionHeader
        subtitle="Industries We Serve"
        title="Solutions Tailored to Your Industry"
        description="We understand that different industries have unique technology requirements. Our solutions are designed to address sector-specific challenges."
        light
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INDUSTRIES.map((industry, index) => {
          const Icon = iconMap[industry.icon];
          return (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/industries#${industry.id}`}
                className="block group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors">
                  <Icon className="w-6 h-6 text-accent-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-white font-medium hover:text-accent-400 transition-colors"
        >
          View All Industries
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </Section>
  );
}
