import styles from "./AnthropicAcademy.module.css";

export default function AnthropicAcademy() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <p className={styles.label}>Certificación incluida</p>
            <h3 className={styles.title}>Completa tu certificación en Anthropic Academy</h3>
            <p className={styles.body}>
              Durante la formación, deberás acceder a Anthropic Academy para completar los módulos
              y certificaciones necesarias. Es parte del recorrido del programa y ayudará a
              consolidar el uso de Claude con buenas prácticas oficiales.
            </p>
          </div>
          <a
            href="https://www.anthropic.com/learn"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Acceder a Anthropic Academy
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
