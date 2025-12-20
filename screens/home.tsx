import React from "react";
import { Button } from "@/components/ui/moving-border";

export default function HomeScreen() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-100/50 to-transparent dark:via-zinc-900/50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-24 text-center">
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mb-4 mt-6 tracking-wider uppercase">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-8 text-zinc-900 dark:text-zinc-50">
          Harsh Chorghe
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          I&apos;m a <span className="text-blue-600 dark:text-blue-400">Full-Stack & Mobile Developer</span> who builds beautiful apps
          <br className="hidden md:block" />
          and a <span className="text-red-600 dark:text-red-500">Travel Content Creator</span> capturing adventures on YouTube.
        </p>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
          Crafting performant, user-friendly applications with Flutter, React, Next.js & React Native — while exploring the world and sharing cinematic travel stories through my channel{" "}
          <a
            href="https://www.youtube.com/@explorush"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red-600 dark:text-red-500 hover:underline"
          >
            explorush
          </a>
          .
        </p>

        {/* CTA Buttons - Moving border only on the primary (left) button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            borderRadius="2rem"
            duration={3000}
            as="a"
            href="#projects"
          >
            View My Projects
          </Button>

          <a
            href="#contact"
            className="
              inline-flex items-center gap-3
              rounded-full border-2 border-zinc-300 dark:border-zinc-700
              bg-transparent text-zinc-900 dark:text-zinc-100
              px-8 py-4 text-lg font-semibold
              hover:bg-zinc-100 dark:hover:bg-zinc-800
              hover:scale-105 hover:shadow-2xl
              transition-all duration-300 backdrop-blur-sm
            "
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-10 animate-bounce">
          <div className="w-6 h-10 mx-auto border-2 border-zinc-400 dark:border-zinc-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}