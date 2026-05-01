"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import s from "./MonthlyPhotos.module.css";
import { monthlyPhotos } from "@/data/content";

/* Rotaciones predefinidas para efecto orgánico scrapbook */
const rotations = [-2.5, 1.8, -1.2, 2.4, -0.8, 1.5, -2, 0.9, -1.6, 2.1, -1];

export default function MonthlyPhotos() {
  return (
    <section className="section container">
      <div style={{ textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`${s.sectionTitle} text-display`}
        >
          Nuestros Meses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.sectionSubtitle} text-script`}
        >
          Un recuerdo por cada mes juntos. Junio 2025 — Abril 2026.
        </motion.p>
      </div>

      <div className={s.monthsGrid}>
        {monthlyPhotos.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40, rotate: rotations[idx] * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotations[idx] }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className={s.polaroid}
            style={{ "--rotation": `${rotations[idx]}deg` } as React.CSSProperties}
          >
            {/* Washi tape decoration */}
            <div className={s.washiTape} />

            <div className={s.photoFrame}>
              <Image
                src={item.photoSrc}
                alt={`${item.month} ${item.year}`}
                width={400}
                height={400}
                className={s.photo}
              />
            </div>

            <div className={s.polaroidCaption}>
              <span className={`${s.monthLabel} text-display`}>
                {item.month}
              </span>
              <span className={`${s.yearLabel} text-mono`}>{item.year}</span>
              <p className={`${s.captionText} text-script`}>{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
