import { capabilities } from "@/data/mockdata";
import styles from "./Capabilities.module.css";

export default function Capabilities() {
  return (
    <section id="capacidades" className={styles.capabilities}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Capacidades</span>
          <h2 className="section-title">
            Capacidades que se activan durante el programa
          </h2>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap) => (
            <div key={cap.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
