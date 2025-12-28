"use client";

import Navbar from "@/components/common/NavBar";
import React from "react";

export default function InstagramPage() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/@_artistic__explorer__?igsh=YjFkd2lqYXFtamU5");
  };

 

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-zinc-50">
     
      <Navbar />

    

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-md w-full mt-16">
          
          {/* Glass Card Container */}
          <div className="backdrop-blur-2xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
            
            {/* Profile Image with Glow */}
            <div className="relative mx-auto w-32 h-32 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <img
                  src="/portfolio/assets/igprofile.jpg"
                  alt="Instagram Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Username */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 bg-clip-text text-transparent">
                @_artistic__explorer__
              </h1>
              <p className="text-white/70 text-sm">Developer & Creator</p>
            </div>

            {/* Stats with Glass Cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold">151</div>
                <div className="text-white/60 text-xs">Posts</div>
              </div>
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold">653</div>
                <div className="text-white/60 text-xs">Followers</div>
              </div>
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold">745</div>
                <div className="text-white/60 text-xs">Following</div>
              </div>
            </div>

            {/* Bio */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
              <p className="text-white/90 text-sm leading-relaxed text-center">
                💻 Developer & Creator ✨<br />
                Building beautiful experiences on the web
              </p>
            </div>

            {/* Instagram Button with Gradient Glass */}
            <button
              onClick={handleInstagramClick}
              className="w-full py-4 bg-gradient-to-r from-purple-500/80 via-pink-500/80 to-orange-500/80 backdrop-blur-xl rounded-2xl font-semibold text-lg hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all duration-300 border border-white/20 shadow-lg hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Visit Instagram Profile
              </span>
            </button>
          </div>

          {/* Floating Elements */}
          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">Tap to explore more content</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}