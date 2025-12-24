// app/youtube/page.tsx
import Parser from "rss-parser";
import YoutubeClient from "./YoutubeClient";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
};

async function getVideos(): Promise<Video[]> {
  const parser = new Parser();

  const CHANNEL_ID = "UCTuXyiNCQ4nhidOjoB3wv5A"; // Harsh Chorghe

  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  try {
    const feed = await parser.parseURL(feedUrl);

    // RSS feeds are usually newest first, but sort explicitly
    const sortedItems = feed.items.sort((a: any, b: any) =>
      new Date(b.pubDate!).getTime() - new Date(a.pubDate!).getTime()
    );

    return sortedItems.slice(0, 30).map((item: any) => {
      const videoId = item.id.replace("yt:video:", "");
      return {
        id: videoId,
        title: item.title || "Untitled",
        thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        publishedAt: new Date(item.pubDate!).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      };
    });
  } catch (error) {
    console.error("RSS fetch failed:", error);
    return [];
  }
}

export default async function YoutubePage() {
  const videos = await getVideos();

  // Channel metadata (you can also fetch this dynamically if needed)
  const channelInfo = {
    title: "Harsh Chorghe",
    handle: "@Harsh_Chorghe",
    profilePic:
      "https://yt3.googleusercontent.com/LbecRd4tkdmXEMvw2Kj3jHVJy9qo7jQZERahu5tStxDWqq8otikH1gkFPblhAjKQhCb9XvTyhg=s88-c-k-c0x00ffffff-no-rj",
    banner:
      "https://yt3.googleusercontent.com/-oj3mUpGf61CjtjNTuX-CzoyU29KhwgPsAqgD8w1gh8e_qSblgVKBKgs53OSeeSDZ_KQ31AVtA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    subscribers: "160",
    videoCount: videos.length,
  };

  return (
    <YoutubeClient videos={videos} channelInfo={channelInfo} />
  );
}