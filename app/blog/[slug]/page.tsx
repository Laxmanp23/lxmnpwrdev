'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Calendar, Eye, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  views: number;
  createdAt: string;
  published: boolean;
}

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch('/api/blogs?published=true');
        const data = await response.json();
        if (Array.isArray(data)) {
          const found = data.find((b: Blog) => b.slug === slug);
          setBlog(found || null);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
        <Header />
        <div className="pt-40 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 dark:text-gray-400">Loading article...</p>
        </div>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
        <Header />
        <div className="pt-40 pb-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline">
            <ArrowLeft size={20} /> Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Header />
      
      <article className="pt-32 pb-16 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors mb-8 font-medium">
          <ArrowLeft size={20} /> Back to all articles
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-10 pb-10 border-b border-gray-200 dark:border-gray-800">
            <span className="flex items-center gap-2">
              <Calendar size={18} className="text-cyan-500" />
              {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Eye size={18} className="text-cyan-500" />
              {blog.views} views
            </span>
          </div>
        </motion.div>

        {blog.image && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden mb-12 shadow-xl">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </motion.div>
        )}

        {/* Content Rendering */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg leading-relaxed text-gray-800 dark:text-gray-300"
        >
          <div 
            className="[&>p]:mb-6 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:dark:text-white [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>li]:mb-2 [&>a]:text-cyan-500 [&>a]:hover:underline"
            dangerouslySetInnerHTML={{ __html: blog.content || `<p>${blog.excerpt}</p>` }} 
          />
        </motion.div>
      </article>
      
      <Footer />
    </main>
  );
}