"use client";
import React, { useEffect, useState } from "react";
import { HomeScreen, AboutScreen, ProjectsScreen, ContactScreen } from "../../screens";
import YouTubeCard from "../home/p1";

export default function Scroller() {
  const [showYT, setShowYT] = useState(false);

  useEffect(() => {
    const home = document.getElementById("home");
    if (!home) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // show the YouTube card when the home section is NOT visible
        setShowYT(!entry.isIntersecting);
      },
      { root: null, threshold: 0.12 }
    );

    observer.observe(home);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative bg-zinc-50 dark:bg-black"
      style={{ height: "100vh", overflowY: "auto", WebkitOverflowScrolling: "touch", scrollSnapType: "y mandatory" }}
    >
      <div style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
        <HomeScreen />
      </div>

      <div style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
        <AboutScreen />
      </div>

      <div style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
        <ProjectsScreen />
      </div>

      <div style={{ scrollSnapAlign: "start", minHeight: "100vh" }}>
        <ContactScreen />
      </div>

      {/* Fixed YouTube card that slides in/out */}
      <div
        aria-hidden={showYT ? "false" : "true"}
        className="fixed right-6 top-6 z-50 transition-transform duration-500"
        style={{ transform: showYT ? "translateY(0)" : "translateY(-140%)" }}
      >
        <YouTubeCard
          channelName="Harsh"
          channelUrl="https://www.youtube.com/@yourchannel"
          description="Short videos about web development, UI and animations."
        />
      </div>
    </div>
  );
}
