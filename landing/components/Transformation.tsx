import styles from "./Transformation.module.css";

const columns = [
  {
    label: "Antes",
    accent: "neutral",
    text: "Uso puntual de prompts, respuestas aisladas y poca trazabilidad.",
  },
  {
    label: "Durante",
    accent: "accent",
    text: "Prácticas guiadas, contexto compartido, Claude Code, skills, MCPs y revisión de buenas prácticas.",
  },
  {
    label: "Después",
    accent: "strong",
    text: "Flujos reutilizables, subagentes, revisión previa de PRs, documentación y métricas de impacto.",
  },
];

export default function Transformation() {
  return (
    <section className={styles.transformation}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Transformación</span>
          <h2 className="section-title">De usar IA a trabajar con IA</h2>
          <p className="section-subtitle">
            La edición Claude está pensada para que los equipos de tecnología
            pasen de interacciones sueltas con IA a flujos más consistentes,
            reutilizables y seguros.
          </p>
        </div>

        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.label} className={`${styles.col} ${styles[`col_${col.accent}`]}`}>
              <span className={styles.colLabel}>{col.label}</span>
              <p className={styles.colText}>{col.text}</p>
            </div>
          ))}
        </div>

        <p className={styles.closing}>
          La adopción no ocurre cuando una herramienta está disponible. Ocurre
          cuando cambia la forma de trabajar.
        </p>
      </div>
    </section>
  );
}
