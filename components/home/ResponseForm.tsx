'use client';

import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MovingBorder } from '@/components/ui/moving-border';

export default function ResponseForm() {
  // Formspree hook (feedback form ID)
  const [formState, handleSubmit] = useForm('xkowzoew');

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [autoCloseMs] = useState<number>(3000);

  // conditional follow fields
  const [followed, setFollowed] = useState<'yes' | 'no' | ''>('');

  // basic client email validation
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    if (formState.succeeded) {
      const id = setTimeout(() => setShowModal(true), 0);
      const t = setTimeout(() => setShowModal(false), autoCloseMs);
      return () => {
        clearTimeout(id);
        clearTimeout(t);
      };
    }
  }, [formState.succeeded, autoCloseMs]);

  type FieldErr = { field?: string; name?: string; message?: string };
  const serverFieldError = (field: string) => {
    // Normalise errors to an array for safe lookup (Formspree typings vary)
    const raw = (formState as unknown as { errors?: FieldErr | Record<string, FieldErr> | FieldErr[] }).errors;
    const arr: FieldErr[] = Array.isArray(raw) ? raw : raw ? Object.values(raw as Record<string, FieldErr>) : [];
    const found = arr.find((e) => e?.field === field || e?.name === field);
    return found?.message ?? null;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmailValue(val);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(val && !emailRegex.test(val) ? 'Please enter a valid email' : null);
  };

  return (
    <div className={`mt-12 max-w-3xl mx-auto p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {/* moving border accent */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl bg-linear-to-br from-purple-600/6 via-pink-500/6 to-blue-400/6 blur-3xl opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-0">
        <MovingBorder duration={4500} rx="20%" ry="20%">
          <div className="h-2 w-2 opacity-80 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_60%)] rounded-full" />
        </MovingBorder>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">Share your feedback</h3>
      <p className="text-sm text-white/70 mb-4">Quick feedback helps me improve — a few questions only.</p>

      <form id="response-form" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-white/90">Full name *</label>
          <input id="fullName" name="fullName" required className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 transition" placeholder="Jane Doe" />
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium mb-2 text-white/90">How was the website?</label>
          <select id="experience" name="experience" className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400/25 transition">
            <option value="">Choose...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="okay">Okay</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white/90">How would you rate it?</label>
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map((n) => (
              <label key={n} className="inline-flex items-center gap-2">
                <input type="radio" name="rating" value={n} className="accent-purple-400" />
                <span className="text-sm text-white/90">{n}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white/90">Would you suggest this to other influencers?</label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center gap-2"><input type="radio" name="suggest" value="yes" className="accent-purple-400" /> <span className="text-white/90">Yes</span></label>
            <label className="inline-flex items-center gap-2"><input type="radio" name="suggest" value="no" className="accent-purple-400" /> <span className="text-white/90">No</span></label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white/90">Have you followed the YouTube and Instagram pages?</label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center gap-2"><input type="radio" name="followed" value="yes" onChange={() => setFollowed('yes')} className="accent-purple-400" /> <span className="text-white/90">Yes</span></label>
            <label className="inline-flex items-center gap-2"><input type="radio" name="followed" value="no" onChange={() => setFollowed('no')} className="accent-purple-400" /> <span className="text-white/90">No</span></label>
          </div>
        </div>

        {followed === 'no' && (
          <div className="space-y-2">
            <p className="text-sm text-white/80">Share links (optional)</p>
            <input name="youtubeLink" placeholder="YouTube link" className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 transition" />
            <input name="instagramLink" placeholder="Instagram link" className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 transition" />
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">Email (optional)</label>
          <input id="email" name="email" type="email" value={emailValue} onChange={handleEmailChange} className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/25 transition ${emailError || serverFieldError('email') ? 'border-red-400 ring-red-300/20' : 'border-white/10'}`} placeholder="you@example.com" />
          <ValidationError prefix="Email" field="email" errors={formState.errors} />
          {(emailError || serverFieldError('email')) && (<p className="mt-2 text-sm text-red-300">{emailError || serverFieldError('email')}</p>)}
        </div>

        <div className="text-center">
          <button type="submit" disabled={formState.submitting} className="px-6 py-3 bg-white/6 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition disabled:opacity-70 focus-visible:ring-4 focus-visible:ring-purple-400/20">
            {formState.submitting ? 'Sending...' : 'Send feedback'}
          </button>
        </div>

        {formState.succeeded && (
          <p className="text-center text-green-200 text-lg">Thanks — feedback received 🎉</p>
        )}

        {/* If there are server-side errors, show a generic message */}
        {!formState.succeeded && (() => {
          const raw = (formState as unknown as { errors?: FieldErr | Record<string, FieldErr> | FieldErr[] }).errors;
          const arr: FieldErr[] = Array.isArray(raw) ? raw : raw ? Object.values(raw as Record<string, FieldErr>) : [];
          return arr.length > 0;
        })() && (
          <p className="text-center text-red-300 text-lg">Oops! Something went wrong. Please check the highlighted fields.</p>
        )}
      </form>

      {/* modal */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative z-10 max-w-sm w-full bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl">
            <h4 className="text-lg font-semibold text-white mb-2">Thanks for your feedback! 🎉</h4>
            <p className="text-sm text-white/80 mb-4">I really appreciate you taking the time. It helps me make the site even better.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg bg-transparent border border-white/12 text-white">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
