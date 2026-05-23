# Landing Programa de Adopción IA en Tecnología · Edición Claude

## Objetivo de la web

Crear una landing page promocional e informativa para presentar el **Programa de Adopción IA en Tecnología · Edición Claude**.

La web debe funcionar en dos fases:

1. **Fase landing:** comunicar el programa, explicar de dónde surge, mostrar el plan y motivar la participación.
2. **Fase repositorio:** alojar progresivamente transcripciones, videos, recursos, prompts, ejercicios y aprendizajes de cada sesión.

La landing debe sentirse como una pieza interna premium para un programa estratégico de adopción tecnológica.

---

## Principio narrativo

La web debe comunicar que este programa no es una formación genérica sobre IA.

El mensaje central es:

> No es una formación sobre IA. Es un programa para cambiar cómo tecnología trabaja con IA.

La narrativa debe transmitir paso a paso:

1. La IA generativa ya forma parte del trabajo técnico.
2. La organización necesita una forma común, segura y medible de adoptarla.
3. Claude será la herramienta base para activar nuevas capacidades.
4. El programa combina teoría, práctica y casos reales.
5. El resultado final debe ser una base reutilizable de conocimiento, prácticas y recursos.

---

## Estilo visual

La landing debe seguir principalmente el estilo Proeduca.

La identidad visual debe transmitir:

- Claridad ejecutiva.
- Sobriedad institucional.
- Jerarquía fuerte.
- Baja carga visual.
- Agrupación limpia de la información.
- Sensación moderna, pero no excesivamente tecnológica.

La web no debe parecer una landing genérica de IA.

---

## Tipografía

Usar `Proeduca Sans` como fuente principal.

La fuente será añadida manualmente en los archivos del proyecto, por lo que el código debe estar preparado para utilizarla mediante `font-family`.

Fallback:

```css
font-family: "Proeduca Sans", Arial, sans-serif;
```

No usar Google Fonts ni importar fuentes externas.

Si se definen variables CSS:

```css
--font-primary: "Proeduca Sans", Arial, sans-serif;
```

---

## Paleta principal

Usar la paleta definida en la guía Proeduca.

```css
--white: #FFFFFF;
--black: #111111;
--text-primary: #1A1A1A;
--text-secondary: #666666;
--text-muted: #9A9A9A;

--gray-01: #F8F8F8;
--gray-02: #F4F4F4;
--gray-03: #ECECEC;
--gray-04: #E0E0E0;
--gray-05: #C8C8C8;
--gray-06: #8A8A8A;
--gray-07: #4A4A4A;

--red-primary: #AF2630;
--red-strong: #AE2430;
--red-dark: #821B24;
--red-medium: #C64A55;
--red-soft: #E9A9AF;
--red-light: #F3D3D7;
--red-extra-light: #FAE8EA;

--navy: #0A2F6B;
--blue: #3478F6;
--cyan: #54DDE1;
--success: #47B172;
--warning: #F1C21B;
--error: #FF6262;
```

---

## Uso del color

La landing debe ser mayoritariamente blanca y gris claro.

Distribución aproximada:

- 70–80% blanco.
- 15–20% grises.
- 5–10% rojo suave.
- 1–5% rojo fuerte.

Usar `#AE2430` solo para:

- CTAs principales.
- Métricas importantes.
- Pequeños acentos.
- Estados destacados.
- Líneas de énfasis.

Evitar que la web parezca una alerta o una pantalla de error por exceso de rojo.

---

## Guiños a Anthropic / Claude

No copiar la identidad visual de Anthropic.

Los guiños a Claude deben ser sutiles y no competir con la identidad Proeduca.

Se pueden incorporar mediante:

- Acentos cálidos tipo clay/terracota muy suaves, siempre subordinados al rojo Proeduca.
- Bloques tipo workspace, documentación o sistema.
- Cards que parezcan módulos de contexto.
- Pequeños snippets visuales relacionados con prompts, Claude.md, skills o agentes.
- Mucho espacio en blanco.
- Sensación editorial y reflexiva.

No usar:

- Gradientes futuristas.
- Neones.
- Robots.
- Circuitos.
- Cerebros brillantes.
- Ilustraciones sci-fi.
- Estética startup genérica de IA.

---

## Layout

Usar una estructura clara de landing one-page con navegación anclada.

Navegación sugerida:

- Inicio
- Contexto
- Plan
- Capacidades
- Repositorio

Preferir:

- Grids de 2, 3 o 4 columnas.
- Cards con fondo `#F4F4F4` o blanco.
- Bordes suaves de 16–24px.
- Bordes de 1px en `#E0E0E0`.
- Sombras muy sutiles solo si ayudan a separar capas.
- Espaciado generoso.
- Títulos orientados a mensaje, no etiquetas genéricas.

Evitar:

- Layouts densos.
- Demasiados iconos.
- Demasiados colores.
- Párrafos largos.
- Decoración sin función.

---

## Secciones de la landing

1. Hero.
2. De dónde surge.
3. Objetivo del programa.
4. De usar IA a trabajar con IA.
5. Plan por semanas.
6. Experiencia de aprendizaje.
7. Herramientas y capacidades.
8. Resultados esperados.
9. Repositorio de sesiones.
10. CTA final.

---

## Hero visual direction

Crear un hero sobrio y premium.

Composición sugerida:

- Columna izquierda:
  - Eyebrow.
  - H1.
  - Texto introductorio.
  - CTAs.
  - Datos rápidos.
- Columna derecha:
  - Panel visual tipo "Claude workspace" con módulos simulados:
    - `context`
    - `Claude.md`
    - `skills`
    - `QA review`
    - `agent workflow`

El panel debe ser abstracto, no una captura real.

Debe verse como una representación estructural del programa, no como una interfaz falsa compleja.

---

## Responsive

Mobile first.

Requisitos:

- El hero debe poder reorganizarse en una sola columna.
- El timeline debe ser legible en mobile.
- Las cards deben tener buen espaciado y no depender de hover.
- La sección de repositorio debe poder crecer sin romper la estructura.
- Los CTAs deben mantenerse visibles y claros.

---

## Requisitos funcionales

- Navegación por anclas.
- Sección de repositorio preparada para filtrar por tipo de recurso.
- Estados para recursos:
  - Próximamente.
  - Disponible.
  - En revisión.
- Estructura de datos separada en `mockdata.ts`.
- Componentes reutilizables descritos en `components.md`.
