import React from "react";

export default function ContactScreen() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Get in touch</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mb-6">Interested in working together or have a question? Drop me a message.</p>

        <a
          href="mailto:you@example.com"
          className="inline-block rounded-full bg-zinc-900 text-white px-6 py-3 font-medium hover:opacity-90 transition"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
