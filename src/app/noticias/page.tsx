import Image from "next/image";
import { Newspaper, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import newsData from "../lib/news"; // <-- Aquí importamos los datos compartidos

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