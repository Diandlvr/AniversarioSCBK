"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import s from "./Hero.module.css";
import { config } from "@/data/content";

export default function Hero() {
  const { hero, names } = config;

  return (
    <section className={s.hero}>
      <div className={s.photoWrapper}>
        <Image
          src={hero.photoSrc}
          alt={hero.photoAlt}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
      <div className={s.overlay} />

      {/* Ambient Rose Glow */}
      <div className={`${s.ambientGlow} ${s.glowLeft}`} />
      <div className={`${s.ambientGlow} ${s.glowRight}`} />

      <div className={s.content}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.2 }}
          className={`${s.tagline} text-sans`}
        >
          {hero.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${s.title} text-display`}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          className={`${s.subtitle} text-script`}
        >
          {names.yours} & {names.hers} — {hero.subtitle}
        </motion.p>
      </div>

      <div className={s.scrollIndicator} />
    </section>
  );
}
