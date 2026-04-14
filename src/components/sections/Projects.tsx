"use client";

import { useState } from "react";
import { GitHubRepo } from "@/lib/github";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProjectCard } from "@/components/sections/ProjectCard";

interface ProjectsProps {
  repos: GitHubRepo[];
}

export function Projects({ repos }: ProjectsProps) {
  const [filter, setFilter] = useState("All");

  const displayRepos = repos && repos.length > 0 ? repos : Array(12).fill(null).map((_, i) => ({
    id: 1000 + i,
    name: `Example Project ${i + 1}`,
    full_name: `Siddharth-G06/Example-Project-${i + 1}`,
    description: "A placeholder description for the project showcasing the design system and typography scale used across the portfolio.",
    topics: ["react", "typescript"],
    html_url: "#",
    homepage: i % 3 === 0 ? "#" : null,
    stargazers_count: Math.floor(Math.random() * 100),
    forks_count: Math.floor(Math.random() * 20),
    language: "TypeScript",
    updated_at: new Date().toISOString()
  })) as GitHubRepo[];

  const filters = ["All", "Web", "AI", "Tools", "Open Source"];

  return (
    <section id="work" className="relative pb-24 overflow-hidden pt-20">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
        
        <ScrollReveal>
          <header className="mb-12">
            <span className="text-[0.75rem] font-sans tracking-[0.2em] text-[#C47C3A] font-semibold uppercase block mb-4">
              SELECTED WORK
            </span>
            <h2 className="text-6xl md:text-7xl font-heading text-[#F0E8D8] leading-[1.1] font-medium max-w-2xl">
              Things I've<br/>Built
            </h2>
          </header>
        </ScrollReveal>

        {/* Filter Strip */}
        <ScrollReveal delay={0.2}>
          <div className="flex gap-8 mb-12 text-[#8A7A6A] font-sans font-light tracking-wide text-sm border-b border-[#352515] pb-4 overflow-x-auto whitespace-nowrap">
            {filters.map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`transition-colors relative ${
                  filter === f 
                    ? "text-[#C47C3A] after:content-[''] after:absolute after:-bottom-[17px] after:left-0 after:w-full after:h-[1px] after:bg-[#C47C3A]" 
                    : "hover:text-[#F0E8D8]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* CSS Grid */}
        <div 
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          {displayRepos.map((repo, idx) => {
            // First two projects with highest stars will span 2 columns if the grid allows
            const isFeatured = idx < 2;
            const gridClass = isFeatured ? "md:col-span-2 lg:col-span-2 xl:col-span-2" : "";

            return (
              <ProjectCard
                key={repo.name + idx}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                topics={repo.topics}
                html_url={repo.html_url}
                homepage={repo.homepage}
                className={gridClass}
                index={idx}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
