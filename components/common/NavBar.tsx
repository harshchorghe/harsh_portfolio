"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // INITIAL THEME SETUP – Runs only once on mount
  useEffect(() => {
    // Read from localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    let initialTheme: "light" | "dark";

    if (savedTheme) {
      initialTheme = savedTheme;
    } else {
      // Fallback to system preference
      initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    // Apply it (this triggers the second effect below)
    setTheme(initialTheme);
  }, []); // Empty dependency array → runs only once

  // SYNC THEME TO <html> AND localStorage – Runs whenever theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // SCROLL EFFECT FOR NAVBAR EXPANSION
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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "YouTube", href: "#youtube" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        px-8 py-4 rounded-2xl
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
      <div className="flex items-center justify-between gap-12">
        <a
          href="#home"
          className="text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition"
        >
          Harsh
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-sm font-medium text-zinc-700 dark:text-zinc-300
                hover:text-zinc-900 dark:hover:text-zinc-50
                transition-colors duration-300 relative
                after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5
                after:bg-zinc-900 dark:after:bg-zinc-50
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </a>
          ))}
        </div>

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