import {
  Hero,
  StatsSection,
  ServicesGrid,
  WhyChooseUs,
  IndustriesSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesGrid />
      <WhyChooseUs />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
