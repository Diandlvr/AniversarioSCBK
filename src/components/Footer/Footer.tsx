import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <p className={`${s.footerText} text-mono`}>
        HECHO CON <span className={s.heart}>♥</span> PARA TI
      </p>
    </footer>
  );
}
