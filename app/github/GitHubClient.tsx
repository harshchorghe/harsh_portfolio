"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Star, GitFork, Calendar } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

type GitHubUser = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  blog?: string;
  company?: string;
  location?: string;
};

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
  updated_at: string;
};

type Props = {
  user: GitHubUser;
  repos: Repo[];
};

export default function GitHubClient({ user, repos }: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-zinc-50">
      {/* Back Button */}
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back</span>
      </button>

      {/* Header Banner */}
      <header className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
      </header>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10 pb-12">
        {/* Profile Card */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/30 dark:border-zinc-700/50 rounded-3xl p-8 shadow-2xl flex flex-col sm:flex-row items-center gap-8">
          <img
            src={user.avatar_url}
            alt={user.name || user.login}
            className="w-40 h-40 rounded-full border-8 border-white/60 dark:border-zinc-700/60 shadow-2xl transition-transform duration-500 hover:scale-110"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {user.name || user.login}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-2">
              @{user.login} • {user.followers} followers • {user.public_repos} repos
            </p>
            {user.bio && <p className="mt-4 text-zinc-700 dark:text-zinc-200">{user.bio}</p>}
            <div className="flex flex-wrap gap-4 mt-4 justify-center sm:justify-start text-sm">
              {user.location && <span className="flex items-center gap-1">Location: {user.location}</span>}
              {user.company && <span className="flex items-center gap-1">Company: {user.company}</span>}
              {user.blog && (
                <a href={user.blog} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Website
                </a>
              )}
            </div>
          </div>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-600 text-white rounded-full font-bold shadow-lg hover:bg-green-700 transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View on GitHub
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8">Repositories</h2>
          {repos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg border border-white/30 dark:border-zinc-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                    <div className="p-6">
                      <h3 className="font-bold text-xl flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {repo.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">
                        {repo.description || "No description"}
                      </p>
                      <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                            {repo.language}
                          </span>
                        )}
                        
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Updated {formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true })}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-500 py-12 text-xl">No repositories found!</p>
          )}
        </div>
      </div>
    </div>
  );
}