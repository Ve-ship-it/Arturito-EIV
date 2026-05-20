"use client";

import { useState, useEffect, useCallback } from "react";
import { Video, Play, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  videoData,
  videoCategories,
  getYoutubeEmbedUrl,
  getTimeAgo,
  type VideoItem,
} from "@/app/lib/videos";

// ─── Modal ────────────────────────────────────────────────────────────────────
function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-primary rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-accent text-white hover:text-primary transition-colors rounded-full p-2"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        <div className="aspect-video w-full">
          <iframe
            src={getYoutubeEmbedUrl(video.id)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="p-6">
          <span className="text-accent text-[10px] font-bold uppercase tracking-widest">
            {video.category}
          </span>
          <h2 className="text-white text-xl font-bold mt-1 mb-2 leading-snug">
            {video.title}
          </h2>
          <p className="text-white/60 text-sm">{video.description}</p>
          <div className="mt-4 text-white/40 text-xs">
            {getTimeAgo(video.uploadedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card de video ────────────────────────────────────────────────────────────
function VideoCard({ video, onClick }: { video: VideoItem; onClick: () => void }) {
  return (
    <Card className="overflow-hidden group border-none shadow-md hover:shadow-xl transition-all cursor-pointer">
      {/* iframe sin autoplay — muestra el primer frame/miniatura nativa de YouTube */}
      <div className="relative aspect-video bg-primary/10" onClick={onClick}>
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full pointer-events-none"
          loading="lazy"
        />
        {/* Overlay clicable encima del iframe para abrir el modal */}
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-accent/90 text-primary p-4 rounded-full scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg opacity-0 group-hover:opacity-100">
            <Play fill="currentColor" size={24} />
          </div>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">
          {video.category}
        </div>
        <h3 className="text-base font-bold text-primary mb-3 leading-tight line-clamp-2">
          {video.title}
        </h3>
        <div className="text-xs text-muted-foreground">
          {getTimeAgo(video.uploadedAt)}
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────
export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const filtered = (videoData || []).filter((v) => {
    const matchCategory = activeCategory === "Todos" || v.category === activeCategory;
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const closeModal = useCallback(() => setSelectedVideo(null), []);

  return (
    <>
      {selectedVideo && <VideoModal video={selectedVideo} onClose={closeModal} />}

      <div className="pt-24 pb-20">
        <section className="bg-primary text-white py-20 mb-12">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
              <Video className="text-accent" /> Galería de Videos
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Sumérgete en el mundo visual de R2D2. Tutoriales, resúmenes de
              competencias y vlogs de nuestro día a día.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                className="pl-10 h-12"
                placeholder="Buscar videos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {videoCategories.map((cat) => (
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

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((vid) => (
                <VideoCard
                  key={vid.id}
                  video={vid}
                  onClick={() => setSelectedVideo(vid)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-muted-foreground">
              <Video size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No se encontraron videos.</p>
              <p className="text-sm mt-1">Prueba con otra búsqueda o categoría.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}