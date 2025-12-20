import React from "react";

export default function AboutScreen() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">About</h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I&apos;m a frontend developer who loves crafting polished interfaces. Use
          this section to describe your background, skills and approach. Keep
          it concise and link to a resume or LinkedIn for details.
        </p>
      </div>
    </section>
  );
}
