"use client";

import { useEffect, useState } from "react";
import s from "./NavDots.module.css";

const sections = [
  { id: "hero",            label: "Inicio" },
  { id: "calendar",        label: "El Día" },
  { id: "first-moments",   label: "Primeros" },
  { id: "photo-booth",     label: "Fotos" },
  { id: "monthly-photos",  label: "Meses" },
  { id: "tickets",         label: "Tickets" },
  { id: "special-moments", label: "Momentos" },
  { id: "places",          label: "Lugares" },
  { id: "songs",           label: "Canciones" },
  { id: "movies",          label: "Películas" },
  { id: "reasons",         label: "Razones" },
  { id: "lessons",         label: "Lecciones" },
  { id: "love-note",       label: "Carta" },
];

export default function NavDots() {
  const [activeId, setActiveId] = useState("hero");
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Pick the one with highest intersection ratio
          const best = visibleEntries.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveId(best.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Show dots only after scrolling past hero
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`${s.navDots} ${pastHero ? s.navDotsVisible : ""}`}
      aria-label="Navegación de secciones"
    >
      {sections.map((section, idx) => (
        <div key={section.id}>
          <button
            className={s.navItem}
            onClick={() => scrollTo(section.id)}
            aria-label={`Ir a ${section.label}`}
            aria-current={activeId === section.id ? "true" : undefined}
          >
            <span className={s.navLabel}>{section.label}</span>
            <span
              className={`${s.dot} ${activeId === section.id ? s.dotActive : ""}`}
            />
          </button>
          {idx < sections.length - 1 && <div className={s.navLine} />}
        </div>
      ))}
    </nav>
  );
}
