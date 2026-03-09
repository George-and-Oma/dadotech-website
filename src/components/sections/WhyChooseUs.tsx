'use client';

import { motion } from 'framer-motion';
import { Award, Clock, HeadphonesIcon, Shield, Zap, Users } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const reasons = [
  {
    icon: Award,
    title: 'Certified Expertise',
    description: 'Our team holds certifications from Microsoft, Cisco, VMware, and other industry leaders.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'We respond to critical issues within 15 minutes, with average resolution times under 4 hours.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock technical support ensures your systems are always monitored and protected.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every solution we implement follows industry best practices for security and compliance.',
  },
  {
    icon: Zap,
    title: 'Proven Results',
    description: 'We have successfully delivered 500+ projects with a 99.9% client satisfaction rate.',
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'You get a dedicated account manager and technical team who understand your business.',
  },
];

export function WhyChooseUs() {
  return (
    <Section background="gray">
      <SectionHeader
        subtitle="Why Choose Us"
        title="The Dadotech Advantage"
        description="We combine deep technical expertise with a commitment to exceptional service delivery."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
