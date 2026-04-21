"use client";

import { motion } from "framer-motion";
import s from "./Tickets.module.css";
import { tickets } from "@/data/content";

export default function Tickets() {
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
          Tickets
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`${s.sectionSubtitle} text-script`}
        >
          Las entradas que no quisimos tirar. Cada una, una historia.
        </motion.p>
      </div>

      <div className={s.ticketsLayout}>
        {tickets.map((ticket, idx) => (
          <motion.div
            key={ticket.id}
            initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -2 : 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, rotate: 0, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 100, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className={s.ticket}
            style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 1.5}deg)` }}
          >
            {/* Left notch */}
            <div className={`${s.notch} ${s.notchLeft}`} />
            {/* Right notch */}
            <div className={`${s.notch} ${s.notchRight}`} />

            {/* Main body */}
            <div className={s.ticketBody}>
              {/* Top perforation line */}
              <div className={s.perforation} />

              <div className={s.ticketHeader}>
                <span className={`${s.ticketLabel} text-mono`}>ADMIT ONE</span>
                <span className={`${s.ticketNumber} text-mono`}>{ticket.serial}</span>
              </div>

              <h3 className={`${s.ticketEvent} text-display`}>
                {ticket.event}
              </h3>

              <div className={s.ticketDetails}>
                <div className={s.ticketDetail}>
                  <span className={`${s.detailLabel} text-mono`}>VENUE</span>
                  <span className={`${s.detailValue} text-editorial`}>{ticket.venue}</span>
                </div>
                <div className={s.ticketDetail}>
                  <span className={`${s.detailLabel} text-mono`}>CITY</span>
                  <span className={`${s.detailValue} text-editorial`}>{ticket.city}</span>
                </div>
                <div className={s.ticketDetail}>
                  <span className={`${s.detailLabel} text-mono`}>DATE</span>
                  <span className={`${s.detailValue} text-editorial`}>{ticket.date}</span>
                </div>
                <div className={s.ticketDetail}>
                  <span className={`${s.detailLabel} text-mono`}>TIME</span>
                  <span className={`${s.detailValue} text-editorial`}>{ticket.time}</span>
                </div>
              </div>

              {/* Bottom perforation line */}
              <div className={s.perforation} />
            </div>

            {/* Tear stub */}
            <div className={s.tearStub}>
              <div className={s.tearPerforation} />
              <div className={s.stubContent}>
                <span className={`${s.stubSeat} text-mono`}>{ticket.seat}</span>
                {/* Barcode SVG */}
                <svg className={s.barcode} viewBox="0 0 120 40" aria-hidden="true">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const w = (i % 3 === 0) ? 3 : (i % 2 === 0) ? 2 : 1;
                    const x = i * 4;
                    return (
                      <rect
                        key={i}
                        x={x}
                        y={0}
                        width={w}
                        height={40}
                        fill="currentColor"
                        opacity={0.7 + Math.random() * 0.3}
                      />
                    );
                  })}
                </svg>
                <span className={`${s.stubSerial} text-mono`}>{ticket.serial}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
