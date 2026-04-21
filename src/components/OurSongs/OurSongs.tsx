"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import s from "./OurSongs.module.css";
import { ourSongs } from "@/data/content";

export default function OurSongs() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const handlePlay = (id: string) => {
    const currentAudio = audioRefs.current[id];
    
    // Si ya está sonando esta canción, la pausamos
    if (playingId === id) {
      currentAudio?.pause();
      setPlayingId(null);
      return;
    }

    // Si hay otra sonando, la pausamos
    if (playingId && audioRefs.current[playingId]) {
      audioRefs.current[playingId]?.pause();
    }

    // Reproducimos la nueva
    currentAudio?.play();
    setPlayingId(id);
  };

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
            Las canciones que suenan mientras el mundo se detiene. Haz click para escuchar.
          </motion.p>
        </div>

        <div className={s.songsGrid}>
          {ourSongs.map((song, idx) => {
            const isPlaying = playingId === song.id;

            return (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${s.songCard} ${isPlaying ? s.playing : ""}`}
                onClick={() => handlePlay(song.id)}
              >
                <audio
                  ref={(el) => {
                    audioRefs.current[song.id] = el;
                  }}
                  src={song.audioFile}
                  onEnded={() => setPlayingId(null)}
                />
                
                <div className={`${s.vinylRecordIcon} ${isPlaying ? s.spin : ""}`}>
                  <div className={s.vinylCenter} />
                  {/* Pequeño indicador visual de nota musical o play */}
                  <div className={s.playIndicator}>
                    {isPlaying ? "⏸" : "♪"}
                  </div>
                </div>

                <span className={`${s.artist} text-mono`}>{song.artist}</span>
                <h3 className={`${s.title} text-display`}>{song.title}</h3>
                <p className={`${s.lyric} text-script`}>
                  "{song.lyricSnippet}"
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
