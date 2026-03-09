'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Network, Phone, Settings, Cloud, Shield, Camera, Code, Lightbulb } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';

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

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-500 group-hover:text-white',
  cyan: 'bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white',
  indigo: 'bg-indigo-500/10 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white',
  sky: 'bg-sky-500/10 text-sky-600 group-hover:bg-sky-500 group-hover:text-white',
  emerald: 'bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white',
  violet: 'bg-violet-500/10 text-violet-600 group-hover:bg-violet-500 group-hover:text-white',
  rose: 'bg-rose-500/10 text-rose-600 group-hover:bg-rose-500 group-hover:text-white',
  amber: 'bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
};

export function ServicesGrid() {
  return (
    <Section background="gray" id="services">
      <SectionHeader
        subtitle="What We Do"
        title="Comprehensive Technology Solutions"
        description="From network infrastructure to cybersecurity, we provide end-to-end technology solutions that help businesses operate efficiently and securely."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/services/${service.id}`} className="block group">
                <Card className="h-full relative overflow-hidden">
                  <div
                    className={cn(
                      'w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300',
                      colorMap[service.color]
                    )}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
