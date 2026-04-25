import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - Laxman Pawar',
  description: 'Terms of Service for Laxman Pawar portfolio website.',
};

export default function TermsOfService() {
  const lastUpdated = "April 24, 2026";

  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of <span className="text-cyan-400">Service</span>
            </h1>
            <p className="text-gray-400">Last Updated: {lastUpdated}</p>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property</h2>
              <p>
                The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited without my express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Services</h2>
              <p>
                The website details the web development and software engineering services I offer. The exact terms of any freelance work, consulting, or project will be agreed upon separately in a formal contract or agreement before the commencement of any work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Disclaimer of Warranties</h2>
              <p>
                The information from or through the site is provided "as-is," "as available," and all warranties, express or implied, are disclaimed. I assume no liability for any errors or omissions in the content on this website.
              </p>
            </section>

            <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl mt-12">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Me</h2>
              <p className="mb-2">
                If you have any questions about these Terms, please contact me at:
              </p>
              <a href="mailto:contact@laxmanpawar.dev" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                contact@laxmanpawar.dev
              </a>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}