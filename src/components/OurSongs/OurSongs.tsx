"use client";

import { motion } from "framer-motion";
import s from "./OurSongs.module.css";
import { ourSongs } from "@/data/content";

export default function OurSongs() {
  return (
    <section className={s.sectionWrapper}>
      <div className={s.noiseOverlay} />
      
      <div className={`${s.sectionContent} container`}>
        <div style={{ textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`${s.sectionTitle} text-display`}
          >
            Nuestra Playlist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className={`${s.sectionSubtitle} text-script`}
          >
            Las canciones que suenan mientras el mundo se detiene.
          </motion.p>
        </div>

        <div className={s.songsGrid}>
          {ourSongs.map((song, idx) => (
            <motion.a
              key={song.id}
              href={song.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={s.songCard}
              style={{ textDecoration: "none" }}
            >
              <div className={s.vinylRecordIcon}>
                <div className={s.vinylCenter} />
              </div>

              <span className={`${s.artist} text-mono`}>{song.artist}</span>
              <h3 className={`${s.title} text-display`}>{song.title}</h3>
              <p className={`${s.lyric} text-script`}>
                "{song.lyricSnippet}"
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
