'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Edit2, Trash2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  featured: boolean;
  createdAt: string;
}

export default function AdminProjects() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProjects(projects.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error('Error deleting project:', error);
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
            <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
            <p className="text-gray-400">Manage your portfolio projects</p>
          </div>
          <Link
            href="/admin/projects/new"
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            Add Project
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No projects yet</p>
            <Link
              href="/admin/projects/new"
              className="inline-block px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold"
            >
              Create First Project
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 bg-black border-2 border-cyan-500/30/5 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex gap-2 mt-2">
                    {project.technologies.split(',').map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/projects/${project.id}`}
                    className="p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition"
                  >
                    <Edit2 size={18} className="text-cyan-400" />
                  </Link>
                  <button
                    onClick={() => deleteProject(project.id)}
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
