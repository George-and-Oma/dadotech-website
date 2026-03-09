import {
  Hero,
  ServicesGrid,
  AboutSection,
  IndustriesSection,
  WhyChooseUs,
  PartnersSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <WhyChooseUs />
      <IndustriesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
