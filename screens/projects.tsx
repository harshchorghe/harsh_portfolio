"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectsScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const modal = isModalOpen && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-md mx-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
       

        <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Coming Soon!
        </h3>

        <p className="text-zinc-600 dark:text-zinc-300 mb-8">
          Recipe Tadka is currently in development and will be available soon. Stay tuned for the launch!
        </p>

        <button
          onClick={closeModal}
          className="w-full py-4 text-white font-semibold bg-gradient-to-r from-orange-500 to-red-500 rounded-full hover:from-orange-600 hover:to-red-600 transition"
        >
          Got it!
        </button>

        {/* Close X */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Your existing project card section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 text-center text-zinc-900 dark:text-zinc-50">
            Featured Project
          </h2>

          <div className="flex justify-center">
            <article className="relative overflow-hidden rounded-3xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-white/20 dark:border-zinc-700/40 shadow-xl p-10 max-w-2xl w-full">
              <div className="w-full h-72 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-2xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  
                  <h3 className="text-4xl font-bold text-white drop-shadow-lg">Recipe Tadka</h3>
                </div>
              </div>

              <h3 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Recipe Tadka</h3>

              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                An AI-powered recipe generator that creates personalized recipes based on your ingredients, dietary preferences, and cooking style. Available as both a web application and mobile app.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">AI-Powered</span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full">Web & Mobile</span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">Recipe Generator</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openModal}
                  className="flex-1 py-4 text-white font-semibold bg-gradient-to-r from-orange-500 to-red-500 rounded-full hover:from-orange-600 hover:to-red-600 transition"
                >
                  Live Demo →
                </button>
                <button
                  onClick={openModal}
                  className="flex-1 py-4 font-semibold border border-zinc-300 dark:border-zinc-600 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-full hover:bg-white/70 dark:hover:bg-zinc-800/70 transition"
                >
                  Source Code
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Render modal via portal */}
      {typeof document !== "undefined" &&
        createPortal(modal, document.getElementById("modal-root")!)}
    </>
  );
}