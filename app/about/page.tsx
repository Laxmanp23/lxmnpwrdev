import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'About - Laxman Pawar',
  description: 'Learn more about Laxman Pawar and his development journey',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      
      <section className="pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern web applications, scalable APIs, and innovative software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                With over 5 years of experience in web development, I've worked with startups and enterprises to deliver high-quality digital solutions. My passion for clean code and user-centric design drives me to create exceptional products.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                From concept to deployment, I handle the entire development lifecycle, ensuring optimal performance, security, and scalability at every step.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
              <ul className="space-y-3">
                {[
                  'Build responsive, modern web applications',
                  'Design and develop scalable backend APIs',
                  'Implement database optimization strategies',
                  'Deploy and maintain production systems',
                  'Mentor junior developers',
                  'Consult on technical architecture',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-500 dark:text-cyan-400 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-cyan-500/30 shadow-sm dark:shadow-none rounded-xl p-8 mb-16 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-sm rounded-full transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MySQL'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-pink-100 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/30 text-pink-800 dark:text-pink-300 text-sm rounded-full transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-4">DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'AWS', 'Vercel', 'Linux', 'Git'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-sm rounded-full transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Senior Full-Stack Developer',
                  company: 'Tech Innovations Inc.',
                  period: '2022 - Present',
                  description: 'Leading development of enterprise-scale applications with focus on performance and scalability.',
                },
                {
                  title: 'Full-Stack Developer',
                  company: 'StartUp Labs',
                  period: '2020 - 2022',
                  description: 'Developed multiple web and mobile app backends, managed databases, and deployed solutions.',
                },
                {
                  title: 'Junior Developer',
                  company: 'Web Solutions Co.',
                  period: '2019 - 2020',
                  description: 'Started my career building responsive websites and learning modern web development practices.',
                },
              ].map((job, i) => (
                <div key={i} className="pb-6 border-b border-gray-200 dark:border-cyan-500/20 last:border-b-0 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-2">{job.company} • {job.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
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
