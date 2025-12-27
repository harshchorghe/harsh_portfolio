import React from "react";
import Icons from "@/components/common/icons";

export default function ContactScreen() {
  return (
    <section id="contact" className="py-32 ">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-zinc-900 dark:text-zinc-50 tracking-tight">
          Get in Touch
        </h2>

        {/* Glass Contact Card */}
        <div
          className="
            relative overflow-hidden rounded-3xl
            bg-white/60 dark:bg-zinc-900/60
            backdrop-blur-xl
            border border-white/20 dark:border-zinc-700/40
            shadow-2xl
            p-10 md:p-14
            transition-all duration-500
            hover:shadow-3xl hover:hover:scale-105
          "
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent dark:via-zinc-800/5 pointer-events-none" />

          <div className="relative text-center space-y-8">
            <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 font-medium max-w-2xl mx-auto">
              Whether it&apos;s a collaboration on a project, a development opportunity, or just to say hi — I&apos;d love to hear from you!
            </p>

            {/* Primary Email CTA */}
            <div className="my-10">
              <a
                href="mailto:harshchorghe7@gmail.com" // ← Replace with your real email
                className="
                  inline-flex items-center gap-3
                  rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900
                  px-8 py-4 text-lg font-semibold
                  hover:opacity-90 hover:scale-105
                  transition-all duration-300 shadow-lg
                "
              >
                <Icons.Mail className="w-6 h-6" />
                Email Me
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-400">Connect with me elsewhere:</p>

              <div className="flex flex-wrap justify-center gap-6">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@harsh_chorghe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3 px-6 py-3
                    rounded-2xl bg-red-600/10 dark:bg-red-600/20
                    border border-red-600/30 dark:border-red-600/40
                    text-red-600 dark:text-red-400
                    hover:scale-110 hover:bg-red-600/20 dark:hover:bg-red-600/30
                    transition-all duration-300
                  "
                >
                  <Icons.Youtube className="w-5 h-5" />
                  <span className="font-medium">explorush</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/@_artistic__explorer__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3 px-6 py-3
                    rounded-2xl bg-pink-600/10 dark:bg-pink-600/20
                    border border-pink-600/30 dark:border-pink-600/40
                    text-pink-600 dark:text-pink-400
                    hover:scale-110 hover:bg-pink-600/20 dark:hover:bg-pink-600/30
                    transition-all duration-300
                  "
                >
                  <Icons.Instagram className="w-5 h-5" />
                  <span className="font-medium">@artistic__explorer__</span>
                </a>

                {/* LinkedIn (add your link) */}
                <a
                  href="https://www.linkedin.com/in/harsh-chorghe-4b65b231b/" // ← Replace with your LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3 px-6 py-3
                    rounded-2xl bg-blue-600/10 dark:bg-blue-600/20
                    border border-blue-600/30 dark:border-blue-600/40
                    text-blue-600 dark:text-blue-400
                    hover:scale-110 hover:bg-blue-600/20 dark:hover:bg-blue-600/30
                    transition-all duration-300
                  "
                >
                  <Icons.Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>

                {/* Portfolio / Website (optional) */}
                {/* <a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-800/10 dark:bg-zinc-700/20 border border-zinc-800/30 dark:border-zinc-600/40 text-zinc-800 dark:text-zinc-300 hover:scale-110 transition-all duration-300"
                >
                  <Icons.Globe className="w-5 h-5" />
                  <span className="font-medium">Website</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center mt-12 text-zinc-500 dark:text-zinc-500 text-sm">
          © 2025 Harsh Chorghe. All rights reserved.
        </p>
      </div>
    </section>
  );
}