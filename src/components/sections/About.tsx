"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StatCounter } from "@/components/animations/StatCounter";

export function About() {
  return (
    <section id="about" className="relative py-32 bg-[#1E1610] border-t border-[#352515]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-center">
          <ScrollReveal>
            <div>
              <span className="text-[0.75rem] font-sans tracking-[0.2em] text-[#C47C3A] font-semibold uppercase block mb-4">
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-[#F0E8D8] leading-[1.2] font-semibold mb-8 italic">
                Curiosity ↔ <span className="text-[#C47C3A]">Exploration</span> ↔ Growth
              </h2>
              <div className="space-y-6 text-[#8A7A6A] font-sans font-light leading-relaxed text-lg">
                <p>
                  I’m Siddharth, someone who enjoys building the logic behind intelligent systems. My focus lies in backend engineering and machine learning, where I design scalable pipelines, experiment with models, and refine systems for performance and clarity.
                </p>
                <p>
                  I prefer understanding problems from first principles, keeping solutions clean, modular, and purposeful. Most of my work revolves around creating data-driven systems that are not just technically strong, but genuinely useful in real-world contexts.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-[#352515]">
                <div>
                  <div className="text-4xl font-heading text-[#F0E8D8] mb-2 flex items-center">
                    <StatCounter end={3} suffix="+" />
                  </div>
                  <div className="text-[#8A7A6A] font-sans text-sm tracking-wide uppercase">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-heading text-[#F0E8D8] mb-2 flex items-center">
                    <StatCounter end={15} suffix="+" />
                  </div>
                  <div className="text-[#8A7A6A] font-sans text-sm tracking-wide uppercase">Projects Delivered</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-saturate-[1.8] p-10 h-full flex flex-col justify-center rounded-[4px]">
              <h3 className="text-2xl font-heading text-[#F0E8D8] mb-6">Core Competencies</h3>
              
              <div className="space-y-8">
                {[
                  { title: "Machine Learning", skills: "Experimentation, Applied AI Models, LLM Integrations, NLP" },
                  { title: "Backend Systems", skills: "Python, Next.js, API Architecture, Relational Databases" },
                  { title: "Data Pipelines", skills: "System Scalability, Processing Jobs, Task Orchestration" },
                ].map((area, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[#C47C3A] font-serif text-xl italic">0{i + 1}</span>
                      <h4 className="text-[#F0E8D8] font-sans font-medium tracking-wide">{area.title}</h4>
                    </div>
                    <p className="text-[#8A7A6A] font-sans font-light text-sm pl-9 transition-colors group-hover:text-[#A89070]">
                      {area.skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
