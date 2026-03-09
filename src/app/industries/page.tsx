import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections';
import { Building2, Briefcase, Landmark, GraduationCap, Heart, ShoppingCart, Wallet, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Technology solutions tailored for your industry. We serve corporate offices, SMEs, government, education, healthcare, retail, financial services, and industrial sectors.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Briefcase,
  Landmark,
  GraduationCap,
  Heart,
  ShoppingCart,
  Wallet,
  Factory,
};

const industries = [
  {
    id: 'corporate',
    name: 'Corporate Offices',
    icon: 'Building2',
    description: 'Enterprise IT infrastructure for large organizations that demand reliability, security, and scalability.',
    challenges: [
      'Managing complex IT infrastructure across multiple locations',
      'Ensuring security and compliance requirements',
      'Supporting a mobile and hybrid workforce',
      'Controlling IT costs while maintaining quality',
    ],
    solutions: [
      'Enterprise network infrastructure',
      'Unified communications platforms',
      'Managed IT services',
      'Cybersecurity solutions',
      'Cloud migration and management',
    ],
    color: 'blue',
  },
  {
    id: 'sme',
    name: 'Small & Medium Enterprises',
    icon: 'Briefcase',
    description: 'Scalable technology solutions for growing businesses that need enterprise capabilities without enterprise complexity.',
    challenges: [
      'Limited IT budget and resources',
      'Need for technology that scales with growth',
      'Lack of in-house IT expertise',
      'Balancing cost with quality',
    ],
    solutions: [
      'Cost-effective IT infrastructure',
      'Cloud-based solutions',
      'Managed IT services',
      'VoIP phone systems',
      'Essential cybersecurity',
    ],
    color: 'cyan',
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    icon: 'Landmark',
    description: 'Secure and compliant technology solutions for government agencies and public sector organizations.',
    challenges: [
      'Strict compliance and security requirements',
      'Legacy system modernization',
      'Budget constraints and procurement processes',
      'Citizen service delivery expectations',
    ],
    solutions: [
      'Secure network infrastructure',
      'Data center solutions',
      'Digital transformation services',
      'Compliance-focused security',
      'Citizen-facing applications',
    ],
    color: 'indigo',
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'GraduationCap',
    description: 'Technology solutions for schools, colleges, and universities to enhance learning and administration.',
    challenges: [
      'Supporting digital learning initiatives',
      'Campus-wide connectivity requirements',
      'Student and staff device management',
      'Limited IT budgets',
    ],
    solutions: [
      'Campus network infrastructure',
      'E-learning platforms',
      'Student information systems',
      'Device management solutions',
      'Collaboration tools',
    ],
    color: 'emerald',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: 'Heart',
    description: 'HIPAA-compliant technology solutions for hospitals, clinics, and healthcare providers.',
    challenges: [
      'Protecting patient data and privacy',
      'Meeting compliance requirements',
      'Integrating medical devices and systems',
      'Ensuring system availability 24/7',
    ],
    solutions: [
      'HIPAA-compliant infrastructure',
      'Electronic health records integration',
      'Medical device networking',
      'Telemedicine solutions',
      'Secure data backup',
    ],
    color: 'rose',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: 'ShoppingCart',
    description: 'Technology solutions for retail businesses to enhance customer experience and operations.',
    challenges: [
      'Managing POS and inventory systems',
      'Securing payment data',
      'Multi-location connectivity',
      'E-commerce integration',
    ],
    solutions: [
      'POS system implementation',
      'Retail network infrastructure',
      'E-commerce platforms',
      'CCTV and security systems',
      'Customer WiFi solutions',
    ],
    color: 'amber',
  },
  {
    id: 'finance',
    name: 'Financial Services',
    icon: 'Wallet',
    description: 'Secure and compliant infrastructure for banks, insurance companies, and fintech firms.',
    challenges: [
      'Stringent regulatory compliance',
      'Protecting sensitive financial data',
      'High availability requirements',
      'Digital transformation pressures',
    ],
    solutions: [
      'PCI-DSS compliant infrastructure',
      'Secure network architecture',
      'Disaster recovery solutions',
      'Fraud prevention systems',
      'Digital banking platforms',
    ],
    color: 'violet',
  },
  {
    id: 'industrial',
    name: 'Industrial & Logistics',
    icon: 'Factory',
    description: 'Technology solutions for manufacturing, logistics, and industrial operations.',
    challenges: [
      'Connecting operational technology (OT)',
      'Supply chain visibility',
      'Warehouse management',
      'Remote site connectivity',
    ],
    solutions: [
      'Industrial network infrastructure',
      'IoT and sensor connectivity',
      'Warehouse management systems',
      'Fleet tracking solutions',
      'Remote site connectivity',
    ],
    color: 'gray',
  },
];

const colorStyles: Record<string, { bg: string; bgLight: string; text: string }> = {
  blue: { bg: 'bg-blue-600', bgLight: 'bg-blue-50', text: 'text-blue-600' },
  cyan: { bg: 'bg-cyan-600', bgLight: 'bg-cyan-50', text: 'text-cyan-600' },
  indigo: { bg: 'bg-indigo-600', bgLight: 'bg-indigo-50', text: 'text-indigo-600' },
  emerald: { bg: 'bg-emerald-600', bgLight: 'bg-emerald-50', text: 'text-emerald-600' },
  rose: { bg: 'bg-rose-600', bgLight: 'bg-rose-50', text: 'text-rose-600' },
  amber: { bg: 'bg-amber-600', bgLight: 'bg-amber-50', text: 'text-amber-600' },
  violet: { bg: 'bg-violet-600', bgLight: 'bg-violet-50', text: 'text-violet-600' },
  gray: { bg: 'bg-gray-700', bgLight: 'bg-gray-50', text: 'text-gray-700' },
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-400 mb-3">
            Industries We Serve
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Solutions for Every Industry
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We understand that different industries have unique technology requirements.
            Our solutions are designed to address sector-specific challenges and compliance needs.
          </p>
        </div>
      </Section>

      {/* Industries List */}
      <Section background="white">
        <div className="space-y-16">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            const colors = colorStyles[industry.color];
            const isEven = index % 2 === 0;

            return (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {industry.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Common Challenges</h3>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-2 text-gray-600">
                              <span className="text-red-500 mt-1">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Our Solutions</h3>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution) => (
                            <li key={solution} className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button href="/contact" icon>
                        Discuss Your Needs
                      </Button>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={`${colors.bgLight} rounded-2xl p-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <Icon className={`w-24 h-24 ${colors.text} opacity-20`} />
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className={`text-2xl font-bold ${colors.text}`}>100+</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className={`text-2xl font-bold ${colors.text}`}>50+</div>
                        <div className="text-sm text-gray-600">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>

                {index < industries.length - 1 && (
                  <hr className="mt-16 border-gray-200" />
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Quick Navigation */}
      <Section background="gray" padding="sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Jump to Industry</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow text-gray-700 hover:text-primary-600"
              >
                <Icon className="w-4 h-4" />
                {industry.name}
              </a>
            );
          })}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
