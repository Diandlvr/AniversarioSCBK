"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import s from "./PhotoBooth.module.css";
import { photoBoothStrip, galleryPolaroids, config } from "@/data/content";

export default function PhotoBooth() {
  return (
    <section className="section container">
      {/* Section Header */}
      <div style={{ textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`${s.sectionTitle} text-display`}
        >
          Photo Booth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.sectionSubtitle} text-script`}
        >
          Cuatro flashes, mil memorias. Pegada con cinta adhesiva a nuestro libro.
        </motion.p>
      </div>

      <div className={s.layout}>
        {/* ── Photo Strip (left) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={s.stripWrapper}
        >
          {/* Stitch border around the strip */}
          <div className={s.stripCard}>
            {/* Top tape */}
            <div className={s.stripTapeTop} />

            {/* Pin */}
            <div className={s.stripPin}>
              <div className={s.stripPinHead} />
            </div>

            <div className={s.strip}>
              {photoBoothStrip.map((photo, idx) => (
                <motion.div
                  key={idx}
                  className={s.stripFrame}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: "cover", filter: "grayscale(0.3) sepia(0.35) contrast(1.1)" }}
                  />
                  <div className={s.frameOverlay} />
                </motion.div>
              ))}
            </div>

            {/* Strip footer */}
            <div className={s.stripFooter}>
              <span className={`${s.stripDate} text-mono`}>
                {config.names.yours} & {config.names.hers}
              </span>
              <span className={`${s.stripSerial} text-mono`}>NO. 001</span>
            </div>
          </div>
        </motion.div>

        {/* ── Gallery Polaroids (right) ── */}
        <div className={s.gallery}>
          {galleryPolaroids.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              transition={{ type: "spring", stiffness: 120, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`${s.polaroid} paper-texture`}
              style={{ transform: `rotate(${photo.rotate}deg)` }}
            >
              {/* Washi tape on top */}
              <div className={`${s.washiTape} ${idx % 2 === 0 ? s.washiLeft : s.washiRight}`} />

              <div className={s.polaroidPhoto}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover", filter: "grayscale(0.15) sepia(0.25)" }}
                />
                <div className={s.polaroidPhotoOverlay} />
              </div>

              <p className={`${s.polaroidCaption} text-script`}>
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
