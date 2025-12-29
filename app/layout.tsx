// app/layout.tsx
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
  description: "Frontend developer building delightful, animated web experiences with modern tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
          relative
        `}
      >
        {/* Fixed Background Image */}
        <div className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-[url('/bg.jpeg')] -z-10" />

        {/* Fixed Overlay for readability (behind content & modals) */}
        <div className="fixed inset-0 bg-white/75 dark:bg-black/75 backdrop-blur-sm -z-10" />

        {/* Main Content - Above background */}
        <div className="relative z-0 min-h-screen">
          {children}
        </div>

        {/* Portal container for modals (strongly recommended) */}
        <div id="modal-root" />
      </body>
    </html>
  );
}