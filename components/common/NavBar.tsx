"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Home, Briefcase, Youtube, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll effect (kept exactly as you wanted)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const tabs = [
    { title: "Home", icon: Home, href: "#home" },
    { title: "Projects", icon: Briefcase, href: "#projects" },
    { title: "YouTube", icon: Youtube, href: "#youtube" },
    { title: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <nav
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        px-8 py-1 rounded-2xl
        bg-white/60 dark:bg-zinc-900/60
        backdrop-blur-lg
        border border-white/20 dark:border-zinc-700/40
        shadow-lg
        transition-all duration-1000 ease-out
        ${isScrolled 
          ? "w-auto min-w-[1000px] shadow-2xl" 
          : "w-auto min-w-[800px] shadow-md"
        }
      `}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition"
        >
          Harsh
        </a>

        {/* Expandable Tabs - Center */}
        <div className="flex-1 flex justify-center">
          <ExpandableTabs
            tabs={tabs}
            activeColor="text-blue-600 dark:text-blue-400"
            className="bg-transparent border-0 shadow-none"
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative p-2.5 rounded-xl bg-white/40 dark:bg-zinc-800/40 backdrop-blur border border-white/30 dark:border-zinc-700/50 hover:scale-110 transition-all duration-300 group"
          aria-label="Toggle theme"
        >
          <Sun
            className={`h-5 w-5 text-yellow-500 absolute inset-0 m-auto transition-all duration-500 group-hover:rotate-180
              ${theme === "dark" ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
          />
          <Moon
            className={`h-5 w-5 text-indigo-400 absolute inset-0 m-auto transition-all duration-500 group-hover:-rotate-12
              ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"}`}
          />
        </button>
      </div>
    </nav>
  );
}