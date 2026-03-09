'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const highlights = [
  'Enterprise-grade infrastructure solutions',
  '24/7 technical support and monitoring',
  'Certified IT professionals',
  'Scalable and flexible solutions',
  'Industry-leading security practices',
  'Proven track record of success',
];

export function AboutSection() {
  return (
    <Section background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image/Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center">
                  <Award className="w-10 h-10 text-primary-600 mb-2" />
                  <span className="text-2xl font-bold text-gray-900">15+</span>
                  <span className="text-sm text-gray-600">Years</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center mt-8">
                  <Users className="w-10 h-10 text-accent-500 mb-2" />
                  <span className="text-2xl font-bold text-gray-900">200+</span>
                  <span className="text-sm text-gray-600">Clients</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center -mt-4">
                  <Target className="w-10 h-10 text-emerald-500 mb-2" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                  <span className="text-sm text-gray-600">Projects</span>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center mt-4">
                  <CheckCircle className="w-10 h-10 text-violet-500 mb-2" />
                  <span className="text-2xl font-bold text-gray-900">99.9%</span>
                  <span className="text-sm text-gray-600">Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-xl shadow-lg">
            <span className="font-semibold">Trusted Partner Since 2010</span>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-500 mb-3">
            About Dadotech
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Trusted Technology Partner in Africa
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Dadotech Limited is a leading provider of IT infrastructure, telecommunications, and digital solutions in Nigeria. Since 2010, we have been helping businesses transform their operations through innovative technology.
          </p>
          <p className="text-gray-600 mb-8">
            Our team of certified professionals brings deep expertise across networking, cloud computing, cybersecurity, and software development. We take a consultative approach, understanding your unique challenges before designing tailored solutions that deliver measurable results.
          </p>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/about" icon>
              Learn More About Us
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
