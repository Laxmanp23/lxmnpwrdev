'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) {
          setNotFound(true);
          return;
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black">
        <Header />
        <div className="pt-32 pb-24 text-center">
          <p className="text-gray-400">Loading article...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (notFound || !blog) {
    return (
      <main className="min-h-screen bg-black">
        <Header />
        <div className="pt-32 pb-24">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-8">Sorry, the article you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <article className="pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>•</span>
              <span>{blog.views} views</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: blog.content.replace(/\n/g, '<br />'),
              }}
            />
          </div>

          {/* CTA */}
          <div className="border-t border-cyan-500/20 pt-8">
            <p className="text-gray-400 mb-4">Have a project in mind?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/50"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
