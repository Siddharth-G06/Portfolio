"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Connect() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Create a custom event to trigger the toast
      const event = new CustomEvent('show-toast', { 
        detail: { message: "Message sent successfully. I'll get back to you soon." } 
      });
      window.dispatchEvent(event);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[#14100A] overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(196,124,58,0.1)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="text-[0.75rem] font-sans tracking-[0.2em] text-[#C47C3A] font-semibold uppercase block mb-4">
              COMMISSION A PROJECT
            </span>
            <h2 className="text-5xl md:text-7xl font-heading text-[#F0E8D8] leading-[1.1] font-medium mb-8">
              Let's craft <br/>something <span className="italic text-[#C47C3A]">enduring.</span>
            </h2>
            <p className="text-[#8A7A6A] font-sans font-light text-lg mb-12">
              Currently accepting thoughtful projects and meaningful collaborations for {new Date().getFullYear()}.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..." 
                className="flex-1 bg-[#1E1610] border border-[#352515] text-[#F0E8D8] px-6 py-4 outline-none focus:border-[#C47C3A] transition-colors font-sans font-light placeholder:text-[#5A4028]"
              />
              <button 
                type="submit" 
                className="bg-[#C47C3A] text-[#14100A] px-8 py-4 font-semibold tracking-wide hover:bg-[#ffb77b] transition-colors"
              >
                Reach Out
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
