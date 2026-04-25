'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string;
  category?: string;
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
    title: 'E-Commerce Platform ',
    description: 'Full-stack e-commerce platform with product catalog, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e6d6a4b2?w=500&h=300&fit=crop',
    technologies: 'Next.js, TypeScript, Stripe, Prisma, PostgreSQL',
    category: 'Full Stack',
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
    category: 'Frontend',
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
    category: 'Backend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Real-time Chat App',
    description: 'A responsive chat application supporting direct messaging, groups, and media sharing.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
    technologies: 'React, Socket.io, Node.js, Tailwind CSS',
    category: 'Full Stack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Portfolio Website V1',
    description: 'Previous version of my personal portfolio built with React and Framer Motion.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=300&fit=crop',
    technologies: 'React, Tailwind CSS, Framer Motion',
    category: 'Frontend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '6',
    title: 'GraphQL Content API',
    description: 'A headless CMS backend built with GraphQL, Apollo Server, and PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
    technologies: 'GraphQL, Apollo, Node.js, PostgreSQL',
    category: 'Backend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  }
];

export function Projects({ projects = defaultProjects, showViewAll = true }: ProjectsProps) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className={`py-24 bg-gray-50 dark:bg-black relative transition-colors duration-300 ${!showViewAll ? 'pt-8' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        {showViewAll && (
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
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category as string}
              onClick={() => setFilter(category as string)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category as string}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-cyan-500/30 bg-white dark:bg-gray-900 hover:border-cyan-500/50 dark:hover:border-cyan-500/70 shadow-md dark:shadow-none transition-all duration-300 h-full flex flex-col group-hover:-translate-y-2">
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
                        <FaGithub size={20} className="text-black" />
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
          </AnimatePresence>
        </motion.div>

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
