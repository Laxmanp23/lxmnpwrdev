import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Web Development Consultation',
  description: 'Contact Laxman Pawar for your web development project. Available for consultation across Indore, Bhopal, Pune, Bangalore, Chennai, Mumbai, and Delhi.',
  keywords: [
    'contact web developer',
    'get in touch',
    'web development consultation',
    'hire web developer',
    'contact form',
  ],
  openGraph: {
    title: 'Contact Us | Get a Free Consultation',
    description: 'Contact Laxman Pawar for your web development project',
    type: 'website',
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-cyan-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? Let's connect!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                      <Mail size={20} className="text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400 mt-1">contact@laxmanpawar.dev</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                      <Phone size={20} className="text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400 mt-1">+91 7000864390</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                      <MapPin size={20} className="text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-400 mt-1">Available for Remote Work</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 p-6 bg-black border-2 border-cyan-500/30 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
                <p className="text-gray-400 text-sm">
                  I typically respond to inquiries within 24 hours. For urgent matters, feel free to reach out via phone.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-black border-2 border-cyan-500/30 rounded-xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
