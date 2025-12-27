"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/moving-border";
import ResponseForm from "@/components/home/ResponseForm";

const roles = [
  "Full-Stack Developer",
  "Mobile App Developer",
];

const socials = [
  { label: "YouTube", name: "explorush", color: "text-red-600 dark:text-red-500" },
  { label: "Instagram", name: "_artistic__explorer__", color: "text-pink-600 dark:text-pink-500" },
];

export default function HomeScreen() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [socialIndex, setSocialIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3800);

    const socialTimer = setInterval(() => {
      setSocialIndex((prev) => (prev + 1) % socials.length);
    }, 2800);

    return () => {
      clearInterval(roleTimer);
      clearInterval(socialTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-blue-500/10 blur-3xl rounded-full animate-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6  text-center">
        <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mb-4 mt-6 tracking-wider uppercase opacity-0 animate-fade-up">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-zinc-900 dark:text-zinc-50 opacity-0 animate-fade-up animate-delay-1">
          Harsh Chorghe
        </h1>

        {/* ROLE ANIMATION */}
        <p className="text-xl md:text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300 max-w-4xl mx-auto mb-4 leading-relaxed font-medium opacity-0 animate-fade-up animate-delay-2">
          I&apos;m a{" "}
          <span
            key={roleIndex}
            className="text-blue-600 dark:text-blue-400 inline-block animate-changing-text"
          >
            {roles[roleIndex]}
          </span>{" "}
          who builds beautiful apps
        </p>

        {/* SOCIAL ANIMATION */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-up animate-delay-3">
          Sharing cinematic travel stories on{" "}
          <span
            key={socialIndex}
            className={`font-semibold inline-block animate-changing-text ${socials[socialIndex].color}`}
          >
            {socials[socialIndex].label} — {socials[socialIndex].name}
          </span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-up animate-delay-4">
          <Button borderRadius="2rem" duration={3000} as="a" href="#projects">
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
        <div className="mt-12 animate-bounce opacity-70">
          <div className="w-6 h-10 mx-auto border-2 border-zinc-400 dark:border-zinc-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
