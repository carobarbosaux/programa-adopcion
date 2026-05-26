'use client';

import { useEffect, useRef } from 'react';
import styles from './Timeline.module.css';

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add(styles.in);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.timeline} aria-label="Antes, durante y después del programa">

      {/* subtle hand-drawn wobble filters */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="dotWob" x="-15%" y="-15%" width="130%" height="130%">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves={2} seed={5} result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale={0.8} />
          </filter>
          <filter id="pillWob" x="-3%" y="-15%" width="106%" height="130%">
            <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves={2} seed={9} result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale={1} />
          </filter>
        </defs>
      </svg>

      <div className={styles.inner}>
        {/* rail — desktop only */}
        <div className={styles.rail} aria-hidden="true">
          <div className={styles.railCell}><span className={styles.dot}></span></div>
          <div className={styles.railCell}><span className={styles.dot}></span></div>
          <div className={styles.railCell}><span className={`${styles.dot} ${styles.dotCurrent}`}></span></div>
        </div>

        {/* cards */}
        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.cardLabel}>Antes</div>
            <p className={styles.cardText}>Prompts aislados, respuestas sueltas y poca trazabilidad.</p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardLabel}>Durante</div>
            <p className={styles.cardText}>Prácticas guiadas, contexto compartido, Claude Code, skills, MCPs y revisión de buenas prácticas.</p>
          </article>

          <article className={`${styles.card} ${styles.cardCurrent}`}>
            <div className={styles.cardLabel}>Después</div>
            <p className={styles.cardText}>Flujos reutilizables, subagentes, documentación, QA y métricas de impacto.</p>
          </article>
        </div>
      </div>

    </section>
  );
}
