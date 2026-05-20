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
    id: "LzXmrsC5O_Q",
    title: "Tutorial Avanzado: Programación y Control de Motores",
    description: "Aprende a programar y controlar motores paso a paso con nuestro equipo.",
    category: "Tutorial",
    uploadedAt: "2026-04-19",
  },
  {
    id: "yh4QJZ0ApgY",
    title: "Guía Práctica: Conexión de Sensores en Robótica",
    description: "Todo lo que necesitas saber para conectar sensores en tus proyectos robóticos.",
    category: "Tutorial",
    uploadedAt: "2026-04-26",
  },
  {
    id: "fcKpZk9TzmI",
    title: "Calibración de Componentes y Pruebas de Sistema",
    description: "Proceso completo de calibración y validación de componentes electrónicos.",
    category: "Laboratorio",
    uploadedAt: "2026-05-05",
  },
  {
    id: "Y4SFM7sj5YI",
    title: "Introducción al Entorno de Desarrollo R2D2",
    description: "Primera aproximación al stack tecnológico y entorno de trabajo del equipo.",
    category: "Tutorial",
    uploadedAt: "2026-05-14",
  },
  {
    id: "mbSuPyXu7VA",
    title: "Apoya a Nuestro Equipo R2D2",
    description: "Conoce cómo puedes ser parte de nuestra historia apoyando al equipo en competencias nacionales e internacionales. Cada aporte nos acerca más a la cima.",
    category: "Vlog",
    uploadedAt: "2026-05-19",
  },
];

// Helpers
export const getYoutubeThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const getYoutubeEmbedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;