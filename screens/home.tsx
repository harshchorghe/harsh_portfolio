"use client";

import React, { useEffect, useState } from "react";

// Roles for typewriter effect
const roles = ["Full-Stack Developer", "Mobile App Developer"];

// Socials for typewriter effect
const socials = [
  { label: "YouTube", name: "explorush", color: "text-red-600 dark:text-red-500" },
  {
    label: "Instagram",
    name: "_artistic__explorer__",
    color: "text-pink-600 dark:text-pink-500",
  },
];

// TypeScript interface for MovingBorderButton props
interface MovingBorderButtonProps {
  children: React.ReactNode;
  href: string;
}

// Moving border button component
const MovingBorderButton: React.FC<MovingBorderButtonProps> = ({ children, href }) => (
  <a
    href={href}
    className="relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-blue-600 rounded-full overflow-hidden group hover:bg-blue-700 transition-all duration-300"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
);

// Main HomeScreen component
const HomeScreen: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [socialIndex, setSocialIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3800);
    const socialTimer = setInterval(() => setSocialIndex((i) => (i + 1) % socials.length), 2800);

    return () => {
      clearInterval(roleTimer);
      clearInterval(socialTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 py-12 sm:py-0"
    >
      {/* Background glow */}
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[520px] sm:h-[520px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-xs sm:text-sm uppercase text-zinc-500 dark:text-zinc-400 mb-3 sm:mb-4">
              Hi, my name is
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-zinc-900 dark:text-zinc-50">
              Harsh Chorghe
            </h1>

            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-3 sm:mb-4">
              I'm a{" "}
              <span
                key={roleIndex}
                className="text-blue-600 dark:text-blue-400 inline-block font-semibold"
              >
                {roles[roleIndex]}
              </span>
            </p>

            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-2">
              who builds beautiful apps
            </p>

            <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 sm:mb-10">
              Sharing cinematic travel stories on{" "}
              <span
                key={socialIndex}
                className={`font-semibold inline-block ${socials[socialIndex].color}`}
              >
                {socials[socialIndex].label}
              </span>
              <span className="hidden sm:inline"> — {socials[socialIndex].name}</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <MovingBorderButton href="#projects">View My Projects</MovingBorderButton>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-zinc-300 dark:border-zinc-700 px-8 py-4 font-semibold transition hover:scale-105 hover:shadow-xl hover:border-blue-500"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-2xl transition group-hover:bg-blue-500/20" />

              <img
                src="/temp.jpg"
                alt="Harsh Chorghe"
                className="relative rounded-2xl border-4 border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-105 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
