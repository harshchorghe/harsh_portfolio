"use client";

import Navbar from "@/components/common/NavBar";
import React from "react";
import { div } from "three/tsl";

export default function InstagramPage() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/@_artistic__explorer__", "_blank");
  };

  const handleBackClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="mb-20">
      <Navbar />
    
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes borderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .stat-item {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .stat-item:nth-child(1) { animation-delay: 0.2s; opacity: 0; }
        .stat-item:nth-child(2) { animation-delay: 0.3s; opacity: 0; }
        .stat-item:nth-child(3) { animation-delay: 0.4s; opacity: 0; }
        
        .glass-card {
          background: rgba(20, 20, 20, 0.6);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .profile-ring {
          position: relative;
        }
        
        .profile-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045, #833ab4);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderRotate 3s linear infinite;
        }
        
        .profile-image {
          position: relative;
          overflow: hidden;
          border-radius: 50%;
        }
        
        .profile-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s infinite;
        }
        
        .instagram-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .instagram-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .instagram-btn:hover::before {
          width: 400px;
          height: 400px;
        }
        
        .instagram-btn:active {
          transform: scale(0.95);
        }
        
        .instagram-btn:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 20px 40px rgba(131, 58, 180, 0.4),
            0 0 80px rgba(253, 29, 29, 0.3);
        }
        
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 10s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #833ab4, #fd1d1d);
          top: -150px;
          right: -150px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 350px;
          height: 350px;
          background: linear-gradient(45deg, #fcb045, #fd1d1d);
          bottom: -120px;
          left: -120px;
          animation-delay: 3s;
        }
        
        .orb-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #405de6, #833ab4);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 6s;
        }
        
        .stat-glow {
          position: relative;
        }
        
        .stat-glow::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(135deg, rgba(131, 58, 180, 0.3), rgba(253, 29, 29, 0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .stat-glow:hover::before {
          opacity: 1;
        }
        
        .pulse-dot {
          animation: glow 2s ease-in-out infinite;
        }
        
        .back-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .back-btn:hover {
          transform: translateX(-5px);
          background: rgba(30, 30, 30, 0.7);
        }
        
        .back-btn:active {
          transform: translateX(-3px) scale(0.95);
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
      `}</style>
      
      {/* Grid pattern overlay */}
      <div className="grid-pattern"></div>
      
      {/* Floating background orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="back-btn fixed top-6 left-6 z-20 glass-card rounded-2xl p-4 hover:scale-105 transition-all duration-300 group"
      >
        <svg 
          className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      
      <div className="glass-card mt-20 rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full relative z-10 animate-scale-in">
        {/* Profile Image with animated ring */}
        <div className="flex justify-center mb-8">
          <div className="profile-ring">
            <div className="profile-image w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                <img
                  src="/portfolio/assets/igprofile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Username */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
            @_artistic__explorer__
          </h1>
         
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="stat-item stat-glow text-center glass-card rounded-2xl p-5 hover:scale-105 hover:bg-zinc-900/50 transition-all duration-300 cursor-pointer">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text">
              151
            </div>
            <div className="text-xs md:text-sm text-zinc-400 mt-1 font-medium">
              Posts
            </div>
          </div>
          
          <div className="stat-item stat-glow text-center glass-card rounded-2xl p-5 hover:scale-105 hover:bg-zinc-900/50 transition-all duration-300 cursor-pointer">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-br from-pink-400 to-pink-600 bg-clip-text">
              653
            </div>
            <div className="text-xs md:text-sm text-zinc-400 mt-1 font-medium">
              Followers
            </div>
          </div>
          
          <div className="stat-item stat-glow text-center glass-card rounded-2xl p-5 hover:scale-105 hover:bg-zinc-900/50 transition-all duration-300 cursor-pointer">
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-br from-orange-400 to-orange-600 bg-clip-text">
              745
            </div>
            <div className="text-xs md:text-sm text-zinc-400 mt-1 font-medium">
              Following
            </div>
          </div>
        </div>
        
        {/* Bio */}
        <div className="text-center mb-8 animate-fade-in-up px-4">
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
            <span className="text-lg">💻</span> Developer & Creator <span className="text-lg">✨</span><br/>
            Building beautiful experiences<br/>
            <span className="text-lg">📍</span> Creating magic on the web
          </p>
        </div>
        
        {/* Instagram Button */}
        <button
          onClick={handleInstagramClick}
          className="instagram-btn w-full py-4 md:py-5 rounded-2xl font-bold text-white text-base md:text-lg relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-[0_10px_40px_rgba(131,58,180,0.3)]"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Visit Instagram Profile
          </span>
        </button>
        
        {/* Decorative elements */}
        <div className="flex justify-center gap-3 mt-8 opacity-60">
          <div className="pulse-dot w-2 h-2 rounded-full bg-purple-500"></div>
          <div className="pulse-dot w-2 h-2 rounded-full bg-pink-500" style={{animationDelay: '0.3s'}}></div>
          <div className="pulse-dot w-2 h-2 rounded-full bg-orange-500" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>
    </div>
    </div>
  );
}