import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections';
import { SERVICES } from '@/lib/constants';
import { ArrowRight, Network, Phone, Settings, Cloud, Shield, Camera, Code, Lightbulb, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive IT services including network infrastructure, telecom solutions, cybersecurity, cloud computing, and managed IT services.',
};

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
  blue: 'bg-blue-500',
  cyan: 'bg-cyan-500',
  indigo: 'bg-indigo-500',
  sky: 'bg-sky-500',
  emerald: 'bg-emerald-500',
  violet: 'bg-violet-500',
  rose: 'bg-rose-500',
  amber: 'bg-amber-500',
};

const process = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We begin by understanding your business, challenges, and technology needs.',
  },
  {
    step: 2,
    title: 'Assessment',
    description: 'Our experts assess your current infrastructure and identify opportunities.',
  },
  {
    step: 3,
    title: 'Solution Design',
    description: 'We design a tailored solution that addresses your specific requirements.',
  },
  {
    step: 4,
    title: 'Implementation',
    description: 'Our certified engineers implement the solution with minimal disruption.',
  },
  {
    step: 5,
    title: 'Support',
    description: 'We provide ongoing support and optimization to ensure continued success.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-400 mb-3">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            From network infrastructure to cybersecurity, we provide end-to-end technology
            solutions that help your business operate efficiently and securely.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link key={service.id} href={`/services/${service.id}`} className="block group">
                <Card className="h-full flex flex-col">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        'w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0',
                        colorMap[service.color]
                      )}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mt-2">{service.shortDesc}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Our Process */}
      <Section background="white">
        <SectionHeader
          subtitle="Our Process"
          title="How We Deliver Results"
          description="Our proven methodology ensures successful project delivery every time."
        />

        <div className="grid md:grid-cols-5 gap-6">
          {process.map((item, index) => (
            <div key={item.step} className="relative">
              <Card className="text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-200" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-500 mb-3">
              Why Choose Dadotech
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology That Drives Your Business Forward
            </h2>
            <p className="text-gray-600 mb-8">
              We combine deep technical expertise with a commitment to understanding your business.
              Our solutions are designed to solve real problems and deliver measurable results.
            </p>

            <div className="space-y-4">
              {[
                'Certified professionals with 15+ years experience',
                '24/7 monitoring and support',
                'Tailored solutions for your specific needs',
                'Transparent pricing with no hidden costs',
                'Proven track record of successful projects',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/contact" icon>
                Discuss Your Project
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-600 text-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-200 mt-1">Projects Completed</div>
            </div>
            <div className="bg-accent-500 text-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold">200+</div>
              <div className="text-accent-200 mt-1">Happy Clients</div>
            </div>
            <div className="bg-emerald-500 text-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold">99.9%</div>
              <div className="text-emerald-200 mt-1">Uptime SLA</div>
            </div>
            <div className="bg-violet-500 text-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-violet-200 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
