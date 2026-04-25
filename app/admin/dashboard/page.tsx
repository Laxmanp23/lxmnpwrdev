'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogOut, FileText, FolderOpen, Briefcase, Mail } from 'lucide-react';

interface DashboardStats {
  projects: number;
  blogs: number;
  services: number;
  contacts: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('[Dashboard] Checking authentication...');
        // Try to fetch projects to verify auth
        const response = await fetch('/api/projects', { cache: 'no-store' });
        console.log('[Dashboard] Projects fetch response:', response.status);
        
        if (!response.ok) {
          console.log('[Dashboard] Auth check failed, redirecting to login');
          router.push('/admin/login');
          return;
        }
        
        // Fetch all stats
        console.log('[Dashboard] Fetching stats...');
        const [projectsRes, blogsRes, servicesRes, contactsRes] = await Promise.all([
          fetch('/api/projects', { cache: 'no-store' }),
          fetch('/api/blogs?published=false', { cache: 'no-store' }),
          fetch('/api/services', { cache: 'no-store' }),
          fetch('/api/contacts', { cache: 'no-store' }),
        ]);

        console.log('[Dashboard] API responses:', {
          projects: projectsRes.status,
          blogs: blogsRes.status,
          services: servicesRes.status,
          contacts: contactsRes.status,
        });

        const projects = await projectsRes.json();
        const blogs = await blogsRes.json();
        const services = await servicesRes.json();
        const contacts = await contactsRes.json();

        setStats({
          projects: Array.isArray(projects) ? projects.length : 0,
          blogs: Array.isArray(blogs) ? blogs.length : 0,
          services: Array.isArray(services) ? services.length : 0,
          contacts: Array.isArray(contacts) ? contacts.length : 0,
        });
        console.log('[Dashboard] Stats loaded successfully');
      } catch (error) {
        console.error('[Dashboard] Error:', error);
        router.push('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center transition-colors duration-300">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-black border-b border-gray-200 dark:border-cyan-500/20 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 dark:bg-black border border-gray-300 dark:border-cyan-500/30 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 dark:text-white font-bold text-sm">LP</span>
            </div>
            <h1 className="text-gray-900 dark:text-white font-bold">Admin Panel</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-cyan-500/20 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your portfolio, projects, and content</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              label: 'Projects',
              value: stats?.projects || 0,
              icon: FolderOpen,
              href: '/admin/projects',
              color: 'purple',
            },
            {
              label: 'Blog Posts',
              value: stats?.blogs || 0,
              icon: FileText,
              href: '/admin/blogs',
              color: 'pink',
            },
            {
              label: 'Services',
              value: stats?.services || 0,
              icon: Briefcase,
              href: '/admin/services',
              color: 'purple',
            },
            {
              label: 'Messages',
              value: stats?.contacts || 0,
              icon: Mail,
              href: '/admin/contacts',
              color: 'pink',
            },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Link
                key={i}
                href={stat.href}
                className="group relative p-6 bg-white dark:bg-black border border-gray-200 dark:border-cyan-500/20 rounded-xl shadow-sm dark:shadow-none hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-cyan-50 dark:bg-cyan-500/20 rounded-lg group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/30 transition">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-black border border-gray-200 dark:border-cyan-500/20 rounded-xl shadow-lg dark:shadow-none p-6 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Management</h2>
            <div className="space-y-3">
              <Link
                href="/admin/projects"
                className="block px-4 py-3 bg-gray-50 dark:bg-cyan-500/10 hover:bg-gray-100 dark:hover:bg-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 text-gray-700 dark:text-white rounded-lg transition"
              >
                Manage Projects
              </Link>
              <Link
                href="/admin/blogs"
                className="block px-4 py-3 bg-gray-50 dark:bg-cyan-500/10 hover:bg-gray-100 dark:hover:bg-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 text-gray-700 dark:text-white rounded-lg transition"
              >
                Manage Blog Posts
              </Link>
              <Link
                href="/admin/services"
                className="block px-4 py-3 bg-gray-50 dark:bg-cyan-500/10 hover:bg-gray-100 dark:hover:bg-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 text-gray-700 dark:text-white rounded-lg transition"
              >
                Manage Services
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-black border border-gray-200 dark:border-cyan-500/20 rounded-xl shadow-lg dark:shadow-none p-6 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Content</h2>
            <div className="space-y-3">
              <Link
                href="/admin/projects/new"
                className="block px-4 py-3 bg-gray-50 dark:bg-pink-500/10 hover:bg-gray-100 dark:hover:bg-pink-500/20 border border-gray-200 dark:border-cyan-500/20 text-gray-700 dark:text-white rounded-lg transition"
              >
                Add New Project
              </Link>
              <Link
                href="/admin/blogs/new"
                className="block px-4 py-3 bg-gray-50 dark:bg-pink-500/10 hover:bg-gray-100 dark:hover:bg-pink-500/20 border border-gray-200 dark:border-cyan-500/20 text-gray-700 dark:text-white rounded-lg transition"
              >
                Write New Blog Post
              </Link>
              <Link
                href="/admin/contacts"
                className="block px-4 py-3 bg-gray-50 dark:bg-pink-500/10 hover:bg-gray-100 dark:hover:bg-pink-500/20 border border-gray-200 dark:border-cyan-500/20 text-gray-700 dark:text-white rounded-lg transition"
              >
                View Messages
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
