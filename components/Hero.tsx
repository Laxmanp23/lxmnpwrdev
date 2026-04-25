'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code2, Database } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Background animated elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-cyan-50 dark:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/50 rounded-full transition-colors"
            >
              <span className="text-cyan-700 dark:text-cyan-300 text-sm font-semibold">
                💼 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              I Build{' '}
              <span className="text-cyan-400">
                Scalable Web & Software
              </span>{' '}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 max-w-lg"
            >
              Full-stack developer specializing in modern web applications, backend APIs, and complete software solutions. Transforming ideas into high-performance digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50"
              >
                Hire Me
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-gray-300 dark:border-cyan-500 text-gray-700 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-cyan-500/20 transition"
              >
                View My Work
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-cyan-500/30"
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Prisma', 'MySQL'].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white dark:bg-cyan-500/10 border border-gray-200 dark:border-cyan-500/40 text-gray-700 dark:text-cyan-300 text-sm rounded-full shadow-sm dark:shadow-none transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Glassmorphism card */}
              <div className="absolute inset-0 bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-cyan-500/50 shadow-2xl dark:shadow-none backdrop-blur-xl rounded-2xl p-6 lg:p-8 transition-colors flex flex-col">
                {/* Window Controls */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
                </div>
                
                {/* Code Editor Mockup */}
                <div className="font-mono text-sm sm:text-base text-gray-800 dark:text-gray-300 flex-1 flex flex-col justify-center">
                  <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}</p>
                  <p className="ml-4 lg:ml-6 mt-2">name: <span className="text-green-600 dark:text-green-400">'Laxman Pawar'</span></p>
                  <p className="ml-4 lg:ml-6 mt-2">role: <span className="text-green-600 dark:text-green-400">'Full-Stack Developer'</span>,</p>
                  <p className="ml-4 lg:ml-6 mt-2">skills: [<span className="text-green-600 dark:text-green-400">'React'</span>, <span className="text-green-600 dark:text-green-400">'Next.js'</span>, <span className="text-green-600 dark:text-green-400">'Node'</span>],</p>
                  <p className="ml-4 lg:ml-6 mt-2">passion: <span className="text-green-600 dark:text-green-400">'Building scalable solutions'</span></p>
                  <p className="mt-2">{'}'};</p>
                  <br />
                  <p><span className="text-blue-600 dark:text-blue-400">developer</span>.<span className="text-yellow-600 dark:text-yellow-400">code</span>();<span className="animate-pulse">_</span></p>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-12 z-20 bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-cyan-500/40 shadow-xl dark:shadow-none backdrop-blur-xl rounded-xl p-4 transition-colors flex items-center gap-4"
              >
                <div className="p-3 bg-cyan-100 dark:bg-cyan-500/20 rounded-lg text-cyan-600 dark:text-cyan-400">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold">Frontend</p>
                  <p className="text-cyan-700 dark:text-cyan-400 text-sm">React & Next.js</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-12 z-20 bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-orange-500/40 shadow-xl dark:shadow-none backdrop-blur-xl rounded-xl p-4 transition-colors flex items-center gap-4"
              >
                <div className="p-3 bg-orange-100 dark:bg-orange-500/20 rounded-lg text-orange-600 dark:text-orange-400">
                  <Database size={24} />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold">Backend</p>
                  <p className="text-orange-600 dark:text-orange-400 text-sm">Node.js & Database</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
