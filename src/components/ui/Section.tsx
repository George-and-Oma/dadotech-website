'use client';

import { cn } from '@/lib/utils';
import { Container } from './Container';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'white' | 'gray' | 'primary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  id?: string;
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary-900 text-white',
  gradient: 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white',
};

const paddings = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
};

export function Section({
  children,
  className,
  containerSize = 'xl',
  background = 'white',
  padding = 'md',
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(backgrounds[background], paddings[padding], className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center max-w-3xl mx-auto',
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            'inline-block text-sm font-semibold tracking-wider uppercase mb-3',
            light ? 'text-accent-400' : 'text-accent-500'
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl',
            light ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
