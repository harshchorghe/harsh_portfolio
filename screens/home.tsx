"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";

const roles = ["Full-Stack Developer", "Mobile App Developer"];

const socials = [
  { label: "YouTube", name: "explorush", color: "text-red-600 dark:text-red-500" },
  {
    label: "Instagram",
    name: "_artistic__explorer__",
    color: "text-pink-600 dark:text-pink-500",
  },
];

export default function HomeScreen() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [socialIndex, setSocialIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      3800
    );
    const socialTimer = setInterval(
      () => setSocialIndex((i) => (i + 1) % socials.length),
      2800
    );

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
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-blue-500/10 blur-3xl rounded-full animate-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-sm uppercase text-zinc-500 dark:text-zinc-400 mb-4 opacity-0 animate-fade-up">
              Hi, my name is
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-zinc-900 dark:text-zinc-50 opacity-0 animate-fade-up animate-delay-1">
              Harsh Chorghe
            </h1>

            <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-4 opacity-0 animate-fade-up animate-delay-2">
              I'm a{" "}
              <span
                key={roleIndex}
                className="text-blue-600 dark:text-blue-400 animate-changing-text inline-block"
              >
                {roles[roleIndex]}
              </span>{" "}
              who builds beautiful apps
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 opacity-0 animate-fade-up animate-delay-3">
              Sharing cinematic travel stories on{" "}
              <span
                key={socialIndex}
                className={`font-semibold animate-changing-text inline-block ${socials[socialIndex].color}`}
              >
                {socials[socialIndex].label} — {socials[socialIndex].name}
              </span>
            </p>

            <div className="flex gap-6 justify-center md:justify-start opacity-0 animate-fade-up animate-delay-4">
              <Button borderRadius="2rem" duration={3000} as="a" href="#projects">
                View My Projects
              </Button>

              <a
                href="#contact"
                className="rounded-full border-2 px-8 py-4 font-semibold transition hover:scale-105 hover:shadow-xl"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-2xl transition group-hover:bg-blue-500/20" />

              <Image
                src="/temp.jpg"
                alt="Harsh Chorghe"
                width={420}
                height={560}
                sizes="(max-width: 768px) 90vw, 420px"
                priority
                className="relative rounded-2xl border-4 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
