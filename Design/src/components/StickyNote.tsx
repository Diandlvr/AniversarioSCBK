import { motion } from "motion/react";
import React from "react";

interface StickyNoteProps {
  content: string;
  signature?: string;
  className?: string;
  rotation?: number;
}

export const StickyNote: React.FC<StickyNoteProps> = ({ 
  content, 
  signature, 
  className = "",
  rotation = 0 
}) => {
  return (
    <motion.div
      initial={{ rotate: rotation, opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, rotate: rotation / 1.5 }}
      className={`scrapbook-shadow p-6 bg-paper paper-texture relative max-w-sm ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Pin / Thumbtack */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#8b4513] shadow-md border-b border-black/20" />
      
      <p className="font-handwritten text-lg leading-relaxed text-archive-brown-dark italic">
        "{content}"
      </p>
      
      {signature && (
        <div className="text-right mt-4 font-handwritten text-archive-brown-dark opacity-60">
          — {signature}
        </div>
      )}
    </motion.div>
  );
};
