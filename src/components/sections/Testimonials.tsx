'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const testimonials = [
  {
    quote: "Dadotech transformed our entire IT infrastructure. Their team was professional, knowledgeable, and delivered on time. Our systems have never been more reliable.",
    author: "Adebayo Ogundimu",
    role: "CTO",
    company: "FinServe Nigeria",
  },
  {
    quote: "The 24/7 support from Dadotech has been invaluable. Any issues are resolved quickly, and their proactive monitoring has prevented several potential outages.",
    author: "Chioma Eze",
    role: "IT Director",
    company: "Lagos Medical Center",
  },
  {
    quote: "We needed a partner who understood both telecom and IT. Dadotech delivered a unified solution that improved our communications and reduced costs by 30%.",
    author: "Ibrahim Musa",
    role: "Operations Manager",
    company: "Northern Logistics Ltd",
  },
];

export function TestimonialsSection() {
  return (
    <Section background="white">
      <SectionHeader
        subtitle="Testimonials"
        title="What Our Clients Say"
        description="Don't just take our word for it. Here's what our clients have to say about working with Dadotech."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="h-full relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
