/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Settings, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { ItineraryCard } from "./components/ItineraryCard";
import { Polaroid } from "./components/Polaroid";
import { StickyNote } from "./components/StickyNote";

export default function App() {
  const navLinks = ["Our Story", "Galleries", "Timeline", "Collections"];

  const itineraryItems = [
    {
      title: "Morning Walk",
      description: "Through the old botanical gardens. Everything was damp and quiet."
    },
    {
      title: "The Café",
      description: "Corner of 5th and Main. Two espressos. You talked about the stars."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden pb-32">
      {/* Navigation Header */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6">
        <div className="font-editorial italic text-2xl tracking-tight text-white/90">
          The Archive of Us
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-sans tracking-wide transition-all hover:text-archive-rose ${
                link === "Timeline" ? "border-b border-archive-rose px-1" : "opacity-60"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 opacity-60">
          <button className="hover:text-archive-rose transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="hover:text-archive-rose transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-12 relative">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-7xl md:text-8xl text-archive-rose mb-6"
          >
            First Moments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-handwritten text-xl italic opacity-70"
          >
            A curated collection of beginnings, carefully stitched into memory.
          </motion.p>
        </div>

        {/* Scrapbook Content Grid - Absolute/Fixed positioning feel via relative grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative min-h-[1200px]">
          
          {/* Main Encounter Polaroid */}
          <div className="md:col-span-5 md:mt-10">
            <Polaroid 
              image="https://picsum.photos/seed/old-house/600/800"
              caption="The Encounter"
              date="October, 1918. The old botanical gardens."
              number="001"
              rotation={-2}
              className="max-w-sm"
            />
            {/* Dried Flower Decoration (Visual anchor) */}
            <img 
              src="https://picsum.photos/seed/dried-flower/200/300?blur=1" 
              className="absolute -right-4 bottom-4 w-40 h-auto opacity-30 select-none pointer-events-none rotate-45 grayscale"
              alt=""
            />
          </div>

          {/* Top Right Sticky Note */}
          <div className="md:col-span-4 md:col-start-8 md:mt-24">
            <StickyNote 
              content="It wasn't just the coffee; it was the way the light caught the steam rising from the cup. A quiet sort of chaos."
              signature="A."
              rotation={1.5}
            />
          </div>

          {/* Itinerary */}
          <div className="md:col-span-4 md:mt-[-50px]">
            <ItineraryCard 
              title="The Itinerary"
              items={itineraryItems}
              rotation={-1}
              className="max-w-xs"
            />
          </div>

          {/* Details Polaroid (Middle Right) */}
          <div className="md:col-span-5 md:col-start-7 md:-mt-20 relative">
            <Polaroid 
              image="https://picsum.photos/seed/street-corner/600/400"
              caption="Corner of 5th and Main."
              date="The first afternoon."
              rotation={1}
            />
            {/* "Details" Tag */}
            <div className="absolute -left-10 top-1/2 p-2 px-4 bg-archive-brown-dark scrapbook-shadow -rotate-2">
              <span className="font-editorial italic text-sm text-archive-rose">Details</span>
            </div>
          </div>

          {/* Small Final Polaroid */}
          <div className="md:col-span-3 md:col-start-9 md:-mt-10">
            <Polaroid 
              image="https://picsum.photos/seed/coffee-cup/400/400"
              caption="First cup together."
              date="A. & B."
              rotation={3}
              className="max-w-[200px]"
            />
          </div>

        </div>
      </main>

      {/* Decorative Border Line Footer */}
      <footer className="mt-32 border-t border-dashed border-archive-cream/20 pt-12 pb-24 text-center">
        <p className="font-handwritten text-sm italic opacity-50 mb-6">
          With love, forever archived.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-sans opacity-30">
          <a href="#" className="hover:opacity-100 transition-opacity">The Legacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Vellum</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Curation</a>
        </div>
      </footer>

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-archive-rose/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-archive-rose/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
