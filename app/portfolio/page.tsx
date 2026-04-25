import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Projects } from '@/components/Projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Portfolio - Laxman Pawar',
  description: 'Explore my creative portfolio, featuring full-stack web applications, scalable backend systems, and modern frontend designs.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Header />

      {/* Hero Section for Portfolio */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-12">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 rounded-full">
            <span className="text-cyan-700 dark:text-cyan-300 text-sm font-semibold">
              🚀 Featured Work
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Creative</span> Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Explore a curated collection of my recent projects. From responsive front-end designs to robust full-stack applications and scalable backend systems, see how I bring ideas to life.
          </p>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 border-y border-gray-200 dark:border-gray-800 py-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50+</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">100%</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">5+</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1M+</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lines of Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects Grid */}
      <div className="pb-12 relative z-10">
        <Projects showViewAll={false} />
      </div>

      {/* Call to Action Section */}
      <section className="py-20 relative z-10 bg-cyan-50 dark:bg-cyan-900/10 border-t border-cyan-100 dark:border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new opportunities. Let's build something amazing together!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30 group"
          >
            Let's Talk
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}