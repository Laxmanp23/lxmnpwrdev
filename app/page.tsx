import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { ContactForm } from '@/components/ContactForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Laxman Pawar - Full-Stack Developer',
  description: 'Building scalable web and software solutions',
};
const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Founder, Mumbai Ventures',
    text: 'Laxman ne hamare e-commerce platform ko poori tarah badal diya. Launch ke baad hamari sales mein 30% ka izaafa hua hai.',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO, Delhi Tech Solutions',
    text: 'Inka API development kaam kamaal ka hai. Fast, secure aur scalable. Agar aap quality dhoond rahe hain, toh Laxman best hain!',
  },
  {
    name: 'Anjali Iyer',
    role: 'Product Manager, Bangalore Fintech',
    text: 'Professional aur reliable. Laxman ne deadline se pehle project deliver kiya. Inke saath kaam karna bahut smooth raha.',
  },
  {
    name: 'Vikram Singh',
    role: 'Operations Head, Jaipur Logistics',
    text: 'Problem-solving skills lajawab hain. Hamari database queries ko itna optimize kiya ki app ab 10x faster chalti hai.',
  },
  {
    name: 'Rohan Gupta',
    role: 'CEO, Noida EdTech',
    text: 'Top tier development! UI/UX bilkul seamless hai, aur dark mode ka implementation toh zabardast lag raha hai.',
  },
];
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <Hero />
      <Services />
      <Projects showViewAll={true} />
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What <span className="text-cyan-400">Clients Say</span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
              width: max-content;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />

          <div className="flex animate-marquee">
            {/* First Set */}
            <div className="flex gap-8 px-4">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="w-[350px] md:w-[400px] flex-shrink-0 p-6 bg-gray-50 dark:bg-black border border-gray-200 dark:border-cyan-500/30 shadow-sm hover:shadow-md dark:shadow-none rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/70 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-cyan-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic leading-relaxed">{testimonial.text}</p>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Set (Duplicate for infinite seamless loop) */}
            <div className="flex gap-8 px-4" aria-hidden="true">
              {testimonials.map((testimonial, i) => (
              <div
                  key={i + '-dup'}
                  className="w-[350px] md:w-[400px] flex-shrink-0 p-6 bg-gray-50 dark:bg-black border border-gray-200 dark:border-cyan-500/30 shadow-sm hover:shadow-md dark:shadow-none rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/70 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-cyan-400">★</span>
                  ))}
                </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
