import Image from "next/image";
import { Newspaper, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// Mock news data
const newsData = [
  {
    id: 1,
    title: "Gran Victoria en el Nacional de Robótica 2024",
    content:
      "Nuestro equipo de robótica R2D2 ha logrado el primer puesto en la categoría de 'Robots Autónomos' durante la competencia nacional celebrada este fin de semana. El prototipo 'Volt-1' demostró una precisión sin precedentes en la resolución del laberinto dinámico, superando a más de 30 equipos de todo el país. Los jueces destacaron especialmente la eficiencia energética del diseño y la rapidez de respuesta de nuestros sensores personalizados.",
    date: "15 Oct 2024",
    category: "Competencia",
    image: PlaceHolderImages.find((img) => img.id === "news-1")?.imageUrl,
  },
  {
    id: 2,
    title: "Nueva Alianza Educativa con TechLabs",
    content:
      "Estamos emocionados de anunciar una nueva colaboración estratégica con TechLabs, líder en componentes electrónicos de precisión. Esta alianza proporcionará a nuestro equipo acceso exclusivo a kits de desarrollo de última generación y mentoría directa de ingenieros expertos. Además, lanzaremos conjuntamente una serie de talleres gratuitos sobre inteligencia artificial aplicada a la robótica para toda la comunidad universitaria.",
    date: "02 Oct 2024",
    category: "Alianzas",
    image: PlaceHolderImages.find((img) => img.id === "news-2")?.imageUrl,
  },
  {
    id: 3,
    title: "Lanzamiento del Programa de Mentoría Junior",
    content:
      "Con el objetivo de fomentar el talento joven, R2D2 Central lanza oficialmente su programa de mentoría para estudiantes de primer año. Los miembros senior del equipo guiarán a los nuevos reclutas en el diseño CAD, programación C++ y ensamblaje mecánico. Esta iniciativa busca asegurar la continuidad de nuestra excelencia y preparar a la próxima generación de competidores de élite.",
    date: "20 Sep 2024",
    category: "Equipo",
    image: PlaceHolderImages.find((img) => img.id === "team-history")?.imageUrl,
  },
];

export default async function NewsPage() {
  // Resúmenes temporales sin IA
  const newsWithSummaries = newsData.map((news) => ({
    ...news,
    summary: "Resumen temporal desactivado.",
  }));

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary text-white py-20 mb-12">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <Newspaper className="text-accent" /> Noticias R2D2
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Descubre las últimas actualizaciones, logros y eventos de nuestra
            comunidad robótica.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12">
          {newsWithSummaries.map((news) => (
            <Card
              key={news.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row h-full"
            >
              <div className="relative w-full md:w-1/3 min-h-[240px]">
                <Image
                  src={
                    news.image ||
                    "https://picsum.photos/seed/placeholder/600/400"
                  }
                  alt={news.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {news.category}
                </div>
              </div>

              <CardContent className="p-8 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-medium uppercase tracking-tighter">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {news.date}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-primary" />3 min lectura
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-primary mb-4 leading-tight">
                    {news.title}
                  </h2>

                  <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-accent mb-4 italic text-primary/80">
                    <p className="text-sm">
                      <span className="font-bold text-accent">
                        Resumen:
                      </span>{" "}
                      {news.summary}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                    {news.content}
                  </p>
                </div>

                <Button className="bg-primary hover:bg-primary/90 text-white w-fit gap-2">
                  Leer artículo completo <ArrowRight size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}