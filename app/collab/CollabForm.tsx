'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MovingBorder } from '@/components/ui/moving-border';

export default function CollabForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Debug: Log what we're sending
    console.log('📤 Submitting form data:');
    for (const [key, value] of formData.entries()) {
      console.log(`   ${key}: ${value}`);
    }

    try {
      const res = await fetch('https://formspree.io/f/mpqalqrz', {
        method: 'POST',
        body: formData, // ← Critical: Send as FormData, NOT JSON!
        headers: {
          Accept: 'application/json',
        },
      });

      console.log('📡 Response status:', res.status);

      if (res.ok) {
        const result = await res.json();
        console.log('✅ Success response from Formspree:', result);

        setStatus('success');
        setMessage('Thanks! I’ll get back to you soon 🎉');
        form.reset();
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error('❌ Formspree error:', errorData);
        throw new Error(errorData.error || 'Submission failed');
      }
    } catch (err) {
      console.error('💥 Submission failed:', err);
      setStatus('error');
      setMessage('Oops! Something went wrong. Try again or DM me on Instagram.');
    }
  };

  return (
    <div
      className={`relative max-w-3xl mx-auto p-8 md:p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Glow background */}
      <div
        className="absolute -inset-6 -z-10 rounded-2xl bg-linear-to-br from-purple-600/10 via-pink-500/6 to-blue-400/6 blur-3xl opacity-80 animate-pulse"
        aria-hidden="true"
      />

      {/* Moving border */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <MovingBorder duration={5000} rx="22%" ry="22%">
          <div className="h-3 w-3 opacity-80 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_60%)] rounded-full" />
        </MovingBorder>
      </div>

      {/* Back button */}
      <button
        type="button"
        onClick={() => router.push('/')}
        aria-label="Go back"
        className="absolute left-2 top-2 rounded-full p-2 bg-white/6 backdrop-blur-sm border border-white/10 text-white hover:scale-105 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <form onSubmit={handleSubmit} className={`space-y-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white">Collaboration Request</h3>
          <p className="text-sm text-white/70">Fill out the form and I’ll review your proposal soon.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="youtube" className="block text-sm font-medium mb-2 text-white/90">
              YouTube Channel
            </label>
            <input
              type="text"
              id="youtube"
              name="youtube"
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition"
              placeholder="https://youtube.com/@yourchannel or @handle"
            />
          </div>

          <div>
            <label htmlFor="instagram" className="block text-sm font-medium mb-2 text-white/90">
              Instagram Handle
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition"
              placeholder="@yourinstagram"
            />
          </div>
        </div>

        <div>
          <label htmlFor="collabType" className="block text-sm font-medium mb-2 text-white/90">
            Collaboration Type *
          </label>
          <select
            id="collabType"
            name="collabType"
            required
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition"
          >
            <option value="">Select one...</option>
            <option value="youtube-collab">YouTube Video Collab</option>
            <option value="ig-reels">Instagram Reels/Posts</option>
            <option value="shoutout">Shoutout / Story Feature</option>
            <option value="sponsored">Sponsored Content</option>
            <option value="guest-appearance">Guest Appearance</option>
            <option value="other">Other (describe below)</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
            Your Idea / Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition resize-none"
            placeholder="Tell me about your idea, audience, why we'd be a great fit..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-white/6 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-lg text-white shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending...' : 'Submit Request'}
          </button>
        </div>

        {status === 'success' && <p className="text-center text-green-200 text-lg font-medium">{message}</p>}
        {status === 'error' && <p className="text-center text-red-300 text-lg font-medium">{message}</p>}
      </form>
    </div>
  );
}