"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Newspaper, Video, Users, BookOpen, Handshake, Star, Play, X } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { newsData } from "@/app/lib/news";
import { videoData, getYoutubeEmbedUrl, getTimeAgo, type VideoItem } from "@/app/lib/videos";
import { HeroSection } from "@/components/hero-section";


// ─── Video Modal ──────────────────────────────────────────────────────────────
function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-primary rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-accent text-white hover:text-primary transition-colors rounded-full p-2"
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
          <h2 className="text-white text-xl font-bold mt-1 mb-2">{video.title}</h2>
          <p className="text-white/60 text-sm">{video.description}</p>
          <div className="mt-4 text-white/40 text-xs">
            {getTimeAgo(video.uploadedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const teamImg = PlaceHolderImages.find((img) => img.id === "team-history");
  const courseImg = PlaceHolderImages.find((img) => img.id === "course-1");

  const topNews = (newsData || []).slice(0, 3);

  const sorted = [...(videoData || [])].sort(
    (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
  );

  const featuredVideo =
    sorted.find((v) => ["Vlog", "Entrevistas", "Competencia"].includes(v.category)) ||
    sorted.find((v) => v.category === "Tutorial") ||
    sorted.find((v) => v.category === "Laboratorio") ||
    sorted[0];

  return (
    <>
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}

      <div className="flex flex-col w-full overflow-hidden">

        <HeroSection />

        {/* News Preview Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <Newspaper className="text-accent" /> Últimas Noticias
                </h2>
                <p className="text-white/70">Mantente al tanto de nuestros avances y victorias.</p>
              </div>
              <Link href="/noticias">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary gap-2">
                  Ver todas <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topNews.map((news) => (
                <Card key={news.id} className="bg-white/5 border-white/10 overflow-hidden group hover:border-accent/50 transition-all">
                  <div className="relative h-48">
                    <Image
                      src={news.image || "https://picsum.photos/seed/placeholder/600/400"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-accent text-xs font-bold mb-2 uppercase tracking-wider">
                      {news.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">{news.title}</h3>
                    <p className="text-white/60 text-sm line-clamp-2 mb-4">{news.content}</p>
                    <Link href="/noticias">
                      <Button variant="link" className="text-accent p-0 hover:text-white">
                        Leer más
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-primary">
                  <Video className="text-primary" /> Galería de Videos
                </h2>
                <p className="text-muted-foreground">Revive la acción de nuestros robots en tiempo real.</p>
              </div>
              <Link href="/videos">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white gap-2">
                  Ver todos <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {featuredVideo ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* iframe sin autoplay — muestra miniatura nativa de YouTube */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredVideo.id}?rel=0&modestbranding=1`}
                    title={featuredVideo.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full pointer-events-none"
                    loading="lazy"
                  />
                  {/* Overlay clicable */}
                  <div
                    className="absolute inset-0 bg-primary/10 group-hover:bg-primary/40 transition-colors flex items-center justify-center"
                    onClick={() => setSelectedVideo(featuredVideo)}
                  >
                    <div className="bg-accent/90 text-primary p-5 rounded-full scale-90 group-hover:scale-100 transition-transform shadow-lg">
                      <Play fill="currentColor" size={32} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full pointer-events-none">
                    {featuredVideo.category}
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-5">
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-border">
                    <div className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2">
                      Video Destacado · {featuredVideo.category}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 leading-snug">
                      {featuredVideo.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {featuredVideo.description}
                    </p>
                    <div className="text-xs text-muted-foreground mb-5">
                      {getTimeAgo(featuredVideo.uploadedAt)}
                    </div>
                    <Button
                      onClick={() => setSelectedVideo(featuredVideo)}
                      className="bg-primary text-white hover:bg-primary/90 gap-2"
                    >
                      <Play size={16} fill="currentColor" /> Ver video
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-12">No hay videos disponibles.</p>
            )}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/trabajando.jpg"
                  alt="Equipo R2D2"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                  <Users className="text-accent" /> Team R2D2
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  R2D2 no es solo un equipo, es un ecosistema de aprendizaje donde ingenieros,
                  programadores y diseñadores colaboran para empujar los límites de la automatización.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/team-r2d2#que-es" className="group p-4 bg-white/5 rounded-lg hover:bg-accent/10 transition-colors border border-white/10">
                    <h4 className="font-bold text-accent mb-1">¿Qué es R2D2?</h4>
                    <p className="text-xs text-white/50">Nuestra filosofía y misión.</p>
                  </Link>
                  <Link href="/team-r2d2#competidores" className="group p-4 bg-white/5 rounded-lg hover:bg-accent/10 transition-colors border border-white/10">
                    <h4 className="font-bold text-accent mb-1">Competidores</h4>
                    <p className="text-xs text-white/50">Nuestros representantes.</p>
                  </Link>
                  <Link href="/team-r2d2#guias" className="group p-4 bg-white/5 rounded-lg hover:bg-accent/10 transition-colors border border-white/10">
                    <h4 className="font-bold text-accent mb-1">Artículos y Publicaciones</h4>
                    <p className="text-xs text-white/50">Crónica y reconocimientos a nuestra historia.</p>
                  </Link>
                  <Link href="/team-r2d2#archivo" className="group p-4 bg-white/5 rounded-lg hover:bg-accent/10 transition-colors border border-white/10">
                    <h4 className="font-bold text-accent mb-1">Archivo Histórico</h4>
                    <p className="text-xs text-white/50">Nuestra trayectoria.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

{/*Education Preview
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-primary">
                <BookOpen className="text-primary" /> Material Educativo
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Accede a nuestros cursos especializados en robótica, desde fundamentos básicos
                hasta sistemas de control avanzados.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-shadow border-2 border-transparent hover:border-accent">
                <div className="relative h-40">
                  <Image src={courseImg?.imageUrl || ""} alt="Course" fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">
                    En Curso
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    Fundamentos de Programación Arduino
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-muted-foreground">
                      <span>Progreso</span>
                      <span>75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="md:col-span-2 lg:col-span-1 flex items-center justify-center p-8 bg-muted rounded-xl border-2 border-dashed border-border">
                <Link href="/material-educativo" className="flex flex-col items-center gap-4 text-center group">
                  <div className="bg-primary p-4 rounded-full text-white group-hover:scale-110 transition-transform">
                    <ArrowRight size={32} />
                  </div>
                  <span className="font-bold text-primary">Explorar todos los cursos</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

*/}

        {/* Partners & Sponsors Section */}
        <section id="socios-sponsors" className="py-24 bg-muted border-y border-border">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3 text-primary">
                <Handshake className="text-primary" /> Nuestros Socios & Sponsors
              </h2>
              <p className="text-muted-foreground">
                Las organizaciones que hacen posible nuestro éxito.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-70">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white p-8 rounded-xl shadow-sm hover:opacity-100 transition-opacity min-h-[240px]"
                >
                  {i === 1 ? (
                    <Image
                      src="/images/logo_gob_reg_val.png"
                      alt="Gobierno Regional de Valparaíso"
                      width={420}
                      height={240}
                      className="object-contain max-w-full max-h-full"
                    />
                  ) : (
                    <div className="text-muted-foreground font-semibold text-lg">
                      Próximamente
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
