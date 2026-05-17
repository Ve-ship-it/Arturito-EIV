import Image from "next/image";
import { Users, Target, Shield, History, Download, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
// 1. Importamos los componentes del Carrusel de Shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamImg = PlaceHolderImages.find(img => img.id === 'team-history');

// 2. Definimos la estructura y los datos de los 7 competidores
const COMPETITORS = [
  {
    name: 'Joaquin Torres',
    role: 'Constructor',
    desc: 'Especialista en diseño mecánico y manufactura CNC para robótica de combate.'
  },
  {
    name: 'Carla Opazo',
    role: 'Programadora',
    desc: 'Desarrolladora de sistemas embebidos, visión artificial y autonomía de drones.'
  },
  {
    name: 'Alan Vega',
    role: 'Mentor',
    desc: 'Ex-competidor internacional encargado de guiar las estrategias de diseño electrónico.'
  },
  {
    name: 'Sofía Méndez',
    role: 'Coach',
    desc: 'Líder de equipo enfocada en la gestión de proyectos, logística y dinámicas de grupo.'
  },
  {
    name: 'Lucas Silva',
    role: 'Diseñador CAD',
    desc: 'Encargado del modelado 3D interactivo y simulaciones de estrés de materiales.'
  },
  {
    name: 'Elena Rostova',
    role: 'Especialista en Control',
    desc: 'Optimizadora de algoritmos PID y telemetría en tiempo real para prototipos.'
  },
  {
    name: 'Mateo Díaz',
    role: 'Programador Backend',
    desc: 'Desarrollador de la infraestructura de software y comunicación entre bases de datos.'
  }
];

export default function TeamPage() {
  return (
    <div className="pt-24">
      {/* ... (Sección Hero y ¿Qué es el R2D2? se mantienen igual) ... */}

      {/* Competitors Section */}
      <section id="competidores" className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3">
              <Shield className="text-accent" /> Nuestros Competidores
            </h2>
            <p className="text-white/70">Conoce nuestros representantes en las competencias.</p>
          </div>

          {/* 3. Implementación del Carrusel con loop infinito */}
          <Carousel 
            opts={{
              align: "start",
              loop: true, // Esto permite dar la vuelta completa infinitamente
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {COMPETITORS.map((comp) => (
                <CarouselItem key={comp.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="bg-white/5 border-white/10 text-white overflow-hidden group hover:bg-accent/10 transition-colors h-full">
                      <CardContent className="p-8 text-center flex flex-col h-full justify-between items-center">
                        <div>
                          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Shield size={32} className="text-accent" />
                          </div>
                          <h3 className="text-xl font-bold mb-1">{comp.name}</h3>
                          {/* Mostramos el Rol único */}
                          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-4">
                            {comp.role}
                          </span>
                          {/* Mostramos la descripción única */}
                          <p className="text-white/50 text-sm mb-6 line-clamp-3">
                            {comp.desc}
                          </p>
                        </div>
                        <Button variant="link" className="text-accent gap-2 p-0 mt-auto">
                          Ver Perfil <ExternalLink size={14} />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Botones de navegación (Flechas flotantes) */}
            <div className="hidden sm:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* ... (Sección Guías Oficiales y Archivo Histórico se mantienen igual) ... */}
    </div>
  );
}