"use client";

import { motion } from "framer-motion";
import s from "./CalendarDate.module.css";
import { config } from "@/data/content";
import { getDaysInMonth } from "@/lib/utils";

const DAYS_OF_WEEK = ["D", "L", "M", "M", "J", "V", "S"];

export default function CalendarDate() {
  const [year, month, day] = config.anniversaryDate.split("-").map(Number);

  const daysInMonth = getDaysInMonth(year, month - 1);
  const firstDayOfWeek = new Date(year, month - 1, 1).getDay();

  const blanks = Array.from({ length: firstDayOfWeek }).map((_, i) => i);
  const days = Array.from({ length: daysInMonth }).map((_, i) => i + 1);

  return (
    <section className={s.wrapper}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`${s.note} text-script`}
        >
          El día que todo cambió...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${s.calendar} paper-texture`}
          style={{ transform: "rotate(-1deg)" }}
        >
          {/* Tape effect */}
          <div className={s.tapeTop} />

          {DAYS_OF_WEEK.map((d, i) => (
            <div key={i} className={`${s.dayLabel} text-mono`}>{d}</div>
          ))}

          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className={`${s.day} ${s.empty}`}>0</div>
          ))}

          {days.map((num) => {
            const isMarked = num === day;
            return (
              <div key={num} className={`${s.day} ${isMarked ? s.marked : ""} text-editorial`}>
                {num}
                {isMarked && (
                  <svg className={s.circle} viewBox="0 0 100 100">
                    <path d="M 50, 50 m -35, 0 a 35,35 0 1,0 70,0 a 35,35 0 1,0 -70,0" />
                  </svg>
                )}
              </div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.noteBottom} text-script`}
        >
          ...y empezó nuestra historia.
        </motion.p>
      </div>
    </section>
  );
}
