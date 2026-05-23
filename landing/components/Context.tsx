"use client";
import styles from "./Context.module.css";

export default function Context() {

  return (
    <section id="contexto" className={styles.context}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="eyebrow">Contexto de adopción</span>
          <h2 className="section-title">Trabajar con IA ya no es una excepción</h2>
        </div>

        <div className={styles.right}>
          <p className={styles.body}>
            La IA ya está entrando en la forma de resolver, documentar, revisar y
            decidir dentro de los equipos técnicos. A veces acelera. A veces abre
            dudas. Y muchas veces depende demasiado de cómo la use cada persona.
          </p>
          <p className={styles.body}>
            Este programa busca poner una base común: no para &ldquo;descubrir&rdquo; Claude,
            sino para usarlo mejor en el trabajo real, con más intención, más
            contexto y menos improvisación.
          </p>

          <p className={styles.callout}>
            El objetivo no es usar más IA. Es usarla mejor, donde realmente aporta valor.
          </p>
        </div>
      </div>
    </section>
  );
}
