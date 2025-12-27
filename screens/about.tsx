import React from "react";

export default function AboutScreen() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-zinc-900 dark:text-zinc-50 tracking-tight">
          About Me
        </h2>

        {/* Main Content - Glass Card */}
        <div
          className="
            relative overflow-hidden rounded-3xl
            bg-white/60 dark:bg-zinc-900/60
            backdrop-blur-xl
            border border-white/20 dark:border-zinc-700/40
            shadow-2xl
            p-8 sm:p-10 md:p-12
            transition-all duration-500
            hover:shadow-3xl hover:scale-105
          "
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent dark:via-zinc-800/5 pointer-events-none" />

          <div className="relative space-y-8">
            {/* Intro */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-800 dark:text-zinc-100 font-medium">
              Hey, I&apos;m Harsh — a frontend & mobile developer by day, and a passionate content creator by heart.
            </p>

            {/* Developer Side */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I build beautiful, performant applications using modern technologies like{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                Flutter, React, Next.js, React Native, JavaScript, Express, HTML & CSS
              </span>
              . I&apos;ve completed internships as both a{" "}
              <strong>Full-Stack Developer</strong> and{" "}
              <strong>Mobile Developer</strong>, working on real-world products.
            </p>

            {/* Creator Side */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Beyond coding, I love capturing adventures. On YouTube{" "}
              <a
                href="https://www.youtube.com/@explorush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                explorush
              </a>{" "}
              I share travel vlogs and reels. You can also find me on Instagram{" "}
              <a
                href="https://instagram.com/_artistic__explorer__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-400 font-semibold hover:underline"
              >
                @_artistic__explorer__
              </a>
              .
            </p>

            {/* Closing */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 italic">
              Whether I&apos;m writing clean code or filming a new adventure, I
              believe in creating meaningful experiences.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-zinc-600 dark:text-zinc-400">
            Let&apos;s connect — whether it&apos;s about code, travel, or collaboration!
          </p>
        </div>
      </div>
    </section>
  );
}
