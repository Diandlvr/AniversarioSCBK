"use client";

import { motion } from "framer-motion";
import s from "./FavoriteMessages.module.css";
import { favoriteMessages, config } from "@/data/content";

export default function FavoriteMessages() {
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
          Messages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.sectionSubtitle} text-script`}
        >
          Las conversaciones que guardamos porque nos hicieron sonreír.
        </motion.p>
      </div>

      <div className={s.conversationsGrid}>
        {favoriteMessages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={s.chatCard}
          >
            {/* Stitch border effect via ::before */}

            {/* Top washi tape */}
            <div className={s.washiTapeTop} />

            {/* Notebook lines */}
            <div className={s.notebookLines} aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className={s.notebookLine} />
              ))}
            </div>

            {/* Margin line */}
            <div className={s.marginLine} />

            {/* Chat bubbles */}
            <div className={s.bubbles}>
              {msg.conversation.map((line, idx) => {
                const isYou = line.sender === "you";
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isYou ? 15 : -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`${s.bubble} ${isYou ? s.bubbleYou : s.bubbleHer}`}
                  >
                    <span className={`${s.senderLabel} text-mono`}>
                      {isYou ? config.names.yours : config.names.hers}
                    </span>
                    <p className={`${s.bubbleText} text-editorial`}>{line.text}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom corner curl */}
            <div className={s.cornerCurl} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
