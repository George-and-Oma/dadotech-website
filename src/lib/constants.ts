export const SITE_CONFIG = {
  name: 'Dadotech Limited',
  tagline: 'Technology Solutions for Modern Business',
  description: 'Professional IT, telecom, infrastructure, and business technology solutions. We deliver innovative technology that drives growth and efficiency.',
  url: 'https://dadotechlimited.com',
  email: 'info@dadotechlimited.com',
  phone: '+234 800 DADOTECH',
  address: 'Lagos, Nigeria',
  social: {
    linkedin: 'https://linkedin.com/company/dadotech',
    twitter: 'https://twitter.com/dadotech',
    facebook: 'https://facebook.com/dadotech',
  },
};

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Network Infrastructure', href: '/services/network-infrastructure' },
      { name: 'Telecom Solutions', href: '/services/telecom-solutions' },
      { name: 'Managed IT Services', href: '/services/managed-it-services' },
      { name: 'Cloud & Microsoft 365', href: '/services/cloud-microsoft-365' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'CCTV & Access Control', href: '/services/cctv-access-control' },
      { name: 'Software Development', href: '/services/software-development' },
      { name: 'IT Consulting', href: '/services/it-consulting' },
    ],
  },
  { name: 'Industries', href: '/industries' },
  { name: 'Projects', href: '/projects' },
  { name: 'Partners', href: '/partners' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    shortDesc: 'Enterprise-grade network design, implementation, and optimization for seamless connectivity.',
    icon: 'Network',
    color: 'blue',
  },
  {
    id: 'telecom-solutions',
    title: 'Telecom Solutions',
    shortDesc: 'Unified communications, VoIP, and telecom infrastructure for modern business.',
    icon: 'Phone',
    color: 'cyan',
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services',
    shortDesc: '24/7 IT support, monitoring, and management to keep your business running.',
    icon: 'Settings',
    color: 'indigo',
  },
  {
    id: 'cloud-microsoft-365',
    title: 'Cloud & Microsoft 365',
    shortDesc: 'Cloud migration, Microsoft 365 deployment, and hybrid cloud solutions.',
    icon: 'Cloud',
    color: 'sky',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortDesc: 'Comprehensive security solutions to protect your business from threats.',
    icon: 'Shield',
    color: 'emerald',
  },
  {
    id: 'cctv-access-control',
    title: 'CCTV & Access Control',
    shortDesc: 'Surveillance systems and access control for physical security.',
    icon: 'Camera',
    color: 'violet',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    shortDesc: 'Custom software, web applications, and mobile apps tailored to your needs.',
    icon: 'Code',
    color: 'rose',
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    shortDesc: 'Strategic IT planning and advisory services for digital transformation.',
    icon: 'Lightbulb',
    color: 'amber',
  },
];

export const INDUSTRIES = [
  {
    id: 'corporate',
    name: 'Corporate Offices',
    description: 'Enterprise IT infrastructure for large organizations',
    icon: 'Building2',
  },
  {
    id: 'sme',
    name: 'SMEs',
    description: 'Scalable solutions for growing businesses',
    icon: 'Briefcase',
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Secure systems for public sector organizations',
    icon: 'Landmark',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Technology for schools and universities',
    icon: 'GraduationCap',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-compliant solutions for medical facilities',
    icon: 'Heart',
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'POS systems and retail technology',
    icon: 'ShoppingCart',
  },
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Secure infrastructure for banks and fintech',
    icon: 'Wallet',
  },
  {
    id: 'industrial',
    name: 'Industrial & Logistics',
    description: 'IoT and automation for manufacturing',
    icon: 'Factory',
  },
];

export const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Happy Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
];

export const PARTNERS = [
  'Microsoft',
  'Cisco',
  'Dell',
  'HP',
  'Fortinet',
  'VMware',
  'AWS',
  'Google Cloud',
];
