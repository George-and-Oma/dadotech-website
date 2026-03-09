'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function CTASection() {
  return (
    <Section background="gradient" padding="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business with Technology?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Let's discuss how Dadotech can help you achieve your technology goals. Get a free consultation with our experts today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-primary-600 hover:bg-gray-100"
            icon
          >
            Schedule a Consultation
          </Button>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
