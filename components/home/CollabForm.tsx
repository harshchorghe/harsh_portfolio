'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MovingBorder } from '@/components/ui/moving-border';
import { useForm, ValidationError } from '@formspree/react';

export default function CollabForm() {
  // Formspree hook (replace with your form ID if different)
  const [formState, handleSubmit] = useForm('mpqalqrz');

  // Mount state for entrance animations
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);



  const router = useRouter();

  // Success modal & validation states
  const [showModal, setShowModal] = useState(false);
  const [autoCloseMs] = useState<number>(3000); // auto close after 3s by default
  const [redirectAfterClose] = useState<string | null>(null); // set to '/thank-you' to redirect

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (showModal) closeBtnRef.current?.focus();
  }, [showModal]);

  // Show success modal and optionally redirect/auto-close when form submission succeeds
  useEffect(() => {
    if (formState.succeeded) {
      const id = setTimeout(() => setShowModal(true), 0);
      const t = setTimeout(() => {
        setShowModal(false);
        if (redirectAfterClose) router.push(redirectAfterClose);
      }, autoCloseMs);

      // reset the form after success
      const formEl = document.getElementById('collab-form') as HTMLFormElement | null;
      formEl?.reset();

      return () => {
        clearTimeout(id);
        clearTimeout(t);
      };
    }
  }, [formState.succeeded, autoCloseMs, redirectAfterClose, router]);

  // Real-time email validation
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const serverFieldError = (field: string) => {
    return formState.errors?.find((e: any) => e.field === field)?.message || null;
  };



  return (
    <div className={`relative max-w-3xl mx-auto p-8 md:p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

      {/* Decorative glass glow behind the panel */}
      <div className="absolute -inset-6 -z-10 rounded-2xl bg-linear-to-br from-purple-600/10 via-pink-500/6 to-blue-400/6 blur-3xl opacity-80 animate-pulse" aria-hidden />

      {/* Moving border accent */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <MovingBorder duration={5000} rx="22%" ry="22%">
          <div className="h-3 w-3 opacity-80 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_60%)] rounded-full" />
        </MovingBorder>
      </div>

      {/* Back button */}
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Go back"
        className="absolute left-6 top-6 rounded-full p-2 bg-white/6 backdrop-blur-sm border border-white/10 text-white hover:scale-105 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <form id="collab-form" onSubmit={handleSubmit} className={`space-y-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white">Collaboration</h3>
          <p className="text-sm text-white/70">Interested in collaborating? Fill out the form and I’ll get back within a few business days.</p>
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
            value={emailValue}
            onChange={handleEmailChange}
            aria-invalid={!!emailError || !!serverFieldError('email')}
            className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition ${emailError || serverFieldError('email') ? 'border-red-400 ring-red-300/20' : 'border-white/10'}`}
            placeholder="john@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={formState.errors} />
          {(emailError || serverFieldError('email')) && (
            <p className="mt-2 text-sm text-red-300">{emailError || serverFieldError('email')}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="youtube" className="block text-sm font-medium mb-2 text-white/90">
            YouTube Channel (URL or @handle)
          </label>
          <input
            type="text"
            id="youtube"
            name="youtube"
            className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition"
            placeholder="https://youtube.com/@yourchannel"
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
          className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 focus:border-transparent transition resize-none ${serverFieldError('message') ? 'border-red-400 ring-red-300/20' : 'border-white/10'}`}
          placeholder="Tell me about your idea, your audience, why we'd be a great fit..."
        />
        <ValidationError prefix="Message" field="message" errors={formState.errors} />
        {serverFieldError('message') && (
          <p className="mt-2 text-sm text-red-300">{serverFieldError('message')}</p>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={formState.submitting}
          className="px-8 py-3 bg-white/6 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-lg text-white shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 disabled:opacity-70 focus-visible:ring-4 focus-visible:ring-purple-400/20"
        >
          {formState.submitting ? 'Sending...' : 'Submit Collaboration Request'}
        </button>
      </div>

      {/* Success modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative z-10 max-w-md w-full bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl transform transition-all duration-300 scale-100">
            <h4 className="text-lg font-semibold text-white mb-2">Thanks! 🎉</h4>
            <p className="text-sm text-white/80 mb-4">I got your request — I’ll get back to you soon.</p>
            <div className="flex items-center gap-3 justify-end">
              <button ref={closeBtnRef} className="px-4 py-2 text-sm rounded-lg bg-transparent border border-white/12 text-white" onClick={() => { setShowModal(false); }}>
                Close
              </button>
              <button className="px-4 py-2 text-sm rounded-lg bg-white/8 text-white backdrop-blur-sm" onClick={() => router.push('/') }>
                Go home
              </button>
            </div>
          </div>
        </div>
      )}

      {/* inline success/failure fallback for users without JS or if modal is closed */}
      {formState.succeeded && !showModal && (
        <p className="text-center text-green-200 text-lg">Thanks! I’ll get back to you soon 🎉</p>
      )}

      {!formState.succeeded && formState.errors && formState.errors.length > 0 && (
        <p className="text-center text-red-300 text-lg">Oops! Something went wrong. Please check the highlighted fields.</p>
      )}
      </form>
    </div>
  );
} 