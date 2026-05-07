"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import s from "./Hero.module.css";
import { config } from "@/data/content";

export default function Hero() {
  const { hero, names } = config;

  return (
    <section className={s.hero}>
      {/* Full-bleed photo */}
      <div className={s.photoWrapper}>
        <Image
          src={hero.photoSrc}
          alt={hero.photoAlt}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* Gradient overlay */}
      <div className={s.overlay} />
      <div className={s.grainOverlay} />

      {/* Typography anchored to bottom */}
      <div className={s.content}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`${s.tagline} text-mono`}
        >
          {hero.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`${s.title} text-display`}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className={`${s.subtitle} text-script`}
        >
          {names.yours} & {names.hers} — {hero.subtitle}
        </motion.p>
      </div>

      <div className={s.scrollIndicator} />
    </section>
  );
}
