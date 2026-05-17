
import Image from "next/image";
import { Video, Play, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const videoData = [
  { id: 1, title: "Test Run: Volt-1", duration: "03:45", category: "Competencia", views: "1.2k" },
  { id: 2, title: "Detrás de Escena: Armado", duration: "12:20", category: "Vlog", views: "850" },
  { id: 3, title: "Entrevista con el Capitán", duration: "08:15", category: "Entrevistas", views: "2.1k" },
  { id: 4, title: "Highlights Nacional 2023", duration: "05:30", category: "Competencia", views: "5.4k" },
  { id: 5, title: "Diseño 3D en 5 minutos", duration: "05:00", category: "Tutorial", views: "1.1k" },
  { id: 6, title: "Pruebas de Sensor Lidar", duration: "02:15", category: "Laboratorio", views: "430" },
];

export default function VideosPage() {
  const thumbnail = PlaceHolderImages.find(img => img.id === 'video-1')?.imageUrl;

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary text-white py-20 mb-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <Video className="text-accent" /> Galería de Videos
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Sumérgete en el mundo visual de R2D2. Tutoriales, resúmenes de competencias y vlogs de nuestro día a día.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input className="pl-10 h-12" placeholder="Buscar videos..." />
          </div>
          <Button variant="outline" className="h-12 border-primary text-primary hover:bg-primary hover:text-white gap-2">
            <Filter size={18} /> Filtrar por Categoría
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((vid) => (
            <Card key={vid.id} className="overflow-hidden group border-none shadow-md hover:shadow-xl transition-all cursor-pointer">
              <div className="relative aspect-video">
                <Image src={thumbnail || ""} alt={vid.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                  <div className="bg-accent/90 text-primary p-4 rounded-full scale-75 group-hover:scale-100 transition-transform shadow-lg">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                  {vid.duration}
                </div>
              </div>
              <CardContent className="p-5">
                <div className="text-accent text-[10px] font-bold uppercase mb-1">{vid.category}</div>
                <h3 className="text-lg font-bold text-primary mb-2 leading-tight">{vid.title}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{vid.views} visualizaciones</span>
                  <span>Haced 2 semanas</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full font-bold">
            Cargar más videos
          </Button>
        </div>
      </div>
    </div>
  );
}
