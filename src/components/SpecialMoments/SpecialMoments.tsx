"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import s from "./SpecialMoments.module.css";
import { specialMoments } from "@/data/content";

export default function SpecialMoments() {
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
            Momentos Especiales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className={`${s.sectionSubtitle} text-script`}
          >
            Las fechas que marcaron nuestra historia.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className={s.timeline}>
          {/* Vertical line */}
          <div className={s.timelineLine} />

          {specialMoments.map((moment, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${s.timelineItem} ${isLeft ? s.itemLeft : s.itemRight}`}
              >
                {/* Dot on the timeline */}
                <div className={s.timelineDot} />

                {/* Card */}
                <div className={s.momentCard}>
                  <div className={s.cardPhotoWrap}>
                    <Image
                      src={moment.photoSrc}
                      alt={moment.title}
                      width={400}
                      height={260}
                      className={s.cardPhoto}
                    />
                    <div className={s.photoOverlay} />
                  </div>

                  <div className={s.cardContent}>
                    <span className={`${s.cardDate} text-mono`}>
                      {moment.date}
                    </span>
                    <h3 className={`${s.cardTitle} text-display`}>
                      {moment.title}
                    </h3>
                    <p className={`${s.cardDescription} text-script`}>
                      {moment.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
