import styles from "./Objective.module.css";

const ideas = [
  {
    number: "01",
    text: "Aprender fundamentos y límites reales de la IA generativa.",
  },
  {
    number: "02",
    text: "Aplicar Claude en flujos técnicos concretos: specs, código, QA, documentación y agentes.",
  },
  {
    number: "03",
    text: "Cerrar el programa con casos de uso demostrables, métricas y aprendizajes compartidos.",
  },
];

export default function Objective() {
  return (
    <section className={styles.objective}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Objetivo</span>
          <h2 className="section-title">Objetivo del programa</h2>
          <p className="section-subtitle">
            Desarrollar capacidades reales de IA generativa en toda la
            organización de tecnología, integrando nuevos skills en el trabajo
            diario de las personas y activando casos de uso con impacto
            accionable y medible.
          </p>
        </div>

        <div className={styles.cards}>
          {ideas.map((idea) => (
            <div key={idea.number} className={styles.card}>
              <span className={styles.number}>{idea.number}</span>
              <p className={styles.text}>{idea.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
