"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import s from "./FirstMoments.module.css";
import { firstMoments, config } from "@/data/content";
import { PHOTO_BLUR } from "@/lib/blur";

export default function FirstMoments() {
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
          First Moments
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.sectionSubtitle} text-script`}
        >
          A curated collection of beginnings, carefully stitched into memory.
        </motion.p>
      </div>

      {/* Scrapbook Grid */}
      <div className={s.grid}>
        {/* ── Main Polaroid (large) ── */}
        <div className={s.mainPolaroid}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className={`${s.polaroid} paper-texture`}
            style={{ transform: "rotate(-2deg)" }}
          >
            <div className={s.tape} />
            <div className={s.photoBox}>
              <Image
                src={firstMoments[0].photoSrc}
                alt={firstMoments[0].photoAlt}
                fill
                placeholder="blur"
                blurDataURL={PHOTO_BLUR}
                style={{ objectFit: "cover", filter: "grayscale(0.2) sepia(0.3)" }}
              />
              <div className={s.photoOverlay} />
            </div>
            <div style={{ fontFamily: "var(--font-script)", color: "var(--c-ink)" }}>
              <h3 className={s.polaroidCaption}>{firstMoments[0].label}</h3>
              <div className={s.polaroidMeta}>
                <p className={`${s.polaroidDate} text-script`}>{firstMoments[0].date}. {firstMoments[0].caption}</p>
                <span className={`${s.polaroidNumber} text-sans`}>001</span>
              </div>
            </div>
            <div className={s.cornerCurl} />
          </motion.div>
        </div>

        {/* ── Sticky Note ── */}
        <div className={s.noteArea}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className={`${s.stickyNote} paper-texture`}
            style={{ transform: "rotate(1.5deg)" }}
          >
            <div className={s.pin} />
            <p className={`${s.stickyText} text-script`}>
              &ldquo;{firstMoments[0].caption}&rdquo;
            </p>
            <div className={`${s.stickySignature} text-script`}>
              — {config.names.yours.charAt(0)}.
            </div>
          </motion.div>
        </div>

        {/* ── Itinerary Card ── */}
        <div className={s.itineraryArea}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`${s.itinerary} paper-texture`}
            style={{ transform: "rotate(-1deg)" }}
          >
            {/* Inner stitch border rendered by CSS ::before */}
            <div className={s.itineraryPin}>
              <div className={s.itineraryPinHead} />
              <div className={s.itineraryPinNeedle} />
            </div>

            <div style={{ marginTop: "1rem" }}>
              <div className={s.itineraryHeader}>
                <svg className={s.itineraryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h3 className={`${s.itineraryTitle} text-mono`}>The Itinerary</h3>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {firstMoments.slice(0, 2).map((moment, idx) => (
                  <li key={idx}>
                    <h4 className={`${s.itineraryItemTitle} text-editorial`} style={{ fontStyle: "italic" }}>
                      {moment.label}
                    </h4>
                    <p className={`${s.itineraryItemDesc} text-sans`}>
                      {moment.caption}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={s.coffeeStain} />
          </motion.div>
        </div>

        {/* ── Second Polaroid ── */}
        {firstMoments[1] && (
          <div className={s.secondPolaroid}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className={`${s.polaroid} paper-texture`}
              style={{ transform: "rotate(1deg)" }}
            >
              <div className={s.tape} />
              <div className={s.photoBox} style={{ aspectRatio: "3/2" }}>
                <Image
                  src={firstMoments[1].photoSrc}
                  alt={firstMoments[1].photoAlt}
                  fill
                  placeholder="blur"
                  blurDataURL={PHOTO_BLUR}
                  style={{ objectFit: "cover", filter: "grayscale(0.2) sepia(0.3)" }}
                />
                <div className={s.photoOverlay} />
              </div>
              <div style={{ fontFamily: "var(--font-script)", color: "var(--c-ink)" }}>
                <div className={s.polaroidMeta}>
                  <p className={`${s.polaroidDate} text-script`}>{firstMoments[1].caption}</p>
                </div>
              </div>
              <div className={s.cornerCurl} />
            </motion.div>

            {/* "Details" floating tag */}
            <div className={s.detailsTag}>
              <span className="text-editorial" style={{ fontStyle: "italic", fontSize: "0.85rem" }}>Details</span>
            </div>
          </div>
        )}

        {/* ── Third Polaroid (small) ── */}
        {firstMoments[2] && (
          <div className={s.thirdPolaroid}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className={`${s.polaroid} paper-texture`}
              style={{ transform: "rotate(3deg)", maxWidth: "220px" }}
            >
              <div className={s.tape} />
              <div className={s.photoBox}>
                <Image
                  src={firstMoments[2].photoSrc}
                  alt={firstMoments[2].photoAlt}
                  fill
                  placeholder="blur"
                  blurDataURL={PHOTO_BLUR}
                  style={{ objectFit: "cover", filter: "grayscale(0.3) sepia(0.35)" }}
                />
                <div className={s.photoOverlay} />
              </div>
              <div style={{ fontFamily: "var(--font-script)", color: "var(--c-ink)" }}>
                <h3 className={s.polaroidCaption} style={{ fontSize: "1rem" }}>{firstMoments[2].label}</h3>
                <div className={s.polaroidMeta}>
                  <p className={`${s.polaroidDate} text-script`} style={{ fontSize: "0.75rem" }}>
                    {config.names.yours.charAt(0)}. & {config.names.hers.charAt(0)}.
                  </p>
                </div>
              </div>
              <div className={s.cornerCurl} />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
