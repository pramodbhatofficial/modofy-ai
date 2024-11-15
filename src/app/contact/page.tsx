'use client';

import { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <MainLayout>
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h1 className="text-3xl font-bold mb-8 text-center">Schedule a Technical Consultation</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
