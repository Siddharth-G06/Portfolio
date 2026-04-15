"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export function ToastNotification() {
  const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);

  useEffect(() => {
    const handleShowToast = (e: Event) => {
      const customEvent = e as CustomEvent;
      const id = Date.now();
      setMessages((prev) => [...prev, { id, text: customEvent.detail.message }]);
      
      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      }, 5000);
    };

    window.addEventListener("show-toast", handleShowToast);
    return () => window.removeEventListener("show-toast", handleShowToast);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 text-[#F0E8D8] px-4 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-saturate-[1.8] flex items-center gap-3 font-sans max-w-sm pointer-events-auto rounded-[4px]"
          >
            <div className="w-5 h-5 rounded-full bg-[#C47C3A]/20 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-[#C47C3A]" />
            </div>
            <p className="text-sm font-light leading-snug">{msg.text}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
