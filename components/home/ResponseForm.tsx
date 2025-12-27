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
    <div className="max-w-5xl mt-20 mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-zinc-900 dark:text-zinc-50">
        Response Form
      </h2>
      <div className={`relative mt-12 max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        
        {/* Enhanced glass effects */}
        <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-400/10 blur-3xl opacity-70" aria-hidden />
        <div className="pointer-events-none absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" aria-hidden />
        
        {/* Moving border */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <MovingBorder duration={4500} rx="20%" ry="20%">
            <div className="h-3 w-3 opacity-90 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_70%)] rounded-full" />
          </MovingBorder>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Share your feedback</h3>
          <p className="text-sm text-white/80 mb-6">Quick feedback helps me improve — a few questions only.</p>

          <form id="response-form" onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-white">Full name *</label>
              <input 
                id="fullName" 
                name="fullName" 
                required 
                className="w-full px-4 py-3.5 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all hover:bg-white/10" 
                placeholder="Jane Doe" 
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-semibold mb-2 text-white">How was the website?</label>
              <select 
                id="experience" 
                name="experience" 
                className="w-full px-4 py-3.5 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all hover:bg-white/10 appearance-none cursor-pointer"
                style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.7)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em'}}
              >
                <option value="" className="bg-zinc-900">Choose...</option>
                <option value="excellent" className="bg-zinc-900">Excellent</option>
                <option value="good" className="bg-zinc-900">Good</option>
                <option value="okay" className="bg-zinc-900">Okay</option>
                <option value="poor" className="bg-zinc-900">Poor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-white">How would you rate it?</label>
              <div className="flex items-center gap-3">
                {[1,2,3,4,5].map((n) => (
                  <label key={n} className="flex-1">
                    <input type="radio" name="rating" value={n} className="peer sr-only" />
                    <div className="flex items-center justify-center h-12 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl cursor-pointer transition-all hover:bg-white/15 peer-checked:bg-white/20 peer-checked:border-white/40 peer-checked:ring-2 peer-checked:ring-white/30">
                      <span className="text-sm font-semibold text-white">{n}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-white">Would you suggest this to other influencers?</label>
              <div className="flex items-center gap-4">
                <label className="flex-1">
                  <input type="radio" name="suggest" value="yes" className="peer sr-only" />
                  <div className="flex items-center justify-center px-6 py-3 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl cursor-pointer transition-all hover:bg-white/15 peer-checked:bg-white/20 peer-checked:border-white/40 peer-checked:ring-2 peer-checked:ring-white/30">
                    <span className="text-sm font-medium text-white">Yes</span>
                  </div>
                </label>
                <label className="flex-1">
                  <input type="radio" name="suggest" value="no" className="peer sr-only" />
                  <div className="flex items-center justify-center px-6 py-3 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl cursor-pointer transition-all hover:bg-white/15 peer-checked:bg-white/20 peer-checked:border-white/40 peer-checked:ring-2 peer-checked:ring-white/30">
                    <span className="text-sm font-medium text-white">No</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-white">Have you followed the YouTube and Instagram pages?</label>
              <div className="flex items-center gap-4">
                <label className="flex-1">
                  <input type="radio" name="followed" value="yes" onChange={() => setFollowed('yes')} className="peer sr-only" />
                  <div className="flex items-center justify-center px-6 py-3 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl cursor-pointer transition-all hover:bg-white/15 peer-checked:bg-white/20 peer-checked:border-white/40 peer-checked:ring-2 peer-checked:ring-white/30">
                    <span className="text-sm font-medium text-white">Yes</span>
                  </div>
                </label>
                <label className="flex-1">
                  <input type="radio" name="followed" value="no" onChange={() => setFollowed('no')} className="peer sr-only" />
                  <div className="flex items-center justify-center px-6 py-3 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl cursor-pointer transition-all hover:bg-white/15 peer-checked:bg-white/20 peer-checked:border-white/40 peer-checked:ring-2 peer-checked:ring-white/30">
                    <span className="text-sm font-medium text-white">No</span>
                  </div>
                </label>
              </div>
            </div>

            {followed === 'no' && (
              <div className="space-y-3 p-5 bg-white/5 backdrop-blur-md border border-white/15 rounded-xl">
                <p className="text-sm font-semibold text-white/90">Share links (optional)</p>
                <input 
                  name="youtubeLink" 
                  placeholder="YouTube link" 
                  className="w-full px-4 py-3 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all hover:bg-white/10" 
                />
                <input 
                  name="instagramLink" 
                  placeholder="Instagram link" 
                  className="w-full px-4 py-3 bg-white/8 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all hover:bg-white/10" 
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">Email (optional)</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                value={emailValue} 
                onChange={handleEmailChange} 
                className={`w-full px-4 py-3.5 bg-white/8 backdrop-blur-md rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 transition-all hover:bg-white/10 ${emailError || serverFieldError('email') ? 'border-2 border-red-400/80 ring-2 ring-red-400/20' : 'border border-white/20 focus:ring-white/30 focus:border-white/30'}`} 
                placeholder="you@example.com" 
              />
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
              {(emailError || serverFieldError('email')) && (<p className="mt-2 text-sm text-red-300 font-medium">{emailError || serverFieldError('email')}</p>)}
            </div>

            <div className="text-center pt-2">
              <button 
                type="submit" 
                disabled={formState.submitting} 
                className="px-8 py-3.5 bg-white/15 backdrop-blur-md border border-white/30 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-white/30"
              >
                {formState.submitting ? 'Sending...' : 'Send feedback'}
              </button>
            </div>

            {formState.succeeded && (
              <div className="text-center p-4 bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-xl">
                <p className="text-green-200 text-lg font-semibold">Thanks — feedback received 🎉</p>
              </div>
            )}

            {/* If there are server-side errors, show a generic message */}
            {!formState.succeeded && (() => {
              const raw = (formState as unknown as { errors?: FieldErr | Record<string, FieldErr> | FieldErr[] }).errors;
              const arr: FieldErr[] = Array.isArray(raw) ? raw : raw ? Object.values(raw as Record<string, FieldErr>) : [];
              return arr.length > 0;
            })() && (
              <div className="text-center p-4 bg-red-500/20 backdrop-blur-md border border-red-400/30 rounded-xl">
                <p className="text-red-300 text-lg font-semibold">Oops! Something went wrong. Please check the highlighted fields.</p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* modal */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative z-10 max-w-md w-full bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-400/20 blur-2xl" aria-hidden />
            <h4 className="text-2xl font-bold text-white mb-3">Thanks for your feedback! 🎉</h4>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">I really appreciate you taking the time. It helps me make the site even better.</p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowModal(false)} 
                className="px-6 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}