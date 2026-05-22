import Image from "next/image";
import { Users, Target, Shield, History, Download, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PublicationsSection } from "@/components/publications-section";
import { HistoricalArchive } from "@/components/historical-archive";
// 1. Importamos los componentes del Carrusel de Shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamImg = PlaceHolderImages.find(img => img.id === 'team-history');

// 2. Definimos la estructura y los datos de los 15 competidores
const COMPETITORS = [
  {
    name: 'Gabriel Córdova',
    role: 'Competidor',
    desc: 'Encargado de investigación y exposición de proyecto innovador.'
  },
  {
    name: 'Bernardita Tapia',
    role: 'Competidor',
    desc: 'Encargada de investigación y exposición de proyecto innovador.'
  },
  {
    name: 'Christofer Guzmán',
    role: 'Competidor',
    desc: 'Lanzador y constructor de robot.'
  },
  {
    name: 'Matías Letelier',
    role: 'Estudiante',
    desc: 'Constructor y modelador 3D de estructuras. Aporta su conocimiento y experiencia al equipo.'
  },
  {
    name: 'Maikol Salaverria',
    role: 'Competidor',
    desc: 'Constructor, programador y lanzador de robot.'
  },
  {
    name: 'Joaquín Torres',
    role: 'Competidor',
    desc: 'Comunicador, presentador de cultura y redactor de guiones.'
  },
  {
    name: 'Javier Bustos',
    role: 'Competidor',
    desc: 'Lanzador y constructor de robot.'
  },
  {
    name: 'Martín Arancibia',
    role: 'Competidor',
    desc: 'Lanzador y constructor de robot.'
  },
  {
    name: 'Jesús Galeas',
    role: 'Mentor',
    desc: 'Investigador, diseñador y creador de prototipos electrónicos para proyectos científicos.'
  },
  {
    name: 'Constanza Ortiz',
    role: 'Mentor',
    desc: 'Traductora, diseñadora creativa y encargada de presentaciones del equipo.'
  },
  {
    name: 'Fernando Aguilera',
    role: 'Mentor',
    desc: 'Encargado de redes sociales, traductor y realizador audiovisual del equipo.'
  },
  {
    name: 'Alan Vega',
    role: 'Mentor',
    desc: 'Responsable de la planificación y estrategia del robot.'
  },
  {
    name: 'Carla Opazo',
    role: 'Coach',
    desc: 'Gestora de logística y planificadora del equipo.'
  },
  {
    name: 'Christian Aguilera',
    role: 'Coach',
    desc: 'Coordinador de actividades y organización del equipo.'
  },
  {
    name: 'Amanda Baradit',
    role: 'Comunicaciones',
    desc: 'Encargada de redes sociales, difusión institucional, grabación y edición de contenido audiovisual.'
  }
];

export default function TeamPage() {
  return (
    <div className="pt-24">
      {/* Hero Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Users size={600} strokeWidth={1} />
        </div>
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent">TEAM R2D2</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Descubre la historia, la visión y la comunidad que impulsa nuestro equipo de robótica.
          </p>
        </div>
      </section>

      {/* What is R2D2 Section */}
      <section id="que-es" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-2.JPG"
                alt="Equipo R2D2"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Target size={14} /> Misión y Visión
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">¿Qué es R2D2?</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  El Equipo de Robótica R2D2 nació en 2008 con la premisa de que la ingeniería no solo se estudia, se vive. Somos una organización multidisciplinaria compuesta por estudiantes de la Escuela Industrial Superior de Valparaíso apasionados por la innovación.
                </p>
                <p>
                  Nuestra misión es representar a nuestra institución en las competencias más exigentes del mundo, desarrollando tecnología propia y fomentando un entorno de colaboración radical donde el error es bienvenido como fuente de aprendizaje.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="p-4 bg-muted rounded-xl">
                    <h4 className="font-bold text-primary text-lg mb-1">+20</h4>
                    <p className="text-xs">Premios Nacionales</p>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <h4 className="font-bold text-primary text-lg mb-1">2</h4>
                    <p className="text-xs">Premios Internacionales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <PublicationsSection />

      {/* Historical Archive */}
      <HistoricalArchive />

    </div>
  );
}