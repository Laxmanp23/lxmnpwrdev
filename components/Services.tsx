'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Layers } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  services?: Service[];
  showHeader?: boolean;
}

const defaultServices = [
  {
    id: '1',
    title: 'Website Development',
    description: 'Modern, responsive websites with excellent performance and SEO optimization for your online presence.',
    icon: '🌐',
  },
  {
    id: '2',
    title: 'Web Application Development',
    description: 'Interactive web applications with rich user interfaces and real-time functionality.',
    icon: '⚡',
  },
  {
    id: '3',
    title: 'Backend APIs',
    description: 'Scalable REST and GraphQL APIs with secure authentication and database optimization.',
    icon: '🔗',
  },
  {
    id: '4',
    title: 'Full-stack Solutions',
    description: 'Complete end-to-end development from frontend UI to backend infrastructure.',
    icon: '🏗️',
  },
  {
    id: '5',
    title: 'Database Design',
    description: 'Efficient database architecture and optimization for performance and scalability.',
    icon: '💾',
  },
  {
    id: '6',
    title: 'Deployment & DevOps',
    description: 'Cloud deployment, CI/CD pipelines, and infrastructure setup for production-ready applications.',
    icon: '🚀',
  },
];

export function Services({ services = defaultServices, showHeader = true }: ServicesProps) {
  return (
    <section className={`bg-white dark:bg-gray-900 relative transition-colors duration-300 ${showHeader ? 'py-24' : 'py-12'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to bring your digital vision to life
            </p>
          </motion.div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-gray-50 dark:bg-black border border-gray-200 dark:border-cyan-500/30 shadow-sm hover:shadow-md dark:shadow-none rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/70 transition-all duration-300 overflow-hidden">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="text-5xl mb-4 relative z-10">{service.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Neon line on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
