'use client';

import Link from 'next/link';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0b] border-t border-zinc-800">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-teal-500 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.3)]">
                <span className="font-display font-extrabold text-2xl text-[#0a0a0b]">D</span>
              </div>
              <span className="font-display text-2xl font-bold text-white">Dadotech</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Professional IT infrastructure, telecom, and managed technology solutions for modern businesses. Trusted by 200+ organizations across Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3.5">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm text-zinc-400 hover:text-amber-500 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/about" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-zinc-400 hover:text-amber-500 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-sm text-zinc-400 hover:text-amber-500 transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="text-sm text-zinc-400">
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#111113] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:border-amber-500 hover:text-[#0a0a0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href={SITE_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#111113] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:border-amber-500 hover:text-[#0a0a0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
            >
              <Twitter className="w-[18px] h-[18px]" />
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#111113] border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:border-amber-500 hover:text-[#0a0a0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
            >
              <Facebook className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
