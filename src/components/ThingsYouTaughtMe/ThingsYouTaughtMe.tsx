"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import s from "./ThingsYouTaughtMe.module.css";
import { thingsYouTaughtMe } from "@/data/content";

/* Placeholder images — replace with your own in /photos/lessons/ */
const lessonPhotos = [
  { src: "/photos/lessons/lesson-1.png", alt: "Un momento contigo" },
  { src: "/photos/lessons/lesson-2.png", alt: "Lo que aprendí" },
];

export default function ThingsYouTaughtMe() {
  return (
    <section className={s.sectionWrapper}>
      {/* Decorative SVG Flower in background */}
      <svg className={s.flowerSvg} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,100 C130,50 180,50 180,100 C180,150 130,150 100,100 Z" fill="currentColor" />
        <path d="M100,100 C150,130 150,180 100,180 C50,180 50,130 100,100 Z" fill="currentColor" />
        <path d="M100,100 C70,150 20,150 20,100 C20,50 70,50 100,100 Z" fill="currentColor" />
        <path d="M100,100 C50,70 50,20 100,20 C150,20 150,70 100,100 Z" fill="currentColor" />
        <circle cx="100" cy="100" r="15" fill="var(--c-ink)" />
      </svg>

      <div className={`container ${s.innerLayout}`}>
        {/* Left column: title + lessons */}
        <div className={s.lessonsCol}>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${s.sectionTitle} text-display`}
          >
            Things You&rsquo;ve Taught Me
          </motion.h2>

          <div className={s.lessonsList}>
            {thingsYouTaughtMe.map((lesson, idx) => {
              const isItalic = idx % 2 !== 0;
              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className={`${s.lessonItem} ${isItalic ? s.lessonItalic : s.lessonRegular}`}
                >
                  {lesson}
                </motion.p>
              );
            })}
          </div>
        </div>

        {/* Right column: two stacked photos */}
        <div className={s.photosCol}>
          {lessonPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
              viewport={{ once: true }}
              className={s.photoFrame}
              style={{ "--tilt": idx === 0 ? "-2.5deg" : "2deg" } as React.CSSProperties}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className={s.photo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
