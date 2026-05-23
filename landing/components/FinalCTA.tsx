import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>
            La adopción empieza cuando el equipo lo lleva a su trabajo real
          </h2>
          <p className={styles.body}>
            Este programa está diseñado para acompañar ese paso: entender,
            practicar, validar y documentar cómo Claude puede integrarse en los
            flujos de tecnología con impacto medible.
          </p>
          <div className={styles.actions}>
            <a href="#plan" className="btn-primary">
              Explorar plan por semanas
            </a>
            <a href="#repositorio" className="btn-secondary">
              Ir al repositorio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
