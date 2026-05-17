
"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, Search, GraduationCap, PlayCircle, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const courses = [
  {
    id: 1,
    title: "Fundamentos de Programación Arduino",
    description: "Domina el lenguaje C++ para controladores AVR y construye tus primeros algoritmos de control.",
    progress: 75,
    modules: 12,
    completedModules: 9,
    category: "Programación",
    image: PlaceHolderImages.find(img => img.id === 'course-1')?.imageUrl
  },
  {
    id: 2,
    title: "Diseño Mecánico CAD con Fusion 360",
    description: "Aprende a modelar piezas en 3D para impresión y mecanizado CNC con precisión milimétrica.",
    progress: 30,
    modules: 15,
    completedModules: 4,
    category: "Mecánica",
    image: "https://picsum.photos/seed/cad-1/600/400"
  },
  {
    id: 3,
    title: "Electrónica de Potencia para Motores",
    description: "Entiende cómo funcionan los drivers H-Bridge y la gestión de energía en robots de alta velocidad.",
    progress: 100,
    modules: 8,
    completedModules: 8,
    category: "Electrónica",
    image: "https://picsum.photos/seed/electronics/600/400"
  },
  {
    id: 4,
    title: "Visión Artificial Básica",
    description: "Introducción al procesamiento de imágenes con OpenCV para el seguimiento de líneas y objetos.",
    progress: 0,
    modules: 10,
    completedModules: 0,
    category: "IA",
    image: "https://picsum.photos/seed/vision/600/400"
  }
];

export default function EducationPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary text-white py-20 mb-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <BookOpen className="text-accent" /> Material Educativo
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Aprende robótica de la mano de expertos. Cursos estructurados para todos los niveles, desde principiantes hasta expertos.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-8 mb-12 items-end">
          <div className="flex-1 w-full">
            <label className="text-sm font-bold text-primary mb-2 block uppercase tracking-wider">Buscar Cursos</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                className="pl-10 h-12 border-2 focus-visible:ring-accent"
                placeholder="Ej. Arduino, CAD, IA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <Tabs defaultValue="todos" className="w-fit">
              <TabsList className="bg-muted p-1 h-12">
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="en-progreso">En Progreso</TabsTrigger>
                <TabsTrigger value="completados">Completados</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden group border-2 border-transparent hover:border-accent transition-all duration-300">
              <div className="relative h-48">
                <Image src={course.image || ""} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {course.category}
                </div>
                {course.progress === 100 && (
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-accent text-primary font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-xl">
                      <CheckCircle size={20} /> CERTIFICADO DISPONIBLE
                    </div>
                  </div>
                )}
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className={course.progress === 100 ? "text-green-600" : "text-primary"}>
                      {course.progress === 100 ? "Completado" : `Progreso: ${course.progress}%`}
                    </span>
                    <span className="text-muted-foreground">{course.completedModules}/{course.id === 3 ? '8' : '12'} Módulos</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${course.progress === 100 ? "bg-green-500" : "bg-accent"}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <PlayCircle size={16} className="text-primary" /> 15h de Video
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <FileText size={16} className="text-primary" /> 24 Recursos
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4 gap-2">
                    <GraduationCap size={18} /> {course.progress > 0 ? (course.progress === 100 ? "Repasar Contenido" : "Continuar Curso") : "Empezar Ahora"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
