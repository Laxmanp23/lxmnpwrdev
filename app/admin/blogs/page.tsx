'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Edit2, Trash2, Eye } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published: boolean;
  views: number;
  createdAt: string;
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs?published=false');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBlog = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setBlogs(blogs.filter((b) => b.slug !== slug));
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black border-2 border-cyan-500/30 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LP</span>
            </div>
            <h1 className="text-white font-bold">Admin Panel</h1>
          </div>
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-cyan-500/20 rounded-lg transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Blog Posts</h1>
            <p className="text-gray-400">Manage your blog articles</p>
          </div>
          <Link
            href="/admin/blogs/new"
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            Write Post
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No blog posts yet</p>
            <Link
              href="/admin/blogs/new"
              className="inline-block px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold"
            >
              Write First Post
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-center justify-between p-4 bg-black border-2 border-cyan-500/30/5 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {blog.excerpt.substring(0, 100)}...
                  </p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-400">
                    <span>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {blog.views} views
                    </span>
                    <span className={`${blog.published ? 'text-green-400' : 'text-yellow-400'}`}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/blogs/${blog.slug}`}
                    className="p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition"
                  >
                    <Edit2 size={18} className="text-cyan-400" />
                  </Link>
                  <button
                    onClick={() => deleteBlog(blog.slug)}
                    className="p-2 bg-red-500/20 hover:bg-red-500/40 rounded-lg transition"
                  >
                    <Trash2 size={18} className="text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
