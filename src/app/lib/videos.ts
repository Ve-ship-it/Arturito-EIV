export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  uploadedAt: string; // formato: "YYYY-MM-DD"
}

export const videoCategories = [
  "Todos",
  "Tutorial",
  "Competencia",
  "Vlog",
  "Entrevistas",
  "Laboratorio",
] as const;

// Calcula automáticamente "Hace X días/semanas/meses" desde la fecha de subida
export function getTimeAgo(uploadedAt: string): string {
  const uploaded = new Date(uploadedAt);
  const now = new Date();
  const diffMs = now.getTime() - uploaded.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Hoy";
  if (diffDays === 1) return "Hace 1 día";
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 14) return "Hace 1 semana";
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
  if (diffDays < 60) return "Hace 1 mes";
  if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`;
  if (diffDays < 730) return "Hace 1 año";
  return `Hace ${Math.floor(diffDays / 365)} años`;
}

export const videoData: VideoItem[] = [
  {
    id: "yh4QJZ0ApgY",
    title: "Herramientas para fortalecer habilidades en construcción y programación sin tener un equipo a mano",
    description: "Todo lo que necesitas saber para ganar una competencia sin un robot físico.",
    category: "Vlog",
    uploadedAt: "2026-04-26",
  },
  {
    id: "fcKpZk9TzmI",
    title: "Introducción al Nuevo Entorno de Desarrollo en Scratch Parte 2",
    description: "Segunda parte de aproximación a nueva programación scratch de Lego Mindstorm.",
    category: "Tutorial",
    uploadedAt: "2026-05-05",
  },
  {
    id: "Y4SFM7sj5YI",
    title: "Introducción al Nuevo Entorno de Desarrollo en Scratch Parte 1",
    description: "Primera aproximación a nueva programación scratch de Lego Mindstorm.",
    category: "Tutorial",
    uploadedAt: "2026-05-14",
  },
  {
    id: "MhPR8r-dZww",
    title: "Estructura 1 R2D2 FLL 2023 2024",
    description: "Demostración de la primera estructura del robot R2D2 utilizada en la temporada FLL 2023-2024.",
    category: "Laboratorio",
    uploadedAt: "2026-05-21",
  },
  {
    id: "1X6Gv-l7Fr4",
    title: "Estructura 1 R2D2 FLL 2018 2019",
    description: "Revisión de la primera estructura del robot R2D2 de la temporada histórica FLL 2018-2019.",
    category: "Laboratorio",
    uploadedAt: "2026-05-21",
  },
  {
    id: "U7xykxfNLvg?",
    title: "Estructura 3 R2D2 FLL 2023 2024",
    description: "Demostración de la tercera estructura del robot R2D2 utilizada en la temporada FLL 2023-2024.",
    category: "Laboratorio",
    uploadedAt: "2026-05-21",
  },
  {
    id: "iWeHKTkburk?",
    title: "Estructura R2D2 Liga Robótica 2024",
    description: "Presentación de la estructura del robot R2D2 para la Liga Robótica 2024.",
    category: "Laboratorio",
    uploadedAt: "2026-05-21",
  },
  {
    id: "pAQn3F7ESZ0",
    title: "Seguimiento de Linea Regulado con un Único Sensor EV3/SPIKE",
    description: "Programa nivel medio de seguimiento de linea regulado por medio de un único sensor.",
    category: "Laboratorio",
    uploadedAt: "2026-05-21",
  },
];

// Helpers
export const getYoutubeThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const getYoutubeEmbedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

