'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-36 md:py-44 relative overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0b] via-[#111113] to-[#0a0a0b]" />

      {/* Glow effect */}
      <div className="absolute w-[800px] h-[800px] rounded-full blur-[200px] bg-amber-500 opacity-30 top-[-400px] left-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-[-0.03em]">
            Ready to Transform Your{' '}
            <span className="text-gradient">Business?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-14 max-w-2xl mx-auto leading-[1.85]">
            Let's discuss how Dadotech can help you achieve your technology goals. Get a free consultation with our experts today.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl font-display text-lg font-bold text-zinc-900 transition-all duration-400 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_16px_60px_rgba(245,158,11,0.3)] group"
          >
            Schedule a Consultation
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
