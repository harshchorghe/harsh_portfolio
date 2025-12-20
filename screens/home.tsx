import React from "react";
import YouTubeCard from "../components/home/p1";

export default function HomeScreen() {
	return (
		<section id="home" className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
			<div className="max-w-screen px-8 py-24 text-center">
				<p className="text-sm text-zinc-500 mb-4">Hi, my name is</p>
				<h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">
					Harsh Chorghe
				</h1>
				<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
					I build delightful, animated web experiences. I focus on smooth UX,
					performance and accessibility. This is a simple placeholder screen you
					can expand with Framer Motion, Lottie or GSAP later.
				</p>

				<div className="flex items-center justify-center gap-4">
					<a
						className="inline-block rounded-full bg-zinc-900 text-white px-6 py-3 font-medium hover:opacity-90 transition"
						href="#projects"
					>
						View projects
					</a>
					<a
						className="inline-block rounded-full border border-zinc-200 px-6 py-3 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 transition"
						href="#contact"
					>
						Contact
					</a>
				</div>
			</div>

			{/* YouTube card inserted below the hero CTAs */}
			<div className="mt-8 flex justify-center">
				<YouTubeCard
					channelName="explorush"
					channelUrl="https://www.youtube.com/@harsh_chorghe?si=KytGqQM9GqaHCYkb"
					description="Short videos about web development, UI and animations."
				/>
			</div>
            
        
		</section>
        
        
	);
}

