import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections';
import { CheckCircle, Target, Eye, Heart, Award, Users, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Dadotech Limited - your trusted technology partner in Nigeria. 15+ years of experience delivering IT infrastructure, telecom, and digital solutions.',
};

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with transparency and honesty in all our client relationships.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients, treating their challenges as our own.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Our clients can count on us for consistent, dependable service delivery.',
  },
];

const timeline = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Dadotech was established in Lagos, Nigeria with a focus on network infrastructure.',
  },
  {
    year: '2013',
    title: 'Expanded Services',
    description: 'Added telecom solutions and managed IT services to our portfolio.',
  },
  {
    year: '2016',
    title: 'Microsoft Partnership',
    description: 'Became a certified Microsoft Partner, expanding cloud capabilities.',
  },
  {
    year: '2019',
    title: 'Cybersecurity Division',
    description: 'Launched dedicated cybersecurity services to meet growing demand.',
  },
  {
    year: '2022',
    title: 'Regional Expansion',
    description: 'Extended operations to serve clients across West Africa.',
  },
  {
    year: 'Today',
    title: 'Industry Leader',
    description: 'Serving 200+ clients with comprehensive technology solutions.',
  },
];

const certifications = [
  'Microsoft Certified Partner',
  'Cisco Certified Partner',
  'ISO 27001 Compliant',
  'NITDA Licensed',
  'VMware Partner',
  'Fortinet Partner',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-400 mb-3">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Trusted Technology Partner Since 2010
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            For over 15 years, Dadotech has been helping businesses across Nigeria and West Africa
            transform their operations through innovative technology solutions.
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-primary-50 border-primary-100">
            <div className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To empower businesses with reliable, innovative technology solutions that drive growth,
              enhance efficiency, and secure their digital assets. We are committed to being the
              trusted technology partner that organizations can rely on.
            </p>
          </Card>

          <Card className="bg-accent-50 border-accent-100">
            <div className="w-14 h-14 rounded-xl bg-accent-500 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              To be the leading provider of integrated technology solutions in Africa, recognized
              for our technical excellence, innovative approach, and unwavering commitment to
              client success.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Story */}
      <Section background="gray">
        <SectionHeader
          subtitle="Our Journey"
          title="The Dadotech Story"
          description="From a small network services company to a comprehensive technology solutions provider."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <Card>
                    <span className="text-accent-500 font-bold">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </Card>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 border-4 border-white" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="white">
        <SectionHeader
          subtitle="Our Values"
          title="What Drives Us"
          description="Our core values guide everything we do and shape how we serve our clients."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="gray">
        <SectionHeader
          subtitle="Certifications"
          title="Industry Recognized"
          description="Our certifications demonstrate our commitment to excellence and industry standards."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-primary-600" />
              </div>
              <span className="font-medium text-gray-900">{cert}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Team CTA */}
      <Section background="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 mb-8">
            Our team of certified professionals brings decades of combined experience
            across networking, cloud computing, cybersecurity, and software development.
          </p>
          <Button href="/contact" icon>
            Get in Touch
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
