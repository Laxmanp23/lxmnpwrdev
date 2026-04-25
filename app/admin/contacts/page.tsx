'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      // Note: You may need to add an endpoint to update contact status
      setContacts(
        contacts.map((c) =>
          c.id === id ? { ...c, status: 'read' } : c
        )
      );
    } catch (error) {
      console.error('Error updating contact:', error);
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">Messages</h1>
              <p className="text-gray-400">
                {contacts.length} total message{contacts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-gray-400">Loading messages...</p>
              </div>
            ) : contacts.length === 0 ? (
              <div className="text-center py-12 bg-black border-2 border-cyan-500/30/5 border border-cyan-500/20 rounded-lg">
                <Mail size={48} className="mx-auto text-gray-400 mb-4 opacity-50" />
                <p className="text-gray-400">No messages yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={() => markAsRead(contact.id) || setSelectedContact(contact)}
                    className={`p-4 border rounded-lg cursor-pointer transition ${
                      selectedContact?.id === contact.id
                        ? 'border-cyan-500/50 bg-cyan-500/10'
                        : 'border-cyan-500/20 hover:border-cyan-500/40 bg-black border-2 border-cyan-500/30/5'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                          {contact.name}
                          {contact.status === 'read' && (
                            <CheckCircle size={16} className="text-green-400" />
                          )}
                        </h3>
                        <p className="text-cyan-400 text-sm">{contact.email}</p>
                        <p className="text-gray-400 text-sm mt-2">
                          {contact.message.substring(0, 150)}...
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                          {new Date(contact.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className={`h-2 w-2 rounded-full ${contact.status === 'new' ? 'bg-blue-500' : 'bg-gray-500'}`} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Message Detail */}
          <div>
            {selectedContact ? (
              <div className="bg-black border-2 border-cyan-500/30/10 border border-cyan-500/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Message Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Name</label>
                    <p className="text-white font-semibold">{selectedContact.name}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Email</label>
                    <a
                      href={`mailto:${selectedContact.email}`}
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      {selectedContact.email}
                    </a>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Date</label>
                    <p className="text-white">
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Status</label>
                    <p className={`${selectedContact.status === 'new' ? 'text-blue-400' : 'text-green-400'} capitalize`}>
                      {selectedContact.status}
                    </p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">Message</label>
                    <p className="text-gray-300 whitespace-pre-wrap">
                      {selectedContact.message}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-cyan-500/20">
                    <a
                      href={`mailto:${selectedContact.email}?subject=Re: Your Message`}
                      className="w-full px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/40 text-white rounded-lg transition text-center"
                    >
                      Reply via Email
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-black border-2 border-cyan-500/30/5 border border-cyan-500/20 rounded-lg">
                <p className="text-gray-400">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
