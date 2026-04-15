"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full bg-[radial-gradient(circle_at_75%_50%,_#1E1610_0%,_#14100A_100%)]">
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
            Senior Full Stack Developer
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
            className="font-heading text-6xl md:text-[80px] text-[#F0E8D8] leading-none font-semibold mb-8"
          >
            Siddharth
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
            <a href="/resume.pdf" className="px-8 py-4 border border-[#C47C3A] text-[#F0E8D8] font-sans font-semibold tracking-wide hover:bg-[#C47C3A]/10 transition-colors duration-400">
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
