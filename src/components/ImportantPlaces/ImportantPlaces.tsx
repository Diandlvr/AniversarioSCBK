"use client";

import { motion } from "framer-motion";
import s from "./ImportantPlaces.module.css";
import { importantPlaces } from "@/data/content";

export default function ImportantPlaces() {
  return (
    <section className="section container">
      <div style={{ textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`${s.sectionTitle} text-display`}
        >
          Important Places
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.sectionSubtitle} text-script`}
        >
          Las coordenadas de nuestra historia. Cada lugar guarda un trozo de nosotros.
        </motion.p>
      </div>

      <div className={s.placesGrid}>
        {importantPlaces.map((place, idx) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={s.placeCard}
          >
            <div
              className={s.photoWrapper}
              style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 3}deg)` }}
            >
              <div className={s.photoContent}>
                {/* 
                  Future implementation for map image:
                  <img src={place.mapImage} alt={place.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> 
                */}
                <div className={s.photoTexture} />
                <span className={`${s.mapCoords} text-mono`}>
                  {place.coordinates}
                </span>
              </div>
            </div>

            <h3 className={`${s.placeName} text-display`}>{place.name}</h3>
            <span className={`${s.placeLabel} text-script`}>{place.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
