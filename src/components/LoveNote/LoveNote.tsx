"use client";

import { motion } from "framer-motion";
import s from "./LoveNote.module.css";
import { loveNoteContent } from "@/data/content";

export default function LoveNote() {
  return (
    <section className={s.sectionWrapper}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={s.paperSheet}
      >
        <h3 className={`${s.salutation} text-script`}>
          {loveNoteContent.salutation}
        </h3>
        
        <p className={`${s.bodyText} text-script`}>
          {loveNoteContent.body}
        </p>

        <span className={`${s.signOff} text-script`}>
          {loveNoteContent.signOff}
        </span>
        <span className={`${s.signature} text-display`}>
          {loveNoteContent.signature}
        </span>
      </motion.div>
    </section>
  );
}
