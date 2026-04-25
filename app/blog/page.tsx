'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Calendar, Eye, ArrowRight, Search, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  views: number;
  createdAt: string;
  published: boolean;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?published=true');
        const data = await response.json();
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error('Unexpected API response format:', data);
          setBlogs([]);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Search Query filter logic
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredBlog = filteredBlogs[0];
  const regularBlogs = filteredBlogs.slice(1);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Header />
      
      {/* Hero Section & Search Bar */}
      <section className="pt-32 pb-16 relative overflow-hidden border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl opacity-50 dark:opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 rounded-full mb-6">
              <BookOpen className="text-cyan-600 dark:text-cyan-400" size={16} />
              <span className="text-cyan-700 dark:text-cyan-300 text-sm font-semibold">
                My Thoughts & Writings
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Discoveries</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Dive into my latest thoughts on software engineering, web development, scalable systems, and the tech industry.
            </p>
          </motion.div>

          {/* Search Input */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative max-w-2xl mx-auto mt-10">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles by title or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-800 rounded-2xl leading-5 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 shadow-sm backdrop-blur-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500 dark:text-gray-400">Loading amazing content...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-50 dark:bg-gray-800 mb-4">
                <Search className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                {searchQuery ? `We couldn't find any articles matching "${searchQuery}". Try a different search term.` : "Check back later for new content!"}
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post (First Post) */}
              {featuredBlog && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> Featured Article
                  </h2>
                  <Link href={`/blog/${featuredBlog.slug}`} className="group block">
                    <article className="flex flex-col lg:flex-row gap-8 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl dark:shadow-none hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-500">
                      <div className="w-full lg:w-1/2 h-72 lg:h-auto relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img src={featuredBlog.image} alt={featuredBlog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                          <span className="flex items-center gap-1.5"><Calendar size={16} className="text-cyan-500" /> {new Date(featuredBlog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          <span className="flex items-center gap-1.5"><Eye size={16} className="text-cyan-500" /> {featuredBlog.views} views</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                          {featuredBlog.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed">
                          {featuredBlog.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold group-hover:gap-3 transition-all mt-auto">
                          Read Article <ArrowRight size={20} />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              )}

              {/* Regular Posts Grid */}
              {regularBlogs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> Latest Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularBlogs.map((blog, index) => (
                      <motion.div key={blog.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                        <Link href={`/blog/${blog.slug}`} className="group flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl dark:shadow-none hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300">
                          <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
                              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-cyan-500" /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                              <span className="flex items-center gap-1.5"><Eye size={14} className="text-cyan-500" /> {blog.views}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                              {blog.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                              {blog.excerpt}
                            </p>
                            <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                              Read More <ArrowRight size={16} />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
