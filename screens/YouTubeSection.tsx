import React from "react";
import YouTubeCard from "../components/home/ytcard"; // Adjust path if needed

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-32 bg-zinc-50 dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-zinc-900 dark:text-zinc-50 tracking-tight">
          My YouTube Channel
        </h2>

        {/* Glass Card Wrapper */}
        <div
          className="
            relative overflow-hidden rounded-3xl
            bg-white/60 dark:bg-zinc-900/60
            backdrop-blur-xl
            border border-white/20 dark:border-zinc-700/40
            shadow-2xl
            p-10 md:p-14
            transition-all duration-500
            hover:shadow-3xl  hover:hover:scale-105
          "
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent dark:via-zinc-800/5 pointer-events-none" />

          <div className="relative">
            {/* Description */}
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 font-medium max-w-3xl mx-auto">
                Welcome to <span className="font-bold text-red-600 dark:text-red-500">explorush</span> — my space for travel vlogs, cinematic reels, and capturing the beauty of the world through my lens.
              </p>
              <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
                From hidden gems and road trips to everyday adventures — I share inspiring stories, tips, and stunning visuals to fuel your wanderlust.
              </p>
            </div>

            {/* YouTube Card - Centered */}
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                <YouTubeCard
                  channelName="explorush"
                  channelUrl="https://www.youtube.com/@harsh_chorghe"
                  description="Travel vlogs, cinematic reels, and adventures around the world."
                />
              </div>
            </div>

            {/* Extra Teaser */}
            <div className="text-center mt-12">
              <p className="text-zinc-600 dark:text-zinc-400">
                New videos dropping regularly • Join the journey and explore with me!
              </p>
            </div>
          </div>
        </div>

        {/* Optional Footer Note */}
        <p className="text-center mt-12 text-zinc-500 dark:text-zinc-500 text-sm">
          Follow along for real adventures, real stories.
        </p>
      </div>
    </section>
  );
}