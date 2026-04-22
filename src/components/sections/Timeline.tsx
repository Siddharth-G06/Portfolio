"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Timeline() {
  const entries = [
    {
      year: "Aug 2024 – Present",
      role: "B.Tech — Artificial Intelligence & Data Science",
      company: "Shiv Nadar University Chennai",
      description:
        "Pursuing a Bachelor of Technology in AI & Data Science with a CGPA of 9.00/10. Coursework spans machine learning, deep learning, data structures & algorithms, probability & statistics, and system design.",
    },
    {
      year: "Sep 2024 – Present",
      role: "B.Sc — Electronic Systems",
      company: "Indian Institute of Technology Madras",
      description:
        "Simultaneously pursuing a B.Sc in Electronic Systems through IIT Madras' online degree programme (CGPA: 8.18/10), deepening expertise in linear algebra, probability, and foundational engineering principles.",
    },
    {
      year: "2025",
      role: "Shell.ai Hackathon — Fuel Blend Prediction",
      company: "Global Competition · Rank 53rd",
      description:
        "Built ensemble regression models (XGBoost, LightGBM, CatBoost) with advanced feature engineering to predict fuel blend properties. Achieved 90.8% accuracy and ranked 53rd globally out of thousands of participants.",
    },
    {
      year: "2025",
      role: "Smart India Hackathon (SIH) — Participant",
      company: "National Hackathon",
      description:
        "Developed ML-based solutions for real-world government problem statements under competitive time constraints. Built systems combining structured tabular data with unstructured text pipelines using OCR and NLP.",
    },
  ];

  return (
    <section id="journey" className="relative py-24 bg-[#14100A] border-t border-[#352515]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[0.75rem] font-sans tracking-[0.2em] text-[#C47C3A] font-semibold uppercase block mb-4">
              THE JOURNEY
            </span>
            <h2 className="text-5xl md:text-6xl font-heading text-[#F0E8D8] leading-[1.1] font-medium">
              Education &<br/>Milestones
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {entries.map((entry, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16 group">
                <div className="md:w-1/4">
                  <span className="text-[#C47C3A] font-mono text-sm tracking-widest">{entry.year}</span>
                </div>
                <div className="md:w-3/4 pb-12 border-b border-[#352515] group-last:border-none group-last:pb-0 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-[-45px] top-1.5 w-2 h-2 rounded-full bg-[#352515] group-hover:bg-[#C47C3A] group-hover:shadow-[0_0_10px_#C47C3A] transition-all"></div>

                  <h3 className="text-2xl font-heading text-[#F0E8D8] mb-1">{entry.role}</h3>
                  <div className="text-[#A89070] font-sans text-sm mb-4 tracking-wide uppercase">{entry.company}</div>
                  <p className="text-[#8A7A6A] font-sans font-light leading-relaxed max-w-2xl">
                    {entry.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
