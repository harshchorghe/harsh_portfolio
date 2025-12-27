import React from "react";
import YouTubeCard from "../components/home/ytcard";

export default function YouTubeSection() {
  return (
    <section
      id="youtube"
      className="relative py-10 sm:py-10 lg:py-10 overflow-hidden"
    >
     
      {/* Soft glow (responsive size) */}
      <div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[280px] h-[280px]
          sm:w-[380px] sm:h-[380px]
          lg:w-[520px] lg:h-[520px]
          bg-red-500/10 blur-3xl rounded-full
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold text-center mb-12 sm:mb-16
            text-zinc-900 dark:text-zinc-50 tracking-tight
          "
        >
          My YouTube Channel
        </h2>

        {/* Glass Card */}
        <div
          className="
            relative overflow-hidden rounded-2xl sm:rounded-3xl
            bg-white/60 dark:bg-zinc-900/60
            backdrop-blur-xl
            border border-white/20 dark:border-zinc-700/40
            shadow-xl sm:shadow-2xl
            p-6 sm:p-8 md:p-12 lg:p-14
            transition-all duration-500
            hover:shadow-3xl hover:scale-[1.02]
          "
        >
          {/* Card overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent dark:via-zinc-800/5 pointer-events-none" />

          <div className="relative">
            {/* Description */}
            <div className="text-center mb-10 sm:mb-12">
              <p
                className="
                  text-lg sm:text-xl md:text-2xl
                  text-zinc-800 dark:text-zinc-100
                  font-medium max-w-3xl mx-auto
                "
              >
                Welcome to{" "}
                <span className="font-bold text-red-600 dark:text-red-500">
                  explorush
                </span>{" "}
                — my space for travel vlogs, cinematic reels, and capturing the
                beauty of the world through my lens.
              </p>

              <p
                className="
                  mt-4 sm:mt-6
                  text-base sm:text-lg
                  text-zinc-700 dark:text-zinc-300
                  max-w-2xl mx-auto
                "
              >
                From hidden gems and road trips to everyday adventures — I share
                inspiring stories, tips, and stunning visuals to fuel your
                wanderlust.
              </p>
            </div>

            {/* YouTube Card */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md">
                <YouTubeCard
                  channelName="explorush"
                  channelUrl="https://www.youtube.com/@harsh_chorghe"
                  description="Travel vlogs, cinematic reels, and adventures around the world."
                />
              </div>
            </div>

            {/* Teaser */}
            <div className="text-center mt-10 sm:mt-12">
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                New videos dropping regularly • Join the journey and explore
                with me!
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center mt-10 sm:mt-12 text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
          Follow along for real adventures, real stories.
        </p>
      </div>
    </section>
  );
}
