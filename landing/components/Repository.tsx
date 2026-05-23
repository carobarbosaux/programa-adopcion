"use client";

import { useState } from "react";
import { repositoryFilters, repositoryItems } from "@/data/mockdata";
import styles from "./Repository.module.css";

const statusConfig: Record<string, { label: string; className: string }> = {
  "Próximamente": { label: "Próximamente", className: styles.statusSoon },
  "Disponible": { label: "Disponible", className: styles.statusAvailable },
  "En revisión": { label: "En revisión", className: styles.statusReview },
};

export default function Repository() {
  const [activeFilter, setActiveFilter] = useState("Sesiones");

  const filtered = repositoryItems.filter((item) =>
    item.type.some((t) =>
      t.toLowerCase().includes(activeFilter.toLowerCase()) ||
      activeFilter.toLowerCase().includes(t.toLowerCase())
    )
  );

  return (
    <section id="repositorio" className={styles.repository}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Repositorio</span>
          <h2 className="section-title">Repositorio del programa</h2>
          <p className="section-subtitle">
            Este espacio irá creciendo con los materiales de cada sesión:
            grabaciones, transcripciones, recursos, ejercicios, prompts,
            configuraciones y aprendizajes clave.
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters} role="group" aria-label="Filtrar por tipo">
          {repositoryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filter} ${activeFilter === filter ? styles.filterActive : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((item) => {
              const status = statusConfig[item.status] ?? {
                label: item.status,
                className: styles.statusSoon,
              };
              return (
                <div key={item.id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardWeek}>{item.week}</span>
                    <span className={`${styles.statusBadge} ${status.className}`}>
                      {status.label}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <div className={styles.cardTypes}>
                    {item.type.map((t) => (
                      <span key={t} className={styles.typeTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>
              Las sesiones estarán disponibles aquí conforme avance el programa.
            </p>
            <p className={styles.emptyBody}>
              Mientras tanto, puedes consultar el plan completo y los objetivos
              de cada bloque.
            </p>
            <a href="#plan" className="btn-secondary">
              Ver plan del programa
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
