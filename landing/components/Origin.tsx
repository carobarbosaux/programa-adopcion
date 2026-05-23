import styles from "./Origin.module.css";

export default function Origin() {
  return (
    <section id="contexto" className={styles.origin}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="eyebrow">Contexto</span>
          <h2 className="section-title">¿Por qué este programa?</h2>
        </div>

        <div className={styles.right}>
          <p className={styles.body}>
            La adopción de IA en tecnología ya no va solo de probar
            herramientas. Implica entender cómo incorporarlas en procesos
            reales: ideación, documentación, desarrollo, revisión, seguridad,
            testing y colaboración entre equipos.
          </p>
          <p className={styles.body}>
            Este programa surge para acompañar ese cambio de forma
            estructurada: con una herramienta base, un marco común de buenas
            prácticas y sesiones diseñadas para que los equipos puedan aplicar
            IA generativa sobre casos de uso reales.
          </p>

          <blockquote className="callout-block">
            No se trata de usar Claude como un chat aislado.{" "}
            <br />
            Se trata de aprender a integrarlo como una capa de trabajo:
            contextual, técnica, segura y medible.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
