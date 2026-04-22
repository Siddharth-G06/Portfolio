"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GitHubSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedInSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full bg-[radial-gradient(circle_at_75%_50%,_#1E1610_0%,_#14100A_100%)]">
      {/* Social Links Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute left-8 bottom-12 hidden lg:flex flex-col gap-6 items-center z-20"
      >
        <div className="w-px h-24 bg-[#C47C3A]/30 mb-2"></div>
        <a 
          href="https://github.com/Siddharth-G06" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#8A7A6A] hover:text-[#C47C3A] transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <GitHubSVG />
        </a>
        <a 
          href="https://www.linkedin.com/in/siddharthganesh06/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#8A7A6A] hover:text-[#C47C3A] transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <LinkedInSVG />
        </a>
        <a 
          href="https://www.instagram.com/physer_siddhu/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#8A7A6A] hover:text-[#C47C3A] transition-colors duration-300"
          aria-label="Instagram Profile"
        >
          <InstagramSVG />
        </a>
      </motion.div>
      {/* Subtle geometric line */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(30deg, transparent 49.9%, #352515 49.9%, #352515 50.1%, transparent 50.1%)",
        }}
      ></div>

      <div className="max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-20 mt-16 relative z-10">
        
        {/* Availability Badge - Absolute Top Right of Hero Container */}
        <div className="absolute top-0 right-8 md:top-10 md:right-10 flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-saturate-[1.8] rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C47C3A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C47C3A]"></span>
          </span>
          <span className="font-sans font-light text-sm text-[#8A7A6A]">Available for roles</span>
        </div>

        {/* Left Side Content */}
        <div className="md:col-span-7 flex flex-col items-start order-2 md:order-1 pt-12 md:pt-0">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-[#C47C3A] font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-6"
          >
            AI & DS Student · Seeking ML Roles
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            className="font-heading text-6xl md:text-[80px] text-[#F0E8D8] leading-none font-semibold mb-8"
          >
            Siddharth G
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="font-sans font-light text-[#8A7A6A] text-[18px] leading-[1.9] max-w-xl line-clamp-2 md:line-clamp-none mb-10"
          >
            Crafting the architecture of the permanent web. Bridging the gap between timeless design principles and performant modern engineering.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="w-full h-px bg-[#C47C3A]/40 origin-left mb-10"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
          >
            <a href="#work" className="px-8 py-4 bg-[#C47C3A] text-[#26190F] font-sans font-semibold tracking-wide hover:bg-[#A89070] transition-colors duration-400">
              View My Work
            </a>
            <a 
              href="https://drive.google.com/file/d/1oGPXqQwOgd9gxkfD4NpQNEDt0BNT8lWj/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#C47C3A] text-[#F0E8D8] font-sans font-semibold tracking-wide hover:bg-[#C47C3A]/10 transition-colors duration-400"
            >
              Resume ↓
            </a>
          </motion.div>
          
        </div>

        {/* Right Side Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="md:col-span-5 flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative w-full max-w-md aspect-[3/4] flex justify-center items-center">
            
            {/* The Photo Container */}
            <div 
              className="relative w-full h-full overflow-hidden bg-[radial-gradient(circle_at_center,_#1E1610_0%,_#14100A_100%)] shadow-[0_0_60px_rgba(196,124,58,0.13),_0_0_120px_rgba(196,124,58,0.07)] border border-[#C47C3A]/40"
              style={{
                clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)"
              }}
            >
              <Image 
                src="/ProfilePic.jpeg"
                alt="Siddharth - Developer Profile"
                fill
                className="object-cover object-center w-full h-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
                priority
              />
              
              {/* Pseudo-element faint caramel gradient overlay at bottom to root photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100A] via-[#14100A]/40 to-transparent pointer-events-none"></div>
              {/* Very faint caramel overlay to unify the tone further */}
              <div className="absolute inset-0 bg-[#C47C3A]/5 pointer-events-none"></div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
