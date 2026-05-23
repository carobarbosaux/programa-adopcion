import { learningExperience } from "@/data/mockdata";
import styles from "./LearningExp.module.css";

export default function LearningExp() {
  return (
    <section className={styles.learning}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Metodología</span>
          <h2 className="section-title">
            Una experiencia diseñada para practicar, no solo escuchar
          </h2>
          <p className="section-subtitle">
            Cada bloque combina teoría aplicada, práctica inmersiva y retos
            conectados con el trabajo real del equipo. La intención es que cada
            sesión deje algo accionable.
          </p>
        </div>

        <div className={styles.grid}>
          {learningExperience.map((item) => (
            <div key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
