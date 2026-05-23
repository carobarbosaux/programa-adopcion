# Prompt de implementación para Claude

Construye una landing page responsive para el **Programa de Adopción IA en Tecnología · Edición Claude**.

Usa estos archivos como fuente de verdad:

- `design.md` para dirección de producto, estructura y visual.
- `content.md` para copy.
- `mockdata.ts` para datos.
- `components.md` para arquitectura de componentes.
- `style-guide.md` para la guía visual Proeduca.

No inventes contenido estratégico nuevo.

Puedes mejorar microcopy de botones, etiquetas y estados vacíos si ayuda a la claridad, pero no cambies el sentido del programa.

---

## Objetivo

Crear una landing que funcione en dos fases:

1. Como página promocional e informativa del programa.
2. Como repositorio futuro de sesiones, videos, transcripciones, recursos, prompts y aprendizajes.

---

## Estilo

La web debe sentirse:

- Corporativa.
- Clara.
- Ejecutiva.
- Técnica.
- Moderna.
- Cálida.
- Sobria.
- No futurista.
- No genérica de IA.

La identidad dominante debe ser Proeduca.

Los guiños a Claude deben ser sutiles: calidez, estructura tipo workspace, bloques de contexto, snippets y tono editorial.

---

## Fuente

La fuente corporativa es `Proeduca Sans`.

No debes importar fuentes externas.
No uses Google Fonts.
Asume que la fuente será añadida manualmente al proyecto.

Usa siempre:

```css
font-family: "Proeduca Sans", Arial, sans-serif;
```

En caso de definir variables CSS:

```css
--font-primary: "Proeduca Sans", Arial, sans-serif;
```

---

## Layout

Construye una landing one-page con navegación anclada:

- Inicio.
- Contexto.
- Plan.
- Capacidades.
- Repositorio.

Secciones:

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

## Hero

El hero debe ser sobrio y premium.

Composición sugerida:

- Columna izquierda:
  - Eyebrow.
  - H1.
  - Subheadline.
  - CTAs.
  - Datos rápidos.
- Columna derecha:
  - Panel visual abstracto tipo "Claude workspace".

El panel lateral no debe parecer una captura real ni una interfaz demasiado compleja.

Debe incluir módulos visuales simulados como:

- `context`
- `Claude.md`
- `skills`
- `QA review`
- `agent workflow`

---

## Repositorio

La sección de repositorio debe estar preparada para crecer.

Debe incluir:

- Filtros por tipo de recurso.
- Estado vacío.
- Cards de sesiones.
- Estados:
  - Próximamente.
  - Disponible.
  - En revisión.

No hace falta implementar funcionalidad compleja si no está en alcance, pero la estructura debe estar preparada.

---

## Restricciones visuales

No usar:

- Robots.
- Circuitos.
- Cerebros brillantes.
- Neones.
- Gradientes futuristas.
- Ilustraciones sci-fi.
- Estética startup genérica de IA.

Evitar exceso de rojo.

Usar el rojo fuerte solo para CTAs, métricas y acentos puntuales.

---

## Criterios de calidad

Antes de terminar, revisa:

- La landing se entiende en menos de 3 segundos.
- El hero comunica claramente el valor del programa.
- El timeline es legible.
- La sección de repositorio está preparada para crecer.
- El diseño se siente Proeduca.
- Los guiños a Claude son sutiles.
- No hay clichés visuales de IA.
- La web es responsive.
- El contenido está conectado a `mockdata.ts`.
