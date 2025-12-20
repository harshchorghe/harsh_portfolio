import React from "react";

type Props = {
	channelName?: string;
	channelUrl?: string;
	description?: string;
};

export default function YouTubeCard({
	channelName = "explorush",
	channelUrl = "https://youtube.com/@harsh_chorghe?si=KytGqQM9GqaHCYkb",
	description = "Videos about web development, UI and animations.",
}: Props) {
	return (
		<div className="flex items-center mr-10px gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
			<a
				href={channelUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`${channelName} on YouTube`}
				className="flex-none"
			>
				{/* Square YouTube-style logo built with inline SVG so no external asset needed */}
				<div className="w-16 h-16 rounded-md bg-red-600 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						className="w-7 h-7"
						role="img"
						aria-hidden="true"
					>
						<path d="M10 8.3v7.4L16.5 12 10 8.3z" />
						<path d="M23.5 7.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1-2-.2-5-.2-5-.2h-.1s-3 .01-5 .22c-.4.07-1.3.08-2.1 1C1 5.6 1 7.2 1 7.2S.9 9 .9 10.8v2.4C.9 15.1 1 16.8 1 16.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.1 7.5.2 7.5.2s3 0 5-.2c.4-.07 1.3-.08 2.1-1 .6-.6.8-2.3.8-2.3s.1-1.7.1-3.5v-2.4c0-1.8-.1-3.5-.1-3.5z" />
					</svg>
				</div>
			</a>

			<div className="flex-1">
				<a
					href={channelUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
				>
					{channelName}
				</a>
				<p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{description}</p>
			</div>

			<div className="flex-none">
				<a
					href={channelUrl + (channelUrl.includes("?") ? "&" : "?") + "sub_confirmation=1"}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block rounded-md bg-red-600 text-white px-4 py-2 font-medium hover:opacity-90 transition"
				>
					Subscribe
				</a>
			</div>
		</div>
	);
}
