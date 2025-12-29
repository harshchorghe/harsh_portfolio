import React from "react";

// TypeScript interface for YouTubeCard props
interface YouTubeCardProps {
  channelName: string;
  channelUrl: string;
  description: string;
}

// Simple YouTube Card Component
const YouTubeCard: React.FC<YouTubeCardProps> = ({ channelName, channelUrl, description }) => {
  return (
    <a
      href={channelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 border-2 border-red-200 dark:border-red-800 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-400 dark:hover:border-red-600">
        {/* YouTube Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        </div>

        {/* Channel Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            @{channelName}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            {description}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold group-hover:bg-red-700 transition-colors">
            <span>Visit Channel</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

// Main YouTube Section
const YouTubeSection: React.FC = () => {
  return (
    <section
      id="youtube"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Soft glow */}
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 text-zinc-900 dark:text-zinc-50 tracking-tight">
          My YouTube Channel
        </h2>

        {/* Glass Card */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-white/20 dark:border-zinc-700/40 shadow-xl sm:shadow-2xl p-5 sm:p-8 md:p-10 lg:p-14 transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] sm:hover:scale-[1.02]">
          {/* Card overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent dark:via-zinc-800/5 pointer-events-none" />

          <div className="relative">
            {/* Description */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-800 dark:text-zinc-100 font-medium max-w-3xl mx-auto leading-relaxed">
                Welcome to{" "}
                <span className="font-bold text-red-600 dark:text-red-500">
                  explorush
                </span>{" "}
                — my space for travel vlogs, cinematic reels, and capturing the
                beauty of the world through my lens.
              </p>

              <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                From hidden gems and road trips to everyday adventures — I share
                inspiring stories, tips, and stunning visuals to fuel your
                wanderlust.
              </p>
            </div>

            {/* YouTube Card */}
            <div className="flex justify-center">
              <div className="w-full max-w-[340px] sm:max-w-md">
                <YouTubeCard
                  channelName="explorush"
                  channelUrl="https://www.youtube.com/@harsh_chorghe"
                  description="Travel vlogs, cinematic reels, and adventures around the world."
                />
              </div>
            </div>

            {/* Teaser */}
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                New videos dropping regularly • Join the journey and explore
                with me!
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
          Follow along for real adventures, real stories.
        </p>
      </div>
    </section>
  );
};

export default YouTubeSection;
