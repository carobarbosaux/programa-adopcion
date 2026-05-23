# Proeduca — Style Guide para landing web

## Principio general

El estilo Proeduca no es solo una paleta roja. Es una forma de presentar información institucional con claridad ejecutiva, baja carga visual, jerarquía fuerte y agrupación limpia.

La landing debe comunicar:

- Claridad.
- Estructura.
- Confianza institucional.
- Pensamiento analítico.
- Modernidad sobria.

---

## Personalidad visual

Debe sentirse:

- Institucional.
- Ejecutiva.
- Analítica.
- Limpia.
- Sobria.
- Moderna, pero no excesivamente tecnológica.
- Cercana a un entorno universitario y corporativo.

Evitar:

- Plantillas genéricas de consultoría.
- Decoración sin función.
- Clichés futuristas de IA.
- Exceso de rojo.
- Layouts densos.
- Visuales tipo stock.

---

## Paleta

```css
:root {
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

  --font-primary: "Proeduca Sans", Arial, sans-serif;
}
```

---

## Uso del color

Usar blanco como fondo principal.

Usar `#1A1A1A` o `#111111` para texto principal.

Usar grises para:

- Cards.
- Divisores.
- Tablas.
- Fondos secundarios.
- Texto de apoyo.

Usar rojos suaves para:

- Callouts ligeros.
- Bordes de cards.
- Labels secundarios.
- Separadores sutiles.

Usar rojo fuerte `#AE2430` solo para:

- KPIs.
- Palabras o números clave.
- Headers importantes.
- Navegación crítica.
- CTAs principales.

Distribución recomendada:

- 70–80% blanco.
- 15–20% grises.
- 5–10% rojo suave.
- 1–5% rojo fuerte.

---

## Tipografía

Fuente principal:

```css
font-family: "Proeduca Sans", Arial, sans-serif;
```

No importar fuentes externas.

Jerarquía recomendada para web:

- Hero title: 56–72 px, bold.
- Section title: 36–48 px, bold.
- Subtitle: 20–26 px, regular o semibold.
- Body: 16–20 px.
- Card text: 16–20 px.
- Labels: 12–14 px, semibold, uppercase opcional.
- KPI numbers: 44–64 px, bold, `#AE2430`.

---

## Layout web

Usar:

- Grid flexible de 12 columnas.
- Layouts de 2, 3 o 4 columnas.
- Márgenes laterales generosos.
- Mucho whitespace.
- Jerarquía clara.

Preferir:

- Títulos orientados a mensaje.
- Cards agrupadas.
- Timelines verticales si hay más de cinco momentos.
- Tablas solo cuando aclaren comparaciones.

Evitar:

- Saturación visual.
- Exceso de iconos.
- Muchas variantes de color.
- Texto pequeño.
- Decoración sin propósito.

---

## Componentes

### KPI cards

Usar para métricas, duración, fecha, impacto o resultados.

Estructura:

- Card blanca o gris claro.
- Número o dato dominante.
- Label breve.
- Descripción opcional.

### Content cards

Usar para ideas, fases, capacidades o bloques temáticos.

Estilo:

```css
background: #F4F4F4;
border-radius: 16px;
border: 1px solid #E0E0E0;
padding: 24px;
```

### Callout block

Usar para una idea central.

Puede usar:

- Gris claro.
- Rojo extra light.
- Rojo oscuro solo si es un cierre fuerte.

### Timelines

Usar para procesos, fases o evolución.

Como el programa tiene más de cinco momentos, preferir timeline vertical o cards por semana.

---

## IA y lenguaje visual

Cuando el tema sea IA, representarla de forma estructural, no con clichés.

Usar metáforas como:

- Capas.
- Módulos conectados.
- Arquitectura base.
- Workflows.
- Roadmaps.
- Sistemas de soporte.
- Mapas funcionales.
- Antes / durante / después.

No usar:

- Robots.
- Cerebros brillantes.
- Circuitos.
- Fondos sci-fi.
- Neones.
- Interfaces falsas demasiado complejas.

---

## Detalles finales

Borders:

```css
border-radius: 16px 24px;
border: 1px solid #E0E0E0;
```

Shadows:

```css
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
```

Usar sombras solo si ayudan a separar capas.

---

## Checklist de calidad

Antes de finalizar, verificar:

- La página comunica una idea clara.
- La jerarquía se entiende en 3 segundos.
- El rojo fuerte se usa como acento, no como textura.
- La página no parece una alerta o pantalla de error.
- Hay suficiente whitespace.
- El texto es legible.
- La información está agrupada de forma lógica.
- No hay decoración sin propósito.
- El resultado se siente institucional, ejecutivo y sobrio.
- No hay clichés visuales de IA.
- El contenido puede crecer como repositorio.
