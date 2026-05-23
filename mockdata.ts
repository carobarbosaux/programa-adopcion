export const programInfo = {
  name: "Programa de Adopción IA en Tecnología",
  edition: "Edición Claude",
  duration: "19 h",
  startDate: "01 junio",
  format: "Presencial + plenario + autoconsumo",
  baseTool: "Claude de Anthropic",
  description:
    "Una experiencia práctica para integrar IA generativa en el trabajo real de los equipos de tecnología.",
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Contexto", href: "#contexto" },
  { label: "Plan", href: "#plan" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Repositorio", href: "#repositorio" },
];

export const quickStats = [
  { label: "Duración", value: "19 h" },
  { label: "Inicio", value: "01 junio" },
  { label: "Formato", value: "Presencial + plenario" },
  { label: "Herramienta base", value: "Claude" },
];

export const weeks = [
  {
    id: "vision-estrategica",
    week: "Semana 01",
    title: "Visión estratégica IA y configuración",
    duration: "2 h",
    format: "Presencial + plenario",
    description:
      "Masterclass inspiracional, visión estratégica, impacto en educación y negocio, Claude como herramienta elegida y plan de despliegue.",
    practice: "Autoconsumo posterior: Claude 101 + Claude Code.",
    tags: ["Estrategia", "Claude", "Adopción"],
    status: "Definida",
  },
  {
    id: "fundamentos-ia",
    week: "Semana 01",
    title: "Fundamentos de la IA",
    duration: "3 h",
    format: "Presencial · grupos por nivel",
    description:
      "Tipos de IA, LLMs, tokens, costes, ventana de contexto, modelos Claude, guardarraíles y entorno tecnológico.",
    practice: "Generación automática de specs y desarrollo con Claude Code.",
    tags: ["Fundamentos", "LLMs", "Contexto"],
    status: "Definida",
  },
  {
    id: "prompting-skills-mcp",
    week: "Semana 02",
    title: "Prompt engineering, skills y MCP",
    duration: "4 h",
    format: "Presencial · grupos",
    description:
      "Método Contexto + Rol + Tarea + Output, prompting iterativo, skills, MCPs, connectors y Workbench.",
    practice:
      "Uso de Claude Workbench para refinar prompts complejos que generen componentes de UI, features o lógica de negocio.",
    tags: ["Prompting", "Skills", "MCP"],
    status: "Definida",
  },
  {
    id: "arquitectura-seguridad",
    week: "Semana 03",
    title: "Arquitectura, cumplimiento y seguridad",
    duration: "1 h",
    format: "Presencial · grupos",
    description:
      "Arquitectura tecnológica, uso responsable de Claude, riesgos legales, auditoría de código y checklist de seguridad.",
    practice:
      "Uso de Claude para buscar vulnerabilidades en un fragmento de código propio.",
    tags: ["Arquitectura", "Seguridad", "Compliance"],
    status: "Definida",
  },
  {
    id: "agentes-subagentes",
    week: "Semana 04",
    title: "Agentes y subagentes",
    duration: "3 h",
    format: "Presencial · grupos",
    description:
      "Agentes, subagentes, Claude Code, Agent SDK, sistemas multiagente y límites reales de cada camino.",
    practice: "Crear y documentar un subagente para Claude Code.",
    tags: ["Agentes", "Subagentes", "Claude Code"],
    status: "Pendiente de validar práctica",
  },
  {
    id: "testing-qa",
    week: "Semana 05",
    title: "Testing, QA automatizado y flujos avanzados",
    duration: "3 h",
    format: "Presencial · grupos",
    description:
      "Tests unitarios, integración, end-to-end, revisión de PRs con IA, CLI tools, sesiones múltiples y remote control.",
    practice:
      "Implementar un AI Code Review System que pre-evalúe Pull Requests antes de la intervención humana.",
    tags: ["QA", "Testing", "Code Review"],
    status: "Definida",
  },
  {
    id: "hack-day",
    week: "Semana 06",
    title: "Hack Day AI",
    duration: "6 h",
    format: "Presencial + plenaria",
    description:
      "Equipos de trabajo, producto mínimo viable, documentación con Claude Code, métricas de impacto y Demo Day.",
    practice: "Producto DEV completo generado y documentado con Claude Code.",
    tags: ["Hack Day", "Demo Day", "Métricas"],
    status: "Pendiente de validar duración final",
  },
];

export const learningExperience = [
  {
    title: "Teoría aplicada",
    description: "Conceptos claros, aterrizados al contexto técnico y organizativo.",
  },
  {
    title: "Práctica inmersiva",
    description: "Ejercicios sobre casos reales, no demos genéricas.",
  },
  {
    title: "Retos",
    description: "Actividades para consolidar lo aprendido y documentar buenas prácticas.",
  },
];

export const capabilities = [
  { title: "Claude Chat", description: "Uso contextual, prompting iterativo y asistencia técnica." },
  { title: "Claude Code", description: "Generación, revisión y documentación de código." },
  {
    title: "Claude.md",
    description:
      "Instrucciones específicas del proyecto, convenciones y contexto del repositorio.",
  },
  {
    title: "Skills",
    description:
      "Instrucciones persistentes para documentos, datos, comunicación y tareas especializadas.",
  },
  {
    title: "MCPs y connectors",
    description: "Conexión con herramientas, fuentes y flujos corporativos.",
  },
  {
    title: "Workbench",
    description:
      "Refinamiento de prompts complejos para componentes, features y lógica de negocio.",
  },
  {
    title: "Agentes y subagentes",
    description:
      "Delegación de tareas técnicas especializadas dentro del flujo de desarrollo.",
  },
  {
    title: "AI Code Review",
    description: "Pre-evaluación de Pull Requests antes de la revisión humana.",
  },
];

export const expectedResults = [
  "Un lenguaje común sobre IA generativa y sus límites.",
  "Buenas prácticas compartidas para prompting técnico.",
  "Primeros flujos de trabajo con Claude Code.",
  "Prompts, skills o configuraciones reutilizables.",
  "Checklist de seguridad aplicado a prácticas del programa.",
  "Casos de uso documentados.",
  "Métricas iniciales de impacto.",
  "Materiales y sesiones disponibles en repositorio.",
];

export const repositoryFilters = [
  "Todas",
  "Sesiones",
  "Transcripciones",
  "Videos",
  "Prompts",
  "Recursos",
  "Casos de uso",
];

export const repositoryItems = [
  {
    id: "repo-session-01",
    week: "Semana 01",
    title: "Visión estratégica IA y configuración",
    status: "Próximamente",
    type: ["Sesión", "Video", "Transcripción"],
    description: "Materiales de la sesión inicial del programa.",
    resources: [],
  },
  {
    id: "repo-session-02",
    week: "Semana 01",
    title: "Fundamentos de la IA",
    status: "Próximamente",
    type: ["Sesión", "Recursos", "Prompts"],
    description:
      "Materiales sobre fundamentos, modelos, contexto y límites de la IA generativa.",
    resources: [],
  },
  {
    id: "repo-session-03",
    week: "Semana 02",
    title: "Prompt engineering, skills y MCP",
    status: "Próximamente",
    type: ["Sesión", "Video", "Transcripción", "Prompts"],
    description:
      "Materiales sobre prompting técnico, skills, MCPs y Workbench.",
    resources: [],
  },
];
