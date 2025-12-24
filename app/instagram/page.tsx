"use client";

import React from "react";
import Icons from "@/components/common/icons"; // If needed for icons

export default function InstagramPage() {
  // Sample data for posts (replace with your actual posts)
  const posts = [
    { id: 1, image: "/placeholder-post-1.jpg" },
    { id: 2, image: "/placeholder-post-2.jpg" },
    // Add more as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-zinc-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile header with glass card */}
        <div className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg border border-white/20 dark:border-zinc-700/40 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src="/your-profile-pic.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-white/50 dark:border-zinc-700/50 shadow-md"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold">harsh_instagram</h1>
            <div className="flex justify-center md:justify-start gap-8 mt-2">
              <div><strong>50</strong> posts</div>
              <div><strong>10K</strong> followers</div>
              <div><strong>500</strong> following</div>
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Your bio here. Developer, creator, etc.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Follow
            </button>
          </div>
        </div>

        {/* Posts grid */}
        <div className="mt-8 grid grid-cols-3 gap-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="aspect-square bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-white/20 dark:border-zinc-700/40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img src={post.image} alt="Post" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}