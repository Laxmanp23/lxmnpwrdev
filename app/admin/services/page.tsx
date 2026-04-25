'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Edit2, Trash2 } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteService = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const response = await fetch(`/api/services/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setServices(services.filter((s) => s.id !== id));
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">LP</span>
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
            <h1 className="text-4xl font-bold text-white mb-2">Services</h1>
            <p className="text-gray-400">Manage your service offerings</p>
          </div>
          <Link
            href="/admin/services/new"
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            Add Service
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading services...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No services yet</p>
            <Link
              href="/admin/services/new"
              className="inline-block px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold"
            >
              Create First Service
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-black border-2 border-cyan-500/30/5 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/services/${service.id}`}
                      className="p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition"
                    >
                      <Edit2 size={18} className="text-cyan-400" />
                    </Link>
                    <button
                      onClick={() => deleteService(service.id)}
                      className="p-2 bg-red-500/20 hover:bg-red-500/40 rounded-lg transition"
                    >
                      <Trash2 size={18} className="text-red-400" />
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                    Order: {service.order}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
