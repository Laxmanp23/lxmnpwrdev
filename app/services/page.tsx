import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Services } from '@/components/Services';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Services & Solutions - Laxman Pawar',
  description: 'Explore my professional web development services and software solutions tailored for your business needs.',
};

export default function ServicesPage() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      desc: 'We start by understanding your goals, target audience, and project requirements. I create a comprehensive roadmap and architecture plan.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      desc: 'Crafting intuitive user interfaces and experiences. You get to review wireframes and interactive prototypes before development begins.',
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Writing clean, scalable, and secure code. I use modern tech stacks to build robust frontends and scalable backend infrastructures.',
    },
    {
      step: '04',
      title: 'Testing & QA',
      desc: 'Rigorous testing across devices and browsers to ensure a bug-free, highly performant, and secure application.',
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      desc: 'Setting up CI/CD pipelines and deploying your application to production servers (AWS, Vercel, etc.) with zero downtime.',
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      desc: 'Post-launch monitoring, performance optimization, and regular updates to keep your software running smoothly.',
    },
  ];

  const benefits = [
    { title: 'Clean & Modern Code', desc: 'Maintainable, well-documented codebase following industry best practices.' },
    { title: 'Performance Optimized', desc: 'Lightning-fast load times and optimized queries for the best user experience.' },
    { title: 'Scalable Architecture', desc: 'Systems designed to grow with your business, handling traffic spikes seamlessly.' },
    { title: 'Secure by Default', desc: 'Implementing robust security measures to protect your data and users from day one.' },
    { title: 'Responsive Design', desc: 'Flawless digital experiences across all devices, from mobiles to ultrawide screens.' },
    { title: 'SEO Friendly', desc: 'Built-in technical SEO optimizations to help you rank better on search engines.' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-12">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 rounded-full">
            <span className="text-cyan-700 dark:text-cyan-300 text-sm font-semibold">
              ⚙️ What I Do
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Services</span> & Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            I provide end-to-end software development services, from conceptualization and design to deployment and scaling. Let's transform your ideas into robust digital products.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <div className="relative z-10 -mt-8 pb-12 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <Services showHeader={false} />
      </div>

      {/* Why Choose My Solutions? */}
      <section className="py-24 bg-gray-50 dark:bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose My <span className="text-cyan-500">Solutions?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Delivering high-quality, scalable, and maintainable software tailored to your specific business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-cyan-500/20 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white dark:bg-gray-900 relative z-10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Development <span className="text-cyan-500">Process</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A systematic and transparent approach to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, i) => (
              <div key={i} className="relative p-8 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/40 border-2 border-cyan-500 rounded-full flex items-center justify-center font-bold text-cyan-600 dark:text-cyan-400 z-10">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-2">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {process.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-500 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10 bg-cyan-50 dark:bg-cyan-900/10 border-t border-cyan-100 dark:border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to start your next project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you need a full-stack application from scratch, or an experienced developer to join your team, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30 group"
            >
              Get a Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}