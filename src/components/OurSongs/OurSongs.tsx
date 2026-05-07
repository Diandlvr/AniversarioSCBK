"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import s from "./OurSongs.module.css";
import { ourSongs } from "@/data/content";

export default function OurSongs() {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const activeId = useRef<string | null>(null);

  const stopAll = useCallback(() => {
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 0;
      }
    });
    activeId.current = null;
  }, []);

  const playAudio = useCallback(
    (id: string) => {
      // Pause any currently playing song
      if (activeId.current && activeId.current !== id) {
        const prev = audioRefs.current[activeId.current];
        if (prev) {
          prev.pause();
          prev.currentTime = 0;
          prev.volume = 0;
        }
      }

      const audio = audioRefs.current[id];
      if (audio) {
        audio.currentTime = 0;
        audio.volume = 0;
        audio.play().catch(() => {});

        // Smooth fade-in
        let vol = 0;
        const fadeIn = setInterval(() => {
          vol = Math.min(vol + 0.05, 0.8);
          audio.volume = vol;
          if (vol >= 0.8) clearInterval(fadeIn);
        }, 30);
      }

      activeId.current = id;
    },
    []
  );

  const pauseAudio = useCallback(
    (id: string) => {
      const audio = audioRefs.current[id];
      if (audio) {
        // Smooth fade-out
        let vol = audio.volume;
        const fadeOut = setInterval(() => {
          vol = Math.max(vol - 0.08, 0);
          audio.volume = vol;
          if (vol <= 0) {
            clearInterval(fadeOut);
            audio.pause();
            audio.currentTime = 0;
          }
        }, 30);
      }
      if (activeId.current === id) {
        activeId.current = null;
      }
    },
    []
  );

  const toggleAudio = useCallback(
    (id: string) => {
      if (activeId.current === id) {
        pauseAudio(id);
      } else {
        playAudio(id);
      }
    },
    [playAudio, pauseAudio]
  );

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
            Las canciones que suenan mientras el mundo se detiene. Pasa el cursor para escuchar.
          </motion.p>
        </div>

        <div className={s.songsGrid}>
          {ourSongs.map((song, idx) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={s.songCard}
              onMouseEnter={() => playAudio(song.id)}
              onMouseLeave={() => pauseAudio(song.id)}
              onClick={() => toggleAudio(song.id)}
            >
              <audio
                ref={(el) => {
                  audioRefs.current[song.id] = el;
                }}
                src={song.audioFile}
                preload="metadata"
              />

              <div className={s.vinylRecordIcon}>
                <div className={s.vinylCenter}>
                  {song.coverSrc && (
                    <Image
                      src={song.coverSrc}
                      alt={`${song.title} album cover`}
                      fill
                      className={s.albumCover}
                    />
                  )}
                </div>
              </div>

              <span className={`${s.artist} text-mono`}>{song.artist}</span>
              <h3 className={`${s.title} text-display`}>{song.title}</h3>
              <p className={`${s.lyric} text-script`}>
                &ldquo;{song.lyricSnippet}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
