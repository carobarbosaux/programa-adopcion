"use client";

import { useEffect, useState } from "react";
import { quickStats } from "@/data/mockdata";
import styles from "./Hero.module.css";

const FULL_TITLE = "Adopción real de IA generativa para equipos de tecnología";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const tick = () => {
      i++;
      setDisplayed(FULL_TITLE.slice(0, i));
      if (i < FULL_TITLE.length) {
        setTimeout(tick, 38 + Math.random() * 28);
      } else {
        setDone(true);
      }
    };
    const start = setTimeout(tick, 320);
    return () => clearTimeout(start);
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left column */}
        <div className={styles.content}>
          <span className="eyebrow">Programa de Adopción IA · Tecnología</span>

          <h1 className={styles.title}>
            {displayed}
            <span className={`${styles.titleCursor}${done ? ` ${styles.done}` : ""}`} />
          </h1>

          <p className={styles.subtitle}>
            Un programa práctico para integrar Claude en el trabajo real de los
            equipos de tecnología: specs, código, seguridad, QA, agentes y Hack
            Day.
          </p>

          <p className={styles.microcopy}>
            De la exploración puntual a flujos de IA más consistentes, seguros
            y medibles.
          </p>

          <div className={styles.ctas}>
            <a href="#plan" className="btn-primary">
              Ver plan del programa
            </a>
          </div>

          <div className={styles.stats}>
            {quickStats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — program system terminal panel */}
        <div className={styles.panel} aria-hidden="true">
          {/* SVG filter for wobble effect on tags */}
          <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
            <defs>
              <filter id="tagWob" x="-3%" y="-12%" width="106%" height="124%">
                <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves={2} seed={7} result="n" />
                <feDisplacementMap in="SourceGraphic" in2="n" scale={1.2} />
              </filter>
            </defs>
          </svg>

          <div className={styles.programWindow}>
            <header className={styles.titlebar}>
              <div className={styles.lights}>
                <span className={styles.light} />
                <span className={styles.light} />
                <span className={styles.light} />
              </div>
              <div className={styles.titlebarName}>program—system</div>
              <div className={styles.titlebarEdge}>Ed. 01</div>
            </header>

            <div className={styles.programBody}>
              <div className={styles.preamble}>
                <span>Índice</span>
                <span>Seis módulos · 2026</span>
              </div>

              <ProgramCard tag="[01]" tagClass={styles.tag1} title="visión + fundamentos"
                meta={["estrategia IA", "modelos", "contexto", "Claude base"]} />
              <ProgramCard tag="[02]" tagClass={styles.tag2} title="driven specs"
                meta={["skills", "MCP", "connectors", "Prompt Engineering"]} />
              <ProgramCard tag="[03]" tagClass={styles.tag3} title="arquitectura + seguridad"
                meta={["cumplimiento", "auditoría", "riesgos", "DevOps"]} />
              <ProgramCard tag="[04]" tagClass={styles.tag4} title="agentes"
                meta={["subagentes", "Agent SDK", "flujos técnicos"]} />
              <ProgramCard tag="[05]" tagClass={styles.tag5} title="testing + QA"
                meta={["Playwright", "build-fix", "Worktree", "remote-control"]} />
              <ProgramCard tag="[06]" tagClass={styles.tag6} title="hack day"
                meta={["resultados", "casos de uso", "métricas"]} />

              <div className={styles.prompt}>
                <span className={styles.promptArrow}>$</span>
                <span>run program—system<span className={styles.cursor} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  tag,
  tagClass,
  title,
  meta,
}: {
  tag: string;
  tagClass: string;
  title: string;
  meta: string[];
}) {
  return (
    <article className={styles.card}>
      <span className={`${styles.tag} ${tagClass}`}>{tag}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardMeta}>
        {meta.map((item, i) => (
          <span key={item}>
            {item}
            {i < meta.length - 1 && <span className={styles.dot}> · </span>}
          </span>
        ))}
      </p>
    </article>
  );
}
