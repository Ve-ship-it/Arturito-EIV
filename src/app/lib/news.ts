export interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  image: string;
  url: string;
}

export const newsData: NewsItem[] = [
  {
    id: 5,
    title: "R2D2 EIV representará a Chile en competencia internacional de robótica en Corea del Sur",
    content:
      "El equipo de robótica R2D2 de la Escuela Industrial Superior de Valparaíso recibió la visita del Delegado Presidencial Regional, el Seremi de Educación y el Seremi de Ciencia, quienes conocieron de cerca el trabajo del taller y expresaron su orgullo por la clasificación del equipo al campeonato internacional. El equipo, bicampeón nacional de la FIRST LEGO League, viajará entre el 3 y 5 de julio a Jeonju-si, Corea del Sur, para representar a Chile ante delegaciones de todo el mundo. Fundado en 2008, el taller funciona cada sábado promoviendo competencias STEAM entre sus estudiantes.",
    date: "05 Jun 2026",
    category: "Competencia",
    image: "https://www.eiv.cl/wp-content/uploads/2026/03/Foto-Visita-Gobernador-3-4-2026.webp",
    url: "https://dprvalparaiso.dpr.gob.cl/2026/06/05/equipo-de-robotica-de-la-escuela-industrial-superior-de-valparaiso-representara-a-chile-en-competencia-internacional-en-corea/",
  },
  {
    id: 1,
    title: "Gobernador de Valparaíso visita al equipo de Robótica R2D2 EIV",
    content:
      "El lunes 16 de marzo, en nuestra Escuela Industrial de Valparaíso recibimos la visita del Gobernador de la Región de Valparaíso, Rodrigo Mundaca, quien recorrió el establecimiento para conocer de cerca la historia y el trabajo desarrollado por el ACLE de robótica R2D2 EIV. Durante la jornada, los estudiantes presentaron su trayectoria, logros y el innovador proyecto en el que actualmente se encuentran trabajando, dando cuenta del talento, compromiso y visión que los ha llevado a convertirse en bicampeones nacionales de la FIRST LEGO League en sus ediciones 2024 y 2025. Asimismo, compartieron su experiencia representando a la escuela y al país en la competencia internacional realizada el año pasado en Houston, Estados Unidos. Actualmente, el equipo se prepara para nuevos desafíos internacionales y proyecta su participación en la próxima instancia que se desarrollará en Corea del Sur.",
    date: "18 Mar 2026",
    category: "Competencia",
    image: "https://www.eiv.cl/wp-content/uploads/2026/03/Foto-Visita-Gobernador-3-4-2026.webp",
    url: "https://www.eiv.cl/gobernador-de-valparaiso-visita-al-equipo-de-robotica-r2d2-eiv/",
  },
  {
    id: 2,
    title: "Bicampeones Nacionales: R2D2 EIV destaca en la First LEGO League 2025",
    content:
      "El pasado sábado 6 de diciembre, en dependencias del Colegio Alemán de Chicureo (Santiago), el equipo R2D2 EIV alcanzó el primer lugar nacional en la competencia First LEGO League 2025, consagrándose como Bicampeones Nacionales, tras repetir el histórico triunfo obtenido en 2024. Este destacado resultado reafirma el alto nivel del ACLE de Robótica de nuestra institución y consolida a R2D2 como uno de los equipos más sólidos, creativos y consistentes del país. La comunidad educativa celebra con profundo orgullo este logro, reflejo del compromiso, la disciplina y la innovación de cada uno de sus integrantes.",
    date: "15 Dic 2025",
    category: "Competencia",
    image: "https://www.eiv.cl/wp-content/uploads/2025/12/Portada-Bicampeones-Nacionales-2025.webp",
    url: "https://www.eiv.cl/bicampeones-nacionales-r2d2-eiv-destaca-en-la-first-lego-league-2025/",
  },
  {
    id: 3,
    title: "R2D2 EIV clasifica a la Final Nacional de la First Lego League 2025",
    content:
      "El sábado 8 de noviembre, nuestro equipo de robótica R2D2 EIV vivió una jornada inolvidable durante la Competencia Regional First Lego League (FLL) 2025, realizada en el colegio Pumahue de Curauma, donde equipos escolares de la región demostraron su creatividad, conocimientos y habilidades técnicas. Los estudiantes del ACLE nos llenaron de orgullo al conseguir el primer lugar en Proyecto de Innovación y el segundo lugar regional, logro que les permitirá representar a nuestro establecimiento en la competencia nacional.",
    date: "19 Nov 2025",
    category: "Competencia",
    image: "https://www.eiv.cl/wp-content/uploads/2025/11/Portada-Campeonato-Regional-2025.webp",
    url: "https://www.eiv.cl/r2d2-eiv-clasifica-a-la-final-nacional-de-la-first-lego-league-2025/",
  },
  {
    id: 4,
    title: "¡Campeones Nacionales! El Equipo R2D2 EIV Clasifica a la First Championship en Houston",
    content:
      "El pasado 7 de diciembre celebramos un hito que marcará el futuro de nuestros estudiantes y de la educación tecnológica en el país. El equipo R2D2 EIV se coronó campeón nacional en la final de la First Lego League 2024, asegurando su pase para competir en el First Championship en Houston, Texas, en abril de 2025, representando a Chile ante equipos de todo el mundo.",
    date: "09 Dic 2024",
    category: "Competencia",
    image: "https://www.eiv.cl/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-8.40.12-PM-1024x768.jpeg",
    url: "https://www.eiv.cl/campeones-nacionales-el-equipo-r2d2-eiv-clasifica-a-la-first-championship-en-houston/",
  },
];