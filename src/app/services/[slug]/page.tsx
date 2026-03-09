import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CTASection } from '@/components/sections';
import { servicesData } from '@/data/services';
import { SERVICES } from '@/lib/constants';
import { CheckCircle, ArrowRight, ArrowLeft, Network, Phone, Settings, Cloud, Shield, Camera, Code, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const colorMap: Record<string, { bg: string; text: string; gradient: string }> = {
  blue: { bg: 'bg-blue-500', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-800' },
  cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600', gradient: 'from-cyan-600 to-cyan-800' },
  indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', gradient: 'from-indigo-600 to-indigo-800' },
  sky: { bg: 'bg-sky-500', text: 'text-sky-600', gradient: 'from-sky-600 to-sky-800' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', gradient: 'from-emerald-600 to-emerald-800' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600', gradient: 'from-violet-600 to-violet-800' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-600', gradient: 'from-rose-600 to-rose-800' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', gradient: 'from-amber-600 to-amber-800' },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];
  const colors = colorMap[service.color];

  // Get other services for the sidebar
  const otherServices = SERVICES.filter((s) => s.id !== slug);

  return (
    <>
      {/* Hero */}
      <section className={cn('relative overflow-hidden bg-gradient-to-br', colors.gradient, 'py-20 md:py-28')}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Container className="relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="flex items-start gap-6">
            <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0', 'bg-white/20')}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="inline-block text-white/80 text-sm font-medium mb-2">
                {service.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                {service.description}
              </p>
              <div className="mt-8">
                <Button
                  href="/contact"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  icon
                >
                  {service.cta}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {service.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Problems We Solve */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges We Address</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.problems.map((problem) => (
                  <div key={problem} className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">!</span>
                    </div>
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.features.map((feature) => (
                  <Card key={feature.title}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={step.step} className="flex gap-4">
                    <div className={cn('w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white', colors.bg)}>
                      {step.step}
                    </div>
                    <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className={cn('w-5 h-5 flex-shrink-0', colors.text)} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <Card className={cn('bg-gradient-to-br text-white', colors.gradient)}>
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Let's discuss how we can help with your {service.title.toLowerCase()} needs.
                </p>
                <Button
                  href="/contact"
                  className="w-full bg-white text-gray-900 hover:bg-gray-100"
                  icon
                >
                  {service.cta}
                </Button>
              </Card>

              {/* Other Services */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
                <div className="space-y-3">
                  {otherServices.slice(0, 5).map((s) => {
                    const SIcon = iconMap[s.icon];
                    return (
                      <Link
                        key={s.id}
                        href={`/services/${s.id}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', colorMap[s.color].bg)}>
                          <SIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">{s.title}</span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 mt-4 text-primary-600 font-medium hover:gap-2 transition-all"
                >
                  View all services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
