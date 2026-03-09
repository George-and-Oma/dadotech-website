'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const serviceOptions = [
  { value: '', label: 'Select a service' },
  ...SERVICES.map((s) => ({ value: s.id, label: s.title })),
  { value: 'other', label: 'Other' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-400 mb-3">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Discuss Your Project
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Ready to transform your business with technology? Get in touch with our team
            for a free consultation.
          </p>
        </div>
      </Section>

      {/* Contact Info + Form */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Have a question or ready to start a project? We'd love to hear from you.
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-600 hover:text-primary-600">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-600 hover:text-primary-600">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-600">Saturday: 9am - 2pm</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. Our team will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="First Name *"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                      <Input
                        label="Last Name *"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Email Address *"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="+234 800 000 0000"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Company Name"
                        name="company"
                        placeholder="Your Company Ltd"
                      />
                      <Select
                        label="Service of Interest"
                        name="service"
                        options={serviceOptions}
                      />
                    </div>

                    <Textarea
                      label="Message *"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    />

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive communications from Dadotech. I can unsubscribe at any time.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section background="gray" padding="sm">
        <div className="aspect-[3/1] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary-300 mx-auto mb-4" />
            <p className="text-primary-600 font-medium">Map will be displayed here</p>
            <p className="text-sm text-gray-500">Lagos, Nigeria</p>
          </div>
        </div>
      </Section>

      {/* Quick Support */}
      <Section background="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Urgent Support?
          </h2>
          <p className="text-gray-600 mb-8">
            For existing customers with urgent technical issues, our support team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Support
            </a>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Support
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
