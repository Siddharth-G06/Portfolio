"use client";

import { motion } from "framer-motion";
import { GitFork } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  html_url: string;
  homepage?: string | null;
  className?: string;
  index?: number;
}

export function ProjectCard({
  name,
  description,
  language,
  stars,
  forks,
  topics,
  html_url,
  homepage,
  className = "",
  index = 0
}: ProjectCardProps) {
  // Combine language and topics
  const techStack = [language, ...(topics || [])]
    .filter(Boolean)
    .slice(0, 4);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -4,
        borderColor: "#C47C3A",
        boxShadow: "0 8px 30px rgba(196, 124, 58, 0.18)"
      }}
      className={`bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-saturate-[1.8] border-l-[3px] border-l-[#C47C3A] rounded-[6px] p-6 flex flex-col justify-between transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-[22px] font-heading text-[#F0E8D8] font-medium leading-tight">
          {name}
        </h3>
        <p className="font-sans font-light text-[14px] text-[#8A7A6A] leading-relaxed line-clamp-2">
          {description || "No description provided for this repository."}
        </p>
        
        {techStack.length > 0 && (
          <div className="mt-2 text-[#A89070] font-mono text-[11px] uppercase tracking-[0.1em] flex flex-wrap items-center gap-1.5 leading-relaxed">
            {techStack.map((tech, i) => (
              <span key={i} className="flex items-center">
                {tech}
                {i < techStack.length - 1 && <span className="mx-1.5">·</span>}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-end mt-8">
        <div className="flex gap-4 text-xs font-sans">
          <div className="flex items-center gap-1.5">
            <span className="text-[#C47C3A]">✦</span>
            <span className="text-[#F0E8D8] font-light">{stars}</span>
          </div>
          {forks > 0 && (
            <div className="flex items-center gap-1.5 text-[#8A7A6A]">
              <GitFork className="w-3.5 h-3.5" />
              <span className="font-light">{forks}</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-4">
          <a href={html_url} target="_blank" rel="noreferrer" className="text-[#C47C3A] font-sans font-medium hover:text-[#F0E8D8] transition-colors text-[13px]">
            GitHub ↗
          </a>
          {homepage && (
            <a href={homepage} target="_blank" rel="noreferrer" className="text-[#C47C3A] font-sans font-medium hover:text-[#F0E8D8] transition-colors text-[13px]">
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
