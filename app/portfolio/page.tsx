import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Projects } from '@/components/Projects';

export const metadata = {
  title: 'Portfolio - Laxman Pawar',
  description: 'View my latest projects and work',
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcase of successful projects that helped businesses achieve their goals
            </p>
          </div>
        </div>
      </section>

      <Projects showViewAll={false} />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate to build something amazing. Contact me to discuss your ideas and requirements.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/50"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
