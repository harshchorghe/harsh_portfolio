"use client";

import React, { useState, useEffect } from "react";
import Icons from "@/components/common/icons";
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

    
      </div>
    </nav>
  );
}