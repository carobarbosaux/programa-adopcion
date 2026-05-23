import Image from "next/image";
import { programPhases } from "@/data/mockdata";
import styles from "./Phases.module.css";

export default function Phases() {
  return (
    <section id="plan" className={styles.phases}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Temario</span>
          <h2 className="section-title">Las 6 semanas del programa</h2>
          <p className="section-subtitle">
            Cada semana tiene un tema, un equipo responsable y una práctica
            concreta. Del contexto estratégico a los agentes y el demo day.
          </p>
        </div>

        <div className={styles.grid}>
          {programPhases.map((phase) => (
            <article
              key={phase.id}
              className={styles.card}
              style={{ "--card-color": phase.visualColor } as React.CSSProperties}
            >
              <div className={styles.illustration}>
                <Image
                  src={phase.illustration}
                  alt=""
                  width={220}
                  height={160}
                  className={styles.img}
                />
              </div>

              <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <span className={styles.week}>{phase.week}</span>
                <span className={styles.format}>{phase.format}</span>
              </div>

              <h3 className={styles.title}>{phase.title}</h3>

              <p className={styles.responsible}>
                {phase.responsible.join(" · ")}
              </p>

              <p className={styles.desc}>{phase.description}</p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
