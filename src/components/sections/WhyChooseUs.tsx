'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    number: '01',
    title: 'Certified Expertise',
    description: 'Our team holds certifications from Microsoft, Cisco, VMware, and other industry leaders.',
  },
  {
    number: '02',
    title: 'Rapid Response',
    description: 'We respond to critical issues within 15 minutes, with average resolution times under 4 hours.',
  },
  {
    number: '03',
    title: 'Proven Track Record',
    description: '500+ successful projects delivered with a 99.9% client satisfaction rate.',
  },
  {
    number: '04',
    title: 'Security First',
    description: 'Every solution we implement follows industry best practices for security and compliance.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#111113]" id="why-us">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="section-label mb-4">Why Choose Us</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              The Dadotech <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              We combine deep technical expertise with a commitment to exceptional service delivery. Our team of certified professionals brings decades of combined experience across networking, cloud computing, cybersecurity, and software development.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(245,158,11,0.3)] group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-[auto_1fr] gap-6 p-8 bg-[#1a1a1d] border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-amber-500 hover:translate-x-2">
                  {/* Number */}
                  <div className="font-display text-5xl font-extrabold text-amber-500/30 leading-none">
                    {feature.number}
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="font-display text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
