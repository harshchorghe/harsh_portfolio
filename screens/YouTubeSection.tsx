import React from "react";
import YouTubeCard from "../components/home/ytcard"; // Adjust path if needed

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-24 bg-zinc-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            My YouTube Channel
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I create short, high-quality videos about modern web development, creative UI designs,
            animations with Framer Motion, Tailwind tricks, and more.
          </p>
        </div>

        {/* YouTube Card - Centered */}
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <YouTubeCard
              channelName="explorush"
              channelUrl="https://www.youtube.com/@harsh_chorghe"
              description="Short videos about web development, UI and animations."
            />
          </div>
        </div>

        {/* Optional: Extra CTA or teaser */}
        <div className="text-center mt-12">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            New videos every week • Tips, tutorials, and behind-the-scenes of cool web effects
          </p>
        </div>
      </div>
    </section>
  );
}