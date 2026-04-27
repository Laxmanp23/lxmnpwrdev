import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

const cityData = {
  indore: {
    name: 'Indore',
    state: 'Madhya Pradesh',
    description: 'Professional web development services in Indore',
    keywords: ['web developer Indore', 'web development Indore', 'full-stack developer Indore', 'freelancer Indore'],
    content: 'Get professional web development services in Indore. We build custom websites, e-commerce platforms, and web applications for businesses in Indore and nearby areas.',
  },
  bhopal: {
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    description: 'Professional web development services in Bhopal',
    keywords: ['web developer Bhopal', 'web development Bhopal', 'full-stack developer Bhopal', 'freelancer Bhopal'],
    content: 'Get professional web development services in Bhopal. We build custom websites, e-commerce platforms, and web applications for businesses in Bhopal.',
  },
  pune: {
    name: 'Pune',
    state: 'Maharashtra',
    description: 'Professional web development services in Pune',
    keywords: ['web developer Pune', 'web development Pune', 'full-stack developer Pune', 'freelancer Pune'],
    content: 'Get professional web development services in Pune. We build scalable web applications, SaaS platforms, and e-commerce solutions for businesses in Pune.',
  },
  bangalore: {
    name: 'Bangalore',
    state: 'Karnataka',
    description: 'Professional web development services in Bangalore',
    keywords: ['web developer Bangalore', 'web development Bangalore', 'full-stack developer Bangalore', 'freelancer Bangalore'],
    content: 'Get professional web development services in Bangalore. Expert full-stack developers building innovative web solutions for tech startups and enterprises.',
  },
  chennai: {
    name: 'Chennai',
    state: 'Tamil Nadu',
    description: 'Professional web development services in Chennai',
    keywords: ['web developer Chennai', 'web development Chennai', 'full-stack developer Chennai', 'freelancer Chennai'],
    content: 'Get professional web development services in Chennai. We create custom web solutions, mobile-friendly websites, and scalable web applications.',
  },
  mumbai: {
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'Professional web development services in Mumbai',
    keywords: ['web developer Mumbai', 'web development Mumbai', 'full-stack developer Mumbai', 'freelancer Mumbai'],
    content: 'Get professional web development services in Mumbai. We build enterprise-grade web solutions and custom applications for businesses in Mumbai.',
  },
  delhi: {
    name: 'Delhi',
    state: 'Delhi',
    description: 'Professional web development services in Delhi',
    keywords: ['web developer Delhi', 'web development Delhi', 'full-stack developer Delhi', 'freelancer Delhi'],
    content: 'Get professional web development services in Delhi. Expert developers creating modern websites and web applications for businesses in Delhi and NCR.',
  },
};

type CityKey = keyof typeof cityData;

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const city = (await params).city as CityKey;
  const data = cityData[city];

  if (!data) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `Web Developer in ${data.name} | Full-Stack Development Services`,
    description: `Professional web development services in ${data.name}, ${data.state}. ${data.content}`,
    keywords: data.keywords,
    openGraph: {
      title: `Web Developer in ${data.name} | Full-Stack Development Services`,
      description: `Professional web development services in ${data.name}, ${data.state}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city,
  }));
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const city = (await params).city as CityKey;
  const data = cityData[city];

  if (!data) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">City Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Sorry, we don't have information for this city yet.</p>
          <Link href="/" className="text-cyan-500 hover:text-cyan-400">
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Web Development Services in <span className="text-cyan-500">{data.name}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Professional full-stack web development services in {data.name}, {data.state}. We build custom websites, e-commerce platforms, and scalable web applications for businesses.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Get a Free Consultation
          </Link>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Our Services in {data.name}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tailored web solutions built specifically for your business needs. From concept to deployment, we handle everything.
              </p>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">E-Commerce Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Complete e-commerce platforms with payment integration, inventory management, and analytics.
              </p>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">SaaS Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scalable Software-as-a-Service applications with multi-tenant architecture and advanced features.
              </p>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                RESTful and GraphQL APIs with secure authentication, rate limiting, and comprehensive documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind CSS', 'GraphQL', 'Prisma'].map((tech) => (
              <div key={tech} className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center">
                <p className="text-gray-900 dark:text-white font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Project in {data.name}?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Let's discuss your web development needs and create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Contact Us Now
          </Link>
        </section>

        {/* Other Cities */}
        <section className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Web Development in Other Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(cityData).map(([key, value]) =>
              key !== city ? (
                <Link
                  key={key}
                  href={`/cities/${key}`}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-cyan-500/20 transition text-center"
                >
                  <p className="text-gray-900 dark:text-white font-semibold">{value.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{value.state}</p>
                </Link>
              ) : null
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
