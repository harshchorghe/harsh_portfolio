import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Chorghe | Portfolio",
  description:
    "Frontend developer building delightful, animated web experiences with modern tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent dark mode flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  
                  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
        `}
      >
        {/* 🌍 Global Background */}
        <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/bg.jpeg')]">
          {/* 🎨 Overlay for readability */}
          <div className="min-h-screen bg-white/75 dark:bg-black/75 backdrop-blur-sm">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
