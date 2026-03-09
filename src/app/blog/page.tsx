import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Stay updated with the latest technology trends, best practices, and insights from the Dadotech team.',
};

const categories = [
  'All',
  'Cybersecurity',
  'Cloud Computing',
  'Networking',
  'Digital Transformation',
  'Industry News',
];

const posts = [
  {
    id: '1',
    slug: 'cybersecurity-trends-2024',
    title: 'Top Cybersecurity Trends to Watch in 2024',
    excerpt: 'Stay ahead of emerging threats with our comprehensive guide to the cybersecurity landscape. Learn about AI-powered threats, zero-trust architecture, and more.',
    author: 'Adebayo Ogundimu',
    date: '2024-01-15',
    category: 'Cybersecurity',
    readTime: 8,
    featured: true,
  },
  {
    id: '2',
    slug: 'cloud-migration-guide',
    title: 'The Complete Guide to Cloud Migration for Nigerian Businesses',
    excerpt: 'A step-by-step guide to planning and executing a successful cloud migration, including common pitfalls to avoid and best practices.',
    author: 'Chioma Eze',
    date: '2024-01-10',
    category: 'Cloud Computing',
    readTime: 12,
    featured: true,
  },
  {
    id: '3',
    slug: 'microsoft-365-productivity',
    title: 'Maximizing Productivity with Microsoft 365: Tips and Tricks',
    excerpt: 'Unlock the full potential of Microsoft 365 with these productivity tips for Teams, SharePoint, and the entire Office suite.',
    author: 'Ibrahim Musa',
    date: '2024-01-05',
    category: 'Cloud Computing',
    readTime: 6,
    featured: false,
  },
  {
    id: '4',
    slug: 'network-security-best-practices',
    title: 'Network Security Best Practices for Enterprise Organizations',
    excerpt: 'Essential network security measures every enterprise should implement to protect against modern cyber threats.',
    author: 'Adebayo Ogundimu',
    date: '2023-12-28',
    category: 'Networking',
    readTime: 10,
    featured: false,
  },
  {
    id: '5',
    slug: 'digital-transformation-smes',
    title: 'Digital Transformation for SMEs: Where to Start',
    excerpt: 'A practical guide for small and medium businesses looking to begin their digital transformation journey.',
    author: 'Chioma Eze',
    date: '2023-12-20',
    category: 'Digital Transformation',
    readTime: 7,
    featured: false,
  },
  {
    id: '6',
    slug: 'voip-vs-traditional',
    title: 'VoIP vs Traditional Phone Systems: A Cost Comparison',
    excerpt: 'Detailed cost analysis comparing VoIP solutions with traditional phone systems for businesses of all sizes.',
    author: 'Ibrahim Musa',
    date: '2023-12-15',
    category: 'Industry News',
    readTime: 5,
    featured: false,
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const featuredPosts = posts.filter((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent-400 mb-3">
            Blog & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Insights & Best Practices
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Stay updated with the latest trends, tips, and insights from our team of
            technology experts.
          </p>
        </div>
      </Section>

      {/* Categories */}
      <Section background="white" padding="sm">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Featured Posts */}
      <Section background="gray">
        <SectionHeader
          subtitle="Featured"
          title="Latest Insights"
          description="Our most recent articles on technology trends and best practices."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full" padding="none">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-t-2xl flex items-center justify-center">
                  <span className="text-primary-300 text-6xl font-bold opacity-30">
                    {post.title.charAt(0)}
                  </span>
                </div>

                <div className="p-6">
                  <Badge variant="primary" className="mb-3">{post.category}</Badge>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* All Posts */}
      <Section background="white">
        <SectionHeader
          subtitle="All Articles"
          title="More Insights"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full">
                <Badge className="mb-3">{post.category}</Badge>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min
                  </span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" icon>
            Load More Articles
          </Button>
        </div>
      </Section>

      {/* Newsletter */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest technology insights, tips, and updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
