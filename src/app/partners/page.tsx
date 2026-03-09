import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections';
import { Award, CheckCircle, Shield, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partners & Certifications',
  description: 'Our technology partnerships and certifications. We partner with industry leaders like Microsoft, Cisco, and Dell to deliver best-in-class solutions.',
};

const partners = [
  {
    name: 'Microsoft',
    level: 'Gold Partner',
    description: 'Certified Microsoft Partner for Azure, Microsoft 365, and enterprise solutions.',
    specializations: ['Azure Infrastructure', 'Modern Work', 'Security'],
    logo: '/partners/microsoft.png',
  },
  {
    name: 'Cisco',
    level: 'Premier Partner',
    description: 'Cisco certified partner for networking, security, and collaboration solutions.',
    specializations: ['Enterprise Networking', 'Security', 'Collaboration'],
    logo: '/partners/cisco.png',
  },
  {
    name: 'Dell Technologies',
    level: 'Titanium Partner',
    description: 'Dell partner for servers, storage, and endpoint solutions.',
    specializations: ['Servers', 'Storage', 'Workstations'],
    logo: '/partners/dell.png',
  },
  {
    name: 'HP',
    level: 'Gold Partner',
    description: 'HP partner for printing, computing, and enterprise solutions.',
    specializations: ['Computing', 'Printing', 'Enterprise'],
    logo: '/partners/hp.png',
  },
  {
    name: 'Fortinet',
    level: 'Expert Partner',
    description: 'Fortinet partner for next-generation firewall and security solutions.',
    specializations: ['Firewall', 'SD-WAN', 'Endpoint Security'],
    logo: '/partners/fortinet.png',
  },
  {
    name: 'VMware',
    level: 'Professional Partner',
    description: 'VMware partner for virtualization and cloud infrastructure.',
    specializations: ['Virtualization', 'Cloud', 'VDI'],
    logo: '/partners/vmware.png',
  },
  {
    name: 'AWS',
    level: 'Select Partner',
    description: 'Amazon Web Services partner for cloud solutions.',
    specializations: ['Cloud Infrastructure', 'Migration', 'DevOps'],
    logo: '/partners/aws.png',
  },
  {
    name: 'Google Cloud',
    level: 'Partner',
    description: 'Google Cloud partner for workspace and cloud solutions.',
    specializations: ['Workspace', 'Cloud Platform', 'Data Analytics'],
    logo: '/partners/google-cloud.png',
  },
];

const certifications = [
  {
    name: 'ISO 27001',
    description: 'Information Security Management System certification ensuring best practices in data security.',
    icon: Shield,
  },
  {
    name: 'NITDA Licensed',
    description: 'Licensed IT Service Provider by the National Information Technology Development Agency.',
    icon: Award,
  },
  {
    name: 'PCI-DSS Compliant',
    description: 'Payment Card Industry Data Security Standard compliance for financial solutions.',
    icon: Shield,
  },
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control certification for security, availability, and confidentiality.',
    icon: Award,
  },
];

const teamCertifications = [
  { name: 'MCSE', fullName: 'Microsoft Certified Solutions Expert', count: 12 },
  { name: 'CCNP', fullName: 'Cisco Certified Network Professional', count: 8 },
  { name: 'AWS SAA', fullName: 'AWS Solutions Architect Associate', count: 6 },
  { name: 'CISSP', fullName: 'Certified Information Systems Security Professional', count: 4 },
  { name: 'PMP', fullName: 'Project Management Professional', count: 5 },
  { name: 'ITIL', fullName: 'IT Infrastructure Library Foundation', count: 15 },
  { name: 'VCP', fullName: 'VMware Certified Professional', count: 4 },
  { name: 'CompTIA', fullName: 'CompTIA Security+, Network+, A+', count: 20 },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-400 mb-3">
            Our Partners
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partners & Certifications
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We partner with the world's leading technology companies and maintain
            industry certifications to deliver best-in-class solutions.
          </p>
        </div>
      </Section>

      {/* Technology Partners */}
      <Section background="white">
        <SectionHeader
          subtitle="Technology Partners"
          title="Industry-Leading Partnerships"
          description="Our partnerships with global technology leaders enable us to deliver cutting-edge solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <Card key={partner.name} className="text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <div className="w-32 h-12 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">{partner.name}</span>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-3">
                {partner.level}
              </span>
              <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {partner.specializations.map((spec) => (
                  <span key={spec} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {spec}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="gray">
        <SectionHeader
          subtitle="Certifications"
          title="Industry Certifications"
          description="Our certifications demonstrate our commitment to security, quality, and best practices."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <Card key={cert.name}>
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Team Certifications */}
      <Section background="white">
        <SectionHeader
          subtitle="Team Expertise"
          title="Certified Professionals"
          description="Our team holds industry-recognized certifications across various technologies."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamCertifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">{cert.count}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.fullName}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-6 py-3 rounded-full">
            <Star className="w-5 h-5" />
            <span className="font-medium">70+ certified professionals on our team</span>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-500 mb-3">
              Partner Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Partnerships Mean for You
            </h2>
            <p className="text-gray-600 mb-8">
              Our partnerships with industry leaders translate into tangible benefits for your business.
            </p>

            <div className="space-y-4">
              {[
                'Access to latest technology and solutions',
                'Competitive pricing through partner programs',
                'Priority support and escalation paths',
                'Early access to new product releases',
                'Certified expertise and best practices',
                'Vendor-backed warranties and support',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/contact" icon>
                Partner With Us
              </Button>
            </div>
          </div>

          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Partner Program</h3>
            <p className="text-primary-100 mb-6">
              Interested in partnering with Dadotech? We work with technology vendors,
              resellers, and service providers to deliver comprehensive solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Technology Vendors</h4>
                  <p className="text-sm text-primary-200">Partner with us to reach more customers in Africa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Resellers</h4>
                  <p className="text-sm text-primary-200">Become a Dadotech reseller partner</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Service Providers</h4>
                  <p className="text-sm text-primary-200">Collaborate on joint service delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
