'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Network, Phone, Settings, Cloud, Shield, Camera, Code, Lightbulb } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Network,
  Phone,
  Settings,
  Cloud,
  Shield,
  Camera,
  Code,
  Lightbulb,
};

export function ServicesGrid() {
  return (
    <section className="py-28 md:py-36 bg-[#0a0a0b]" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center mb-5"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-7 tracking-[-0.02em]"
          >
            Comprehensive Technology Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            From network infrastructure to cybersecurity, we provide end-to-end technology solutions that help businesses operate efficiently and securely.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`} className="block group h-full">
                  <div className="h-full bg-[#111113] border border-zinc-800 rounded-2xl p-8 relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-amber-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(245,158,11,0.3)]">
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-7 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-teal-500 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                      <Icon className="w-7 h-7 text-amber-500 transition-colors duration-300 group-hover:text-zinc-900" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-white mb-4 tracking-[-0.01em]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-[15px] leading-[1.75]">
                      {service.shortDesc}
                    </p>
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
