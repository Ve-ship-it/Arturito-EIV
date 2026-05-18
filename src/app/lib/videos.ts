export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  views: string;
  timeAgo: string;
}

export const videoCategories = [
  "Todos",
  "Tutorial",
  "Competencia",
  "Vlog",
  "Entrevistas",
  "Laboratorio",
] as const;

export const videoData: VideoItem[] = [
  {
    id: "LzXmrsC5O_Q",
    title: "Tutorial Avanzado: Programación y Control de Motores",
    description: "Aprende a programar y controlar motores paso a paso con nuestro equipo.",
    category: "Tutorial",
    views: "1.5k",
    timeAgo: "Hace 1 mes",
  },
  {
    id: "yh4QJZ0ApgY",
    title: "Guía Práctica: Conexión de Sensores en Robótica",
    description: "Todo lo que necesitas saber para conectar sensores en tus proyectos robóticos.",
    category: "Tutorial",
    views: "920",
    timeAgo: "Hace 3 semanas",
  },
  {
    id: "fcKpZk9TzmI",
    title: "Calibración de Componentes y Pruebas de Sistema",
    description: "Proceso completo de calibración y validación de componentes electrónicos.",
    category: "Laboratorio",
    views: "1.1k",
    timeAgo: "Hace 2 semanas",
  },
  {
    id: "Y4SFM7sj5YI",
    title: "Introducción al Entorno de Desarrollo R2D2",
    description: "Primera aproximación al stack tecnológico y entorno de trabajo del equipo.",
    category: "Tutorial",
    views: "2.4k",
    timeAgo: "Hace 5 días",
  },
];

// Helpers
export const getYoutubeThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const getYoutubeEmbedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;