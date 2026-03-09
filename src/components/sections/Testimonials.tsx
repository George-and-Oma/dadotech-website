'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Dadotech transformed our entire IT infrastructure. Their team was professional, knowledgeable, and delivered on time. Our systems have never been more reliable.",
    author: "Adebayo Ogundimu",
    role: "CTO",
    company: "FinServe Nigeria",
    initials: "AO",
  },
  {
    quote: "The 24/7 support from Dadotech has been invaluable. Any issues are resolved quickly, and their proactive monitoring has prevented several potential outages.",
    author: "Chioma Eze",
    role: "IT Director",
    company: "Lagos Medical Center",
    initials: "CE",
  },
  {
    quote: "We needed a partner who understood both telecom and IT. Dadotech delivered a unified solution that improved our communications and reduced costs by 30%.",
    author: "Ibrahim Musa",
    role: "Operations Manager",
    company: "Northern Logistics Ltd",
    initials: "IM",
  },
];

// Double the testimonials for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#111113] overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center mb-4"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            Don't just take our word for it.
          </motion.p>
        </div>
      </div>

      {/* Scrolling Track */}
      <div className="flex gap-8 animate-scroll-marquee hover:[animation-play-state:paused]">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.author}-${index}`}
            className="flex-shrink-0 w-[400px] p-10 bg-[#1a1a1d] border border-zinc-800 rounded-[20px] relative"
          >
            {/* Quote mark */}
            <div className="absolute top-6 right-8 font-display text-7xl font-extrabold text-amber-500/15 leading-none">
              "
            </div>

            {/* Quote text */}
            <p className="text-zinc-400 leading-relaxed mb-8 relative z-10">
              {testimonial.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-teal-500 flex items-center justify-center font-display font-bold text-lg text-zinc-900">
                {testimonial.initials}
              </div>
              <div>
                <h5 className="font-semibold text-white">{testimonial.author}</h5>
                <p className="text-sm text-zinc-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
