import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Services } from '@/components/Services';

export const metadata = {
  title: 'Services - Laxman Pawar',
  description: 'Explore the services I offer for your business',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Services & <span className="text-cyan-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive development services tailored to meet your specific business needs
            </p>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Me?</h2>
              <div className="space-y-4">
                {[
                  { title: 'Expertise', desc: 'Years of experience with modern tech stack' },
                  { title: 'Quality', desc: 'Clean, maintainable, and scalable code' },
                  { title: 'Performance', desc: 'Optimized applications that load fast' },
                  { title: 'Support', desc: 'Dedicated support and maintenance' },
                  { title: 'Reliability', desc: 'On-time delivery and consistent quality' },
                  { title: 'Communication', desc: 'Regular updates and transparent process' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl text-cyan-400">✓</div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black border-2 border-cyan-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Service Packages</h2>
              <div className="space-y-6">
                {[
                  {
                    name: 'Starter',
                    price: 'Custom',
                    features: ['Landing pages', 'Basic websites', 'Single-page apps'],
                  },
                  {
                    name: 'Professional',
                    price: 'Custom',
                    features: ['Full-stack apps', 'API development', 'Database design'],
                  },
                  {
                    name: 'Enterprise',
                    price: 'Custom',
                    features: ['Large-scale systems', 'DevOps setup', 'Ongoing support'],
                  },
                ].map((pkg, i) => (
                  <div key={i} className="pb-4 border-b border-cyan-500/20 last:border-b-0">
                    <h3 className="text-lg font-semibold text-cyan-300">{pkg.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">{pkg.price}</p>
                    <ul className="mt-3 space-y-1">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="text-sm text-gray-400">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-6">
                Each project is custom-quoted based on requirements. Contact me for a detailed proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
