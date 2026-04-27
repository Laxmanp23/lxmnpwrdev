/**
 * SEO Utilities for generating schema markup and metadata
 */

export interface SchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
}

/**
 * Generate JSON-LD schema for a blog post
 */
export const generateBlogPostSchema = ({
  name,
  description,
  url,
  image,
  author = 'Laxman Pawar',
  datePublished,
  dateModified,
}: SchemaProps) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: name,
    description,
    image,
    url,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified: dateModified || datePublished,
  };
};

/**
 * Generate JSON-LD schema for a service
 */
export const generateServiceSchema = ({
  name,
  description,
  url,
  image,
}: SchemaProps) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    image,
    provider: {
      '@type': 'Organization',
      name: 'Laxman Pawar',
      url: 'https://laxmanpawar.dev',
    },
    areaServed: [
      'Indore',
      'Bhopal',
      'Pune',
      'Bangalore',
      'Chennai',
      'Mumbai',
      'Delhi',
    ],
  };
};

/**
 * Generate JSON-LD schema for a project/portfolio item
 */
export const generateProjectSchema = ({
  name,
  description,
  url,
  image,
  datePublished,
}: SchemaProps) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    url,
    image,
    author: {
      '@type': 'Person',
      name: 'Laxman Pawar',
    },
    dateCreated: datePublished,
  };
};

/**
 * Generate breadcrumb schema markup
 */
export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Generate FAQ schema markup
 */
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

/**
 * SEO-friendly URL parameters for tracking
 */
export const seoTrustSignals = {
  yearsExperience: 5,
  projectsCompleted: 50,
  clientSatisfactionRate: 100,
  linesOfCodeWritten: '1M+',
  citiesCovered: ['Indore', 'Bhopal', 'Pune', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi'],
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Docker',
    'AWS',
  ],
};

/**
 * Location-based keywords for each city
 */
export const cityKeywords: Record<string, string[]> = {
  indore: [
    'web developer indore',
    'web development indore',
    'full-stack developer indore',
    'freelance web developer indore',
    'custom website indore',
    'e-commerce solution indore',
  ],
  bhopal: [
    'web developer bhopal',
    'web development bhopal',
    'full-stack developer bhopal',
    'freelance web developer bhopal',
    'custom website bhopal',
    'e-commerce solution bhopal',
  ],
  pune: [
    'web developer pune',
    'web development pune',
    'full-stack developer pune',
    'freelance web developer pune',
    'custom website pune',
    'e-commerce solution pune',
  ],
  bangalore: [
    'web developer bangalore',
    'web development bangalore',
    'full-stack developer bangalore',
    'freelance web developer bangalore',
    'custom website bangalore',
    'e-commerce solution bangalore',
  ],
  chennai: [
    'web developer chennai',
    'web development chennai',
    'full-stack developer chennai',
    'freelance web developer chennai',
    'custom website chennai',
    'e-commerce solution chennai',
  ],
  mumbai: [
    'web developer mumbai',
    'web development mumbai',
    'full-stack developer mumbai',
    'freelance web developer mumbai',
    'custom website mumbai',
    'e-commerce solution mumbai',
  ],
  delhi: [
    'web developer delhi',
    'web development delhi',
    'full-stack developer delhi',
    'freelance web developer delhi',
    'custom website delhi',
    'e-commerce solution delhi',
  ],
};

/**
 * Service-based keywords for better ranking
 */
export const serviceKeywords: Record<string, string[]> = {
  webDevelopment: [
    'custom web development',
    'web development company',
    'professional web development',
    'web development services',
    'responsive web design',
  ],
  ecommerce: [
    'e-commerce development',
    'online store development',
    'shopping cart development',
    'payment gateway integration',
    'e-commerce platform',
  ],
  saas: [
    'SaaS development',
    'Software as a Service',
    'cloud application development',
    'web application development',
    'scalable web apps',
  ],
  api: [
    'REST API development',
    'GraphQL API development',
    'API integration',
    'backend API development',
    'scalable API',
  ],
};
