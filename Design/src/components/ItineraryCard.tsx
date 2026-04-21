import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

interface ItineraryItem {
  title: string;
  description: string;
}

interface ItineraryCardProps {
  title: string;
  items: ItineraryItem[];
  className?: string;
  rotation?: number;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({ 
  title, 
  items, 
  className = "",
  rotation = 0 
}) => {
  return (
    <motion.div
      initial={{ rotate: rotation, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`scrapbook-shadow p-8 bg-paper paper-texture relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Decorative Stitching */}
      <div className="absolute inset-2 border-[1px] border-dashed border-archive-brown/10 pointer-events-none" />
      
      {/* Pin */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="w-4 h-4 bg-archive-brown-dark rounded-full shadow-lg" />
        <div className="w-1 h-3 bg-archive-brown-dark/30 mx-auto -mt-1" />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 mb-6 border-b border-archive-brown-dark/10 pb-2">
          <MapPin className="w-4 h-4 text-archive-brown-dark opacity-60" />
          <h2 className="font-serif text-archive-brown-dark tracking-widest text-sm font-bold uppercase">{title}</h2>
        </div>

        <ul className="space-y-6">
          {items.map((item, idx) => (
            <li key={idx} className="group">
              <h3 className="font-editorial italic text-archive-brown-dark text-lg font-medium">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-archive-brown-dark opacity-70 mt-1 leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Coffee stains or age effects can be added here with bg-images */}
      <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full border border-archive-brown/5 pointer-events-none" />
    </motion.div>
  );
};
