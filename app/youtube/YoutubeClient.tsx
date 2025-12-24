// app/youtube/YoutubeClient.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router
import { ArrowLeft } from "lucide-react";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
};

type ChannelInfo = {
  title: string;
  handle: string;
  profilePic: string;
  banner: string;
  subscribers: string;
  videoCount: number;
};

type Props = {
  videos: Video[];
  channelInfo: ChannelInfo;
};

export default function YoutubeClient({ videos, channelInfo }: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-zinc-50">
      {/* Back Button - Matches your glassmorphism theme */}
      <button
        onClick={() => router.push("/")}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 px-5 py-3 
                   bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl 
                   border border-white/30 dark:border-zinc-700/50 
                   rounded-full shadow-xl 
                   hover:shadow-2xl hover:scale-105 active:scale-95 
                   transition-all duration-300 
                   text-zinc-800 dark:text-zinc-100 font-medium"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Banner */}
      <header
        className="relative h-64 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${channelInfo.banner}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </header>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10 pb-12">
        {/* Profile Card */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/30 dark:border-zinc-700/50 rounded-3xl p-8 shadow-2xl flex flex-col sm:flex-row items-center gap-8">
          <img
            src={channelInfo.profilePic}
            alt={channelInfo.title}
            className="w-32 h-32 rounded-full border-4 border-white/60 dark:border-zinc-700/60 shadow-xl transition-transform duration-500 hover:scale-110"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {channelInfo.title}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-2">
              {channelInfo.handle} • {channelInfo.subscribers} subscribers •{" "}
              {channelInfo.videoCount} videos
            </p>
          </div>
          <a
            href="https://www.youtube.com/@Harsh_Chorghe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-red-600 text-white rounded-full font-bold shadow-lg hover:bg-red-700 transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Subscribe
          </a>
        </div>

        {/* Videos Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8">Videos</h2>
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {videos.map((video, index) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg border border-white/30 dark:border-zinc-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                        {video.publishedAt}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-500 py-12 text-xl">
              No videos found. Check your Channel ID!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}