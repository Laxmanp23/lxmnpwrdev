import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Laxman Pawar',
  description: 'Privacy Policy for Laxman Pawar portfolio website.',
};

export default function PrivacyPolicy() {
  const lastUpdated = "April 24, 2026";

  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-cyan-400">Policy</span>
            </h1>
            <p className="text-gray-400">Last Updated: {lastUpdated}</p>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to Laxman Pawar's portfolio website. I am committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or my practices with regards to your personal information, please contact me.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information I Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Personal Information provided by you:</strong> I collect names, email addresses, and the contents of messages you send through the contact form.</li>
                <li><strong className="text-white">Automatically Collected Information:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit the website via standard analytics tools.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How I Use Your Information</h2>
              <p>I use the information collected or received:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>To respond to your inquiries and offer support.</li>
                <li>To improve and maintain the website.</li>
                <li>For analytics and understanding how visitors interact with the site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
              <p>
                I only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. I do not sell or rent your personal information to any third parties.
              </p>
            </section>

            <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl mt-12">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Me</h2>
              <p className="mb-2">
                If you have questions or comments about this notice, you may email me at:
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