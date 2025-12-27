import React from "react";

export default function ProjectsScreen() {
  return (
    <section id="projects" className="py-10 ">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-zinc-50">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Glassmorphism Card */}
          <article
            className="
              relative overflow-hidden rounded-2xl
              bg-white/60 dark:bg-zinc-900/60
              backdrop-blur-md
              border border-white/20 dark:border-zinc-700/40
              shadow-xl
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
            "
          >
            {/* Optional subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent dark:via-zinc-800/5" />

            <div className="relative p-8">
              {/* Placeholder for project image/thumbnail */}
              <div className="w-full h-48 bg-linear-to-br from-blue-400 to-purple-500 rounded-xl mb-6" />

              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">
                Project One
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                A modern web application built with Next.js, Tailwind CSS, and Framer Motion. Features smooth animations and responsive design.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo →
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </article>

          {/* Repeat similar cards for other projects */}
          <article
            className="
              relative overflow-hidden rounded-2xl
              bg-white/60 dark:bg-zinc-900/60
              backdrop-blur-md
              border border-white/20 dark:border-zinc-700/40
              shadow-xl
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent dark:via-zinc-800/5" />

            <div className="relative p-8">
              <div className="w-full h-48 bg-linear-to-br from-emerald-400 to-teal-500 rounded-xl mb-6" />

              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">
                Project Two
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Interactive dashboard with real-time data visualization using Recharts and TypeScript.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo →
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </article>

          {/* Add more cards as needed */}
          <article
            className="
              relative overflow-hidden rounded-2xl
              bg-white/60 dark:bg-zinc-900/60
              backdrop-blur-md
              border border-white/20 dark:border-zinc-700/40
              shadow-xl
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent dark:via-zinc-800/5" />

            <div className="relative p-8">
              <div className="w-full h-48 bg-linear-to-br from-pink-400 to-orange-500 rounded-xl mb-6" />

              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">
                Project Three
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Creative landing page with advanced animations using GSAP and Three.js.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo →
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}