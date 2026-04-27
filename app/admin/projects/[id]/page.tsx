'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProjectFormData {
  title: string;
  description: string;
  image: string;
  technologies: string;
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  order: number;
}

export default function EditProject() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    description: '',
    image: '',
    technologies: '',
    category: 'Full Stack',
    liveUrl: '',
    githubUrl: '',
    featured: false,
    order: 0,
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${projectId}`);
        if (response.ok) {
          const project = await response.json();
          setFormData({
            title: project.title || '',
            description: project.description || '',
            image: project.image || '',
            technologies: project.technologies || '',
            category: project.category || 'Full Stack',
            liveUrl: project.liveUrl || '',
            githubUrl: project.githubUrl || '',
            featured: project.featured || false,
            order: project.order || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/projects');
      } else {
        alert('Error updating project');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

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
            href="/admin/projects"
            className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-cyan-500/20 rounded-lg transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Edit Project</h1>
          <p className="text-gray-400">Update your portfolio project</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-black border-2 border-cyan-500/20 rounded-xl p-6 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-white font-semibold mb-2">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="E-Commerce Platform"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-white font-semibold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition resize-none"
                placeholder="Describe your project..."
              />
            </div>

            {/* Image */}
            <div>
              <label htmlFor="image" className="block text-white font-semibold mb-2">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="https://example.com/image.jpg"
              />
              {formData.image && (
                <img src={formData.image} alt="Preview" className="mt-4 max-h-48 rounded-lg" />
              )}
            </div>

            {/* Technologies */}
            <div>
              <label htmlFor="technologies" className="block text-white font-semibold mb-2">
                Technologies (comma separated)
              </label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="Next.js, React, TypeScript, Tailwind CSS"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-white font-semibold mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition"
              >
                <option value="Full Stack">Full Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
              </select>
            </div>

            {/* Live URL */}
            <div>
              <label htmlFor="liveUrl" className="block text-white font-semibold mb-2">
                Live URL (optional)
              </label>
              <input
                type="url"
                id="liveUrl"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="https://project.com"
              />
            </div>

            {/* GitHub URL */}
            <div>
              <label htmlFor="githubUrl" className="block text-white font-semibold mb-2">
                GitHub URL (optional)
              </label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="https://github.com/username/repo"
              />
            </div>

            {/* Featured */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-4 h-4 text-cyan-500 bg-cyan-500/20 border-cyan-500/30 rounded cursor-pointer"
              />
              <label htmlFor="featured" className="text-white font-semibold cursor-pointer">
                Featured Project
              </label>
            </div>

            {/* Order */}
            <div>
              <label htmlFor="order" className="block text-white font-semibold mb-2">
                Display Order
              </label>
              <input
                type="number"
                id="order"
                name="order"
                value={formData.order}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="0"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 disabled:opacity-50 transition"
            >
              {isSubmitting ? 'Updating...' : 'Update Project'}
            </button>
            <Link
              href="/admin/projects"
              className="flex-1 px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
