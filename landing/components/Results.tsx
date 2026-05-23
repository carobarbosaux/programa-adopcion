import { expectedResults } from "@/data/mockdata";
import styles from "./Results.module.css";

export default function Results() {
  return (
    <section className={styles.results}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="eyebrow">Resultados</span>
            <h2 className="section-title">Qué te llevas</h2>
            <p className={styles.body}>
              Capacidades prácticas para usar IA en tecnología con más
              intención, trazabilidad y criterio técnico.
            </p>
          </div>

          <ul className={styles.list}>
            {expectedResults.map((result, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.itemNumber}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.itemText}>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
