import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CTASection } from '@/components/sections';
import { Building2, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects & Case Studies',
  description: 'Explore our portfolio of successful IT projects. See how Dadotech has helped businesses transform their technology infrastructure.',
};

const projects = [
  {
    id: 'finserve-network',
    title: 'Enterprise Network Modernization',
    client: 'FinServe Nigeria',
    industry: 'Financial Services',
    services: ['Network Infrastructure', 'Cybersecurity', 'Managed IT'],
    description: 'Complete network infrastructure overhaul for a leading financial services company with 15 branch locations across Nigeria.',
    challenge: 'Legacy network infrastructure causing frequent outages and security vulnerabilities, impacting customer service and compliance.',
    solution: 'Designed and implemented a modern, redundant network architecture with next-generation firewalls, SD-WAN for branch connectivity, and 24/7 monitoring.',
    results: [
      '99.99% network uptime achieved',
      '60% reduction in network-related incidents',
      'Full PCI-DSS compliance achieved',
      '45% improvement in branch connectivity speeds',
    ],
    featured: true,
  },
  {
    id: 'lagos-medical-cloud',
    title: 'Healthcare Cloud Migration',
    client: 'Lagos Medical Center',
    industry: 'Healthcare',
    services: ['Cloud & Microsoft 365', 'Managed IT', 'Cybersecurity'],
    description: 'HIPAA-compliant cloud migration for a 500-bed hospital, including electronic health records and collaboration tools.',
    challenge: 'Aging on-premise infrastructure struggling to support critical healthcare applications and growing data storage needs.',
    solution: 'Migrated core systems to Azure with hybrid connectivity, implemented Microsoft 365 for staff collaboration, and deployed advanced security controls.',
    results: [
      '40% reduction in IT infrastructure costs',
      'Zero downtime during migration',
      'HIPAA compliance maintained',
      'Enabled telemedicine capabilities',
    ],
    featured: true,
  },
  {
    id: 'northern-logistics-voip',
    title: 'Unified Communications Deployment',
    client: 'Northern Logistics Ltd',
    industry: 'Logistics',
    services: ['Telecom Solutions', 'Network Infrastructure'],
    description: 'VoIP and unified communications platform for a logistics company with operations across West Africa.',
    challenge: 'High telephony costs and disconnected communication systems across 8 locations in 3 countries.',
    solution: 'Deployed a cloud-based unified communications platform with VoIP, video conferencing, and mobile integration.',
    results: [
      '50% reduction in communication costs',
      'Unified platform across all locations',
      'Mobile app for field staff',
      'Improved customer response times',
    ],
    featured: true,
  },
  {
    id: 'retail-chain-security',
    title: 'Retail Security & Surveillance',
    client: 'MegaMart Nigeria',
    industry: 'Retail',
    services: ['CCTV & Access Control', 'Network Infrastructure'],
    description: 'Comprehensive CCTV and access control system for a retail chain with 25 stores.',
    challenge: 'Increasing theft and no centralized visibility into store security across multiple locations.',
    solution: 'Installed IP-based CCTV with AI analytics, biometric access control, and a centralized monitoring platform.',
    results: [
      '35% reduction in shrinkage',
      'Real-time monitoring of all stores',
      'Automated alerts for suspicious activity',
      'Improved incident response time',
    ],
    featured: false,
  },
  {
    id: 'tech-startup-infrastructure',
    title: 'Startup IT Infrastructure',
    client: 'TechVenture Labs',
    industry: 'Technology',
    services: ['Cloud & Microsoft 365', 'Managed IT', 'Software Development'],
    description: 'Complete IT setup for a fast-growing tech startup, from infrastructure to custom development.',
    challenge: 'New startup needed to quickly establish reliable IT infrastructure to support rapid growth.',
    solution: 'Cloud-first infrastructure with Microsoft 365, secure development environments, and scalable architecture.',
    results: [
      'Infrastructure deployed in 2 weeks',
      'Scaled from 10 to 100 employees',
      '99.9% uptime maintained',
      'Cost-effective cloud spending',
    ],
    featured: false,
  },
  {
    id: 'govt-agency-digital',
    title: 'Government Digital Transformation',
    client: 'State Ministry of Finance',
    industry: 'Government',
    services: ['Software Development', 'IT Consulting', 'Network Infrastructure'],
    description: 'Digital transformation initiative for a state government ministry, modernizing citizen services.',
    challenge: 'Paper-based processes causing delays in service delivery and limited transparency.',
    solution: 'Custom web portal for citizen services, secure network infrastructure, and staff training.',
    results: [
      '70% reduction in processing time',
      'Online services for citizens',
      'Improved transparency and tracking',
      'Staff productivity increased by 40%',
    ],
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-400 mb-3">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects & Case Studies
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Explore how we've helped businesses across industries transform their
            technology infrastructure and achieve their goals.
          </p>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section background="white">
        <SectionHeader
          subtitle="Featured Projects"
          title="Success Stories"
          description="Detailed case studies showcasing our impact on client businesses."
        />

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden" padding="none">
              <div className="grid lg:grid-cols-2">
                {/* Image Placeholder */}
                <div className={`bg-gradient-to-br from-primary-100 to-accent-100 p-8 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-center">
                    <Building2 className="w-24 h-24 text-primary-300 mx-auto mb-4" />
                    <p className="text-primary-600 font-medium">{project.client}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="primary">{project.industry}</Badge>
                    {project.services.slice(0, 2).map((service) => (
                      <Badge key={service}>{service}</Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                      <p className="text-gray-600 text-sm">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                      <p className="text-gray-600 text-sm">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Other Projects Grid */}
      <Section background="gray">
        <SectionHeader
          subtitle="More Projects"
          title="Additional Case Studies"
          description="More examples of successful project deliveries across various industries."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.id}>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary">{project.industry}</Badge>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{project.client}</p>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results</h4>
                <ul className="space-y-1">
                  {project.results.slice(0, 2).map((result) => (
                    <li key={result} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="white" padding="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '200+', label: 'Happy Clients' },
            { value: '15+', label: 'Industries Served' },
            { value: '99.9%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary-600">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
