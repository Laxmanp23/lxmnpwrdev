'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects?: Project[];
  showViewAll?: boolean;
}

const defaultProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with product catalog, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e6d6a4b2?w=500&h=300&fit=crop',
    technologies: 'Next.js, TypeScript, Stripe, Prisma, PostgreSQL',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization and user management features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: 'React, Node.js, MongoDB, Chart.js, Docker',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Mobile App Backend API',
    description: 'RESTful API with authentication, real-time notifications, and cloud storage integration.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    technologies: 'Node.js, Express, PostgreSQL, AWS, Firebase',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
];

export function Projects({ projects = defaultProjects, showViewAll = true }: ProjectsProps) {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my best work and successful client projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-cyan-500/30 bg-white dark:bg-gray-900 hover:border-cyan-500/50 dark:hover:border-cyan-500/70 shadow-md dark:shadow-none transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
                      >
                        <ExternalLink size={20} className="text-black" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-orange-500 rounded-lg hover:bg-orange-400 transition"
                      >
                        <Github size={20} className="text-black" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.split(', ').map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/50"
            >
              View All Projects
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
