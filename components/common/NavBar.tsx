"use client";

import React, { useState, useEffect } from "react";
import Icons from "@/components/common/icons";
import Link from 'next/link';
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);





  // Scroll effect (kept exactly as you wanted)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const tabs = [
    { title: "Home", icon: Icons.Home, href: "#home" },
    { title: "Projects", icon: Icons.Briefcase, href: "#projects" },
    { title: "YouTube", icon: Icons.Youtube, href: "#youtube" },
    { title: "Contact", icon: Icons.Mail, href: "#contact" },
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
          ? "w-auto min-w-250 shadow-2xl" 
          : "w-auto min-w-200 shadow-md"
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

        {/* Right-side actions */}
        <div className="flex items-center gap-3">
          <Link href="/collab" aria-label="Open collaboration form" title="Collaborate">
            <button className="rounded-full p-2 bg-white/8 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/30 text-zinc-900 dark:text-zinc-50 hover:scale-105 transition">
              <Icons.Mail size={18} />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}