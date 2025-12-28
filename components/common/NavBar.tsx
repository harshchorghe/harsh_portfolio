"use client";

import React, { useState, useEffect } from "react";
import Icons from "@/components/common/icons";
import Link from "next/link";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check if user has seen the tour
    try {
      const hasSeenTour = localStorage.getItem("hasSeenNavbarTour");
      if (!hasSeenTour) {
        setTimeout(() => setShowTour(true), 1000);
      }
    } catch (error) {
      console.error("localStorage error:", error);
      // If localStorage fails, show tour anyway
      setTimeout(() => setShowTour(true), 1000);
    }
  }, []);

  const handleStartTour = () => {
    setShowTour(true);
    setTourStep(0);
  };

  const tabs = [
    { title: "Projects", icon: Icons.Briefcase, href: "#projects" },
    { title: "YouTube", icon: Icons.Youtube, href: "/youtube" },
    { title: "Instagram", icon: Icons.Instagram, href: "/instagram" },
    { title: "Contact", icon: Icons.Mail, href: "#contact" },
  ];

  const tourSteps = [
    {
      target: "logo",
      title: "Home",
      description: "Click here anytime to return to the home page",
      position: "bottom"
    },
    {
      target: "tabs",
      title: "Navigation",
      description: "Explore different sections - Projects, YouTube, Instagram, and Contact",
      position: "bottom"
    },
    {
      target: "collab",
      title: "Let's Collaborate",
      description: "Ready to work together? Click here to get in touch!",
      position: "bottom"
    }
  ];

  const handleNextStep = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      handleSkipTour();
    }
  };

  const handleSkipTour = () => {
    setShowTour(false);
    setTourStep(0);
    try {
      localStorage.setItem("hasSeenNavbarTour", "true");
    } catch (error) {
      console.error("localStorage error:", error);
    }
  };

  const currentStep = tourSteps[tourStep];

  return (
    <>
      {/* Tour Overlay */}
      {showTour && (
        <>
          {/* Dark overlay - separate from navbar */}
          <div 
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm animate-in fade-in duration-500" 
            onClick={handleSkipTour}
          />
          
          {/* Spotlight highlight on current element */}
          <div 
            className={`fixed transition-all duration-500 ease-out z-[105] pointer-events-none ${
              currentStep.target === "logo" 
                ? "top-[36px] w-[80px] h-[46px] left-[50%] md:left-[calc(50%-330px+24px)]" 
                : currentStep.target === "tabs"
                ? "top-[30px] left-[50%] -translate-x-[50%] w-[360px] h-[52px] hidden md:block"
                : "top-[32px] w-[46px] h-[46px] left-[50%] md:left-[calc(50%+326px-70px)]"
            } ${currentStep.target !== "tabs" ? "-translate-x-1/2 md:translate-x-0" : ""}`}
          >
            {/* Glowing border effect */}
            <div className={`absolute inset-0 ${currentStep.target === "collab" ? "rounded-full" : "rounded-xl"} border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.8)] animate-pulse`} />
            <div className={`absolute inset-[-8px] ${currentStep.target === "collab" ? "rounded-full" : "rounded-xl"} border-2 border-blue-400/40`} />
          </div>

          {/* Tour tooltip */}
          <div 
            className={`fixed pointer-events-auto transition-all duration-500 ease-out z-[100] ${
              currentStep.target === "logo"
                ? "top-[100px] left-[50%] -translate-x-[50%] md:left-[calc(50%-300px)] md:translate-x-0"
                : currentStep.target === "tabs"
                ? "top-[100px] left-[50%] -translate-x-[50%]"
                : "top-[100px] left-[50%] -translate-x-[50%] md:left-[calc(50%+100px)] md:translate-x-0"
            }`}
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-2xl border border-zinc-200 dark:border-zinc-700 max-w-sm animate-in slide-in-from-top-4 duration-500 mx-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    {tourStep + 1}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {currentStep.title}
                  </h3>
                </div>
                <button
                  onClick={handleSkipTour}
                  className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                {currentStep.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {tourSteps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === tourStep 
                          ? "w-8 bg-blue-500" 
                          : "w-1.5 bg-zinc-300 dark:bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  {tourStep > 0 && (
                    <button
                      onClick={() => setTourStep(tourStep - 1)}
                      className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition font-medium"
                    >
                      Previous
                    </button>
                  )}
                  <button
                    onClick={handleSkipTour}
                    className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition"
                  >
                    Skip
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium"
                  >
                    {tourStep === tourSteps.length - 1 ? "Got it!" : "Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="sticky top-6 z-[100] flex justify-center px-4">
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
            <div id="logo">
              <Link
                href="/"
                className="text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition"
              >
                Harsh
              </Link>
            </div>

            {/* Desktop Tabs */}
            <div id="tabs" className="hidden md:flex flex-1 justify-center">
              <ExpandableTabs
                tabs={tabs}
                activeColor="text-blue-600 dark:text-blue-400"
                className="bg-transparent border-0 shadow-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Tour Button */}
              <button
                onClick={handleStartTour}
                className="p-2 rounded-full transition hover:bg-white/10 dark:hover:bg-zinc-800/40"
                title="Start Tour"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full border border-white/20 dark:border-zinc-700/40"
              >
                <Icons.Menu size={18} />
              </button>

              {/* Desktop Collab Button */}
              <div id="collab">
                <Link href="/collab" className="md:block">
                  <button className="rounded-full p-2 bg-white/10 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/30 hover:scale-105 transition">
                    <Icons.Mail size={18} />
                  </button>
                </Link>
              </div>
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
    </>
  );
}