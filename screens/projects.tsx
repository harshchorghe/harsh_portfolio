import React from "react";

export default function ProjectsScreen() {
  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-50">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-zinc-600 dark:text-zinc-300">Short description of a project. Add links and animated previews here.</p>
          </article>

          <article className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-zinc-600 dark:text-zinc-300">Short description of another project. Use hover animations when ready.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
