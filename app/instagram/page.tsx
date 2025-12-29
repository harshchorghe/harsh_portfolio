"use client";

import React from "react";
import { Users, Image } from "lucide-react";

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-zinc-900 to-black text-white">
      {/* Header Banner with Instagram Gradient */}
      <header className="relative h-64 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 backdrop-blur-3xl opacity-30" />
      </header>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10 pb-12">
        {/* Profile Card - iPhone Glass Style */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col sm:flex-row items-center gap-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img
              src="/insta.jpg"
              alt="Instagram Profile"
              className="relative w-40 h-40 rounded-full border-4 border-white/30 shadow-2xl transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Artistic Explorer
            </h1>
            <p className="text-lg text-white/70 mt-2">
              @_artistic__explorer__ • 653 followers • 151 posts
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              💻 Developer & Creator ✨<br />
              Building beautiful experiences on the web
            </p>
            <div className="flex flex-wrap gap-6 mt-4 justify-center sm:justify-start text-sm text-white/60">
              <span className="flex items-center gap-2 backdrop-blur-xl bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Users className="w-4 h-4" />
                745 Following
              </span>
              <span className="flex items-center gap-2 backdrop-blur-xl bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Image className="w-4 h-4" />
                151 Posts
              </span>
            </div>
          </div>
          <a
            href="https://www.instagram.com/@_artistic__explorer__?igsh=YjFkd2lqYXFtamU5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-500/80 via-pink-500/80 to-orange-500/80 backdrop-blur-xl text-white rounded-full font-bold shadow-lg hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transform transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
          >
            View on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}