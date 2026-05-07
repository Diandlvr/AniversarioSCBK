"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import s from "./MoviesWatched.module.css";
import { moviesWatched } from "@/data/content";
import { PHOTO_BLUR } from "@/lib/blur";

export default function MoviesWatched() {
  return (
    <section className="section container">
      <div style={{ textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`${s.sectionTitle} text-display`}
        >
          Cartelera
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.sectionSubtitle} text-script`}
        >
          Las historias que vimos juntos, pero nuestra historia es mejor.
        </motion.p>
      </div>

      <div className={s.moviesGrid}>
        {moviesWatched.map((movie, idx) => {
          // slight rotation for each poster for an organic feel
          const rotation = idx % 2 === 0 ? -1.5 : 2;
          
          return (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={s.movieCard}
              style={{ transform: `rotate(${rotation}deg)` }}
              whileHover={{ rotate: 0, zIndex: 10 }}
            >
              <div className={s.tape} />
              
              <Image
                src={movie.posterSrc}
                alt={movie.title}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                placeholder="blur"
                blurDataURL={PHOTO_BLUR}
                className={s.posterImage}
              />
              
              <div className={s.overlay}>
                <h3 className={`${s.movieTitle} text-display`}>
                  {movie.title}
                </h3>
                <p className={`${s.movieReview} text-editorial`}>
                  {movie.review}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
