import { motion } from "motion/react";
import React from "react";

interface PolaroidProps {
  image: string;
  caption: string;
  date: string;
  number?: string;
  rotation?: number;
  className?: string;
}

export const Polaroid: React.FC<PolaroidProps> = ({ 
  image, 
  caption, 
  date, 
  number, 
  rotation = 0,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ rotate: rotation, scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, rotate: rotation / 2, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`relative scrapbook-shadow p-4 bg-paper paper-texture ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Tape Effect */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-archive-cream/30 backdrop-blur-sm rotate-1 shadow-sm opacity-60 pointer-events-none" />
      
      <div className="overflow-hidden bg-gray-200 aspect-[4/5] mb-4 relative rounded-[2px] shadow-inner">
        <img 
          src={image} 
          alt={caption} 
          className="w-full h-full object-cover grayscale-[0.2] sepia-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay" />
      </div>
      
      <div className="font-handwritten text-archive-brown-dark leading-tight">
        <h3 className="text-xl font-semibold mb-0.5">{caption}</h3>
        <div className="flex justify-between items-end border-t border-archive-brown-dark/10 pt-2">
          <p className="text-sm italic opacity-80">{date}</p>
          {number && <span className="text-[10px] font-sans tracking-widest opacity-40">{number}</span>}
        </div>
      </div>
      
      {/* Decorative curling corner effect (simulated) */}
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-archive-brown/10 to-transparent pointer-events-none" />
    </motion.div>
  );
};
