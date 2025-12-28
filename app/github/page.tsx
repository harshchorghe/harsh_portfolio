// app/github/page.tsx

import Navbar from "@/components/common/NavBar";
import { Repo } from "@/app/types/github";
import GitHubClient from "./GitHubClient";

const USERNAME = "harshchorghe";

export const revalidate = 3600;

export default async function GitHubPage() {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`, {
      headers: { "User-Agent": "harshchorghe-portfolio" },
    }),
    fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`, {
      headers: { "User-Agent": "harshchorghe-portfolio" },
    }),
  ]);

  if (!userRes.ok || !reposRes.ok) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error loading GitHub data
      </div>
    );
  }

  const user = await userRes.json();
  const repos = await reposRes.json();

  // Optional: Sort by stars
  repos.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);

  return ( <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-zinc-50">
   
      {/* Your sticky Navbar */}
      <Navbar />

      {/* Main GitHub content */}
      <GitHubClient user={user} repos={repos} />
    </div>
  );
}