"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import s from "./ReasonsILoveYou.module.css";
import { reasonsILoveYou } from "@/data/content";

function Envelope({ title, note, idx }: { title: string; note: string; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className={s.envelopeWrapper}
    >
      {/* Scene container holds both the note (behind) and envelope (in front) */}
      <div
        className={`${s.envelopeScene} ${isOpen ? s.envelopeOpen : ""}`}
        style={{ "--idx": idx } as React.CSSProperties}
      >
        {/* Note — z-index 1, behind everything */}
        <div className={s.note}>
          <span className={s.noteTitle}>{title}</span>
          <p className={s.noteText}>{note}</p>
        </div>

        {/* Envelope — z-index 2+, fully covers the note */}
        <div className={s.envelope}>
          <div className={s.envelopeBack} />
          <div className={s.flapLeft} />
          <div className={s.flapRight} />
          <div className={s.flapBottom} />
          <div className={s.flapTop} />
        </div>
      </div>
      
      <button 
        className={s.interactBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? "Cerrar" : "Abrir"}
      </button>
    </motion.div>
  );
}

export default function ReasonsILoveYou() {
  const titleString = "Razones";
  const letters = titleString.split("");

  return (
    <section className="section container">
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={s.sectionTitle}
        >
          {letters.map((char, i) => {
            // randomize rotation and y per letter for the cutout aesthetic
            const rot = (Math.random() - 0.5) * 12;
            const dy = (Math.random() - 0.5) * 8;
            return (
              <span 
                key={i} 
                className={s.cutoutLetter}
                style={{ "--rot": `${rot}deg`, "--dy": `${dy}px` } as React.CSSProperties}
              >
                {char}
              </span>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.sectionSubtitle} text-script`}
        >
          Cartas que nunca mandé, pero que siempre sentí.
        </motion.p>
      </div>

      <div className={s.envelopesGrid}>
        {reasonsILoveYou.map((item, idx) => (
          <Envelope key={item.id} title={item.title} note={item.note} idx={idx} />
        ))}
      </div>
    </section>
  );
}
