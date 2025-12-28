"use client";

import React, { useState, useEffect } from "react";
import Icons from "@/components/common/icons";
import Link from "next/link";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { title: "Projects", icon: Icons.Briefcase, href: "#projects" },
    { title: "YouTube", icon: Icons.Youtube, href: "/youtube" },
    { title: "Instagram", icon: Icons.Instagram, href: "/instagram" },
    { title: "Contact", icon: Icons.Mail, href: "#contact" },
  ];

  return (
    <div className="sticky top-6 z-50 flex justify-center px-4">
      <nav
        className={`
          rounded-2xl
          bg-white/60 dark:bg-zinc-900/60
          backdrop-blur-lg
          border border-white/20 dark:border-zinc-700/40
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          px-6 py-2
          md:flex md:items-center
          w-full
          ${isScrolled
            ? "md:min-w-[960px] md:max-w-[960px] md:px-10 md:py-4 md:shadow-2xl"
            : "md:min-w-[640px] md:max-w-[640px] md:px-6 md:py-2 md:shadow-md"}
        `}
      >
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition"
        >
          Harsh
        </Link>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-1 justify-center">
          <ExpandableTabs
            tabs={tabs}
            activeColor="text-blue-600 dark:text-blue-400"
            className="bg-transparent border-0 shadow-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border border-white/20 dark:border-zinc-700/40"
          >
            <Icons.Menu size={18} />
          </button>

          {/* Desktop Collab Button */}
          <Link href="/collab" className=" md:block">
            <button className="rounded-full p-2 bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/30 hover:scale-105 transition">
              <Icons.Mail size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-500 ease-out
          ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <div className="rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border border-white/20 dark:border-zinc-700/40">
          <ul className="flex flex-col divide-y divide-white/10">
            {tabs.map((tab) => (
              <li key={tab.title}>
                <Link
                  href={tab.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition"
                >
                  <tab.icon size={18} />
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </nav>
    </div>
  );
}