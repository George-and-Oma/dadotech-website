'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated grid */}
        <div className="absolute inset-0 circuit-grid opacity-15 animate-grid-pulse" />

        {/* Circuit flowing lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[20, 40, 60, 80].map((top, i) => (
            <div
              key={i}
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-circuit-flow"
              style={{
                top: `${top}%`,
                width: `${150 + i * 50}px`,
                left: `-${150 + i * 50}px`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Glow orbs */}
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[150px] bg-amber-500 opacity-40 -top-[200px] -right-[200px]" />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[150px] bg-teal-500 opacity-20 -bottom-[200px] -left-[200px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-[950px]">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-sm font-medium text-amber-500 mb-10"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse-slow" />
            Trusted by 200+ businesses across Africa
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[42px] sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold leading-[1.05] tracking-[-0.03em] mb-10"
          >
            <span className="block mb-2">Technology Solutions</span>
            <span className="block">
              for{' '}
              <span className="relative inline-block">
                <span className="text-gradient">Modern Business</span>
                <span className="absolute bottom-1 md:bottom-2 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-amber-500 to-teal-500 opacity-60 -z-10" />
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-[620px] mb-14 leading-[1.85]"
          >
            We design, implement, and manage IT infrastructure, telecom systems, and digital solutions that drive growth and efficiency for your organization.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 mb-20"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-base font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(245,158,11,0.3)] group"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-zinc-700 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:border-amber-500 hover:text-amber-500"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-10"
          >
            <div className="flex items-center gap-3 text-[15px] text-zinc-400">
              <Shield className="w-5 h-5 text-teal-500" />
              ISO 27001 Compliant
            </div>
            <div className="flex items-center gap-3 text-[15px] text-zinc-400">
              <Shield className="w-5 h-5 text-teal-500" />
              Microsoft Partner
            </div>
            <div className="flex items-center gap-3 text-[15px] text-zinc-400">
              <Clock className="w-5 h-5 text-teal-500" />
              24/7 Support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
