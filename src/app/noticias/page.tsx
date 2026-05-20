"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Newspaper, Calendar, Clock, ArrowRight, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { newsData, type NewsItem } from "@/app/lib/news";

// ─── Modal de noticia ─────────────────────────────────────────────────────────
function NewsModal({ news, onClose }: { news: NewsItem; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-primary text-white transition-colors rounded-full p-2"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        {/* Imagen */}
        <div className="relative h-56 w-full shrink-0">
          <Image
            src={news.image || "https://picsum.photos/seed/placeholder/600/400"}
            alt={news.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className="bg-accent text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full">
              {news.category}
            </span>
            <span className="text-white/80 text-xs flex items-center gap-1">
              <Calendar size={11} /> {news.date}
            </span>
          </div>
        </div>

        {/* Contenido scrolleable */}
        <div className="overflow-y-auto p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-primary leading-snug">
            {news.title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {news.content}
          </p>

          {/* Link al artículo original */}
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2 w-fit">
              Ver artículo original <ExternalLink size={15} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Página de noticias ───────────────────────────────────────────────────────
export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <>
      {selectedNews && (
        <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}

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
            {(newsData || []).map((news) => (
              <Card
                key={news.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row h-full"
              >
                <div className="relative w-full md:w-1/3 min-h-[240px]">
                  <Image
                    src={news.image || "https://picsum.photos/seed/placeholder/600/400"}
                    alt={news.title}
                    fill
                    className="object-cover"
                    unoptimized
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
                        <Clock size={14} className="text-primary" />
                        3 min lectura
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-primary mb-4 leading-tight">
                      {news.title}
                    </h2>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                      {news.content}
                    </p>
                  </div>

                  <Button
                    onClick={() => setSelectedNews(news)}
                    className="bg-primary hover:bg-primary/90 text-white w-fit gap-2"
                  >
                    Leer artículo completo <ArrowRight size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}