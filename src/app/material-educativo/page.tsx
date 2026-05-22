"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Search,
  GraduationCap,
  FileText,
  X,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ─── Datos de cursos ──────────────────────────────────────────────────────────
// Para agregar un curso nuevo:
// 1. Sube el PDF a /public/docs/nombre-archivo.pdf
// 2. Sube la imagen de portada a /public/docs/previews/nombre-archivo.jpg
// 3. Agrega una entrada aquí

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  preview: string;  // ruta a /public/docs/previews/
  pdf: string;      // ruta a /public/docs/
}

const courses: Course[] = [
  {
    id: 1,
    title: "Fundamentos de Programación Arduino",
    description: "Domina el lenguaje C++ para controladores AVR y construye tus primeros algoritmos de control.",
    category: "Programación",
    preview: "/docs/previews/arduino-fundamentos.jpg",
    pdf: "/docs/arduino-fundamentos.pdf",
  },
  {
    id: 2,
    title: "Diseño Mecánico CAD con Fusion 360",
    description: "Aprende a modelar piezas en 3D para impresión y mecanizado CNC con precisión milimétrica.",
    category: "Mecánica",
    preview: "/docs/previews/cad-fusion360.jpg",
    pdf: "/docs/cad-fusion360.pdf",
  },
  {
    id: 3,
    title: "Electrónica de Potencia para Motores",
    description: "Entiende cómo funcionan los drivers H-Bridge y la gestión de energía en robots de alta velocidad.",
    category: "Electrónica",
    preview: "/docs/previews/electronica-motores.jpg",
    pdf: "/docs/electronica-motores.pdf",
  },
  {
    id: 4,
    title: "Visión Artificial Básica",
    description: "Introducción al procesamiento de imágenes con OpenCV para el seguimiento de líneas y objetos.",
    category: "IA",
    preview: "/docs/previews/vision-artificial.jpg",
    pdf: "/docs/vision-artificial.pdf",
  },
];

const categories = ["Todos", "Programación", "Mecánica", "Electrónica", "IA"];

// ─── Modal PDF ────────────────────────────────────────────────────────────────
function PDFModal({ course, onClose }: { course: Course; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-primary rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col"
        style={{ height: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
          <div>
            <span className="text-accent text-[10px] font-bold uppercase tracking-widest">
              {course.category}
            </span>
            <h2 className="text-white text-lg font-bold leading-snug mt-0.5">
              {course.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={course.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
              title="Abrir en pestaña nueva"
            >
              <ExternalLink size={18} />
            </a>
            <button
              onClick={onClose}
              className="bg-black/50 hover:bg-accent text-white hover:text-primary transition-colors rounded-full p-2 ml-2"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Visor PDF */}
        <iframe
          src={course.pdf}
          className="w-full flex-1"
          title={course.title}
        />
      </div>
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────
export default function EducationPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filtered = courses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "Todos" || c.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <>
      {selectedCourse && (
        <PDFModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}

      <div className="pt-24 pb-20">
        <section className="bg-primary text-white py-20 mb-12">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
              <BookOpen className="text-accent" /> Material Educativo
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Aprende robótica de la mano de expertos. Cursos estructurados para
              todos los niveles, desde principiantes hasta expertos.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-[1200px]">
          {/* Búsqueda */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                className="pl-10 h-12 border-2 focus-visible:ring-accent"
                placeholder="Buscar cursos... Ej: Arduino, CAD, IA"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-primary border-primary/40 hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de cursos */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden group border-2 border-transparent hover:border-accent transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCourse(course)}
                >
                  {/* Portada PDF */}
                  <div className="relative h-48 bg-muted">
                    <Image
                      src={course.preview}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {course.category}
                    </div>
                    {/* Overlay con ícono PDF */}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/50 transition-colors flex items-center justify-center">
                      <div className="bg-accent/90 text-primary p-4 rounded-full scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg opacity-0 group-hover:opacity-100">
                        <FileText size={24} />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-lg font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                      {course.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-2">
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                      <GraduationCap size={18} /> Ver material
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-muted-foreground">
              <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No se encontraron cursos.</p>
              <p className="text-sm mt-1">Prueba con otra búsqueda o categoría.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}