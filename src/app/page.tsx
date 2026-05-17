import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Newspaper, Video, Users, BookOpen, Handshake, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-robot');
  const newsImg = PlaceHolderImages.find(img => img.id === 'news-1');
  const videoImg = PlaceHolderImages.find(img => img.id === 'video-1');
  const teamImg = PlaceHolderImages.find(img => img.id === 'team-history');
  const courseImg = PlaceHolderImages.find(img => img.id === 'course-1');

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="R2D2 Hero"
          fill
          className="object-cover brightness-[0.3]"
          priority
          data-ai-hint="robotics competition"
        />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-[1200px]">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent uppercase">ROBÓTICA R2D2 EIV</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Forjando el futuro de la robótica a través de la educación, competencia y comunidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-lg font-bold">
              Unirse al Equipo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Explorar Guías
            </Button>
          </div>
        </div>
      </section>

      {/* News Preview Section - Blue Background */}
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
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white/5 border-white/10 overflow-hidden group hover:border-accent/50 transition-all">
                <div className="relative h-48">
                  <Image src={newsImg?.imageUrl || ""} alt="News" fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <div className="text-accent text-xs font-bold mb-2 uppercase tracking-wider">Competencia</div>
                  <h3 className="text-xl font-bold mb-3 text-white">Gran Victoria en el Nacional 2024</h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4">
                    Nuestro equipo demostró una coordinación excepcional y un diseño técnico superior en la última competencia regional.
                  </p>
                  <Button variant="link" className="text-accent p-0 hover:text-white">Leer más</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section - Light Background */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image src={videoImg?.imageUrl || ""} alt="Featured Video" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-accent p-6 rounded-full text-primary scale-90 group-hover:scale-100 transition-transform">
                  <Video size={40} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-2">Tutorial: Sensores Ultrasónicos</h3>
                <p className="text-muted-foreground">Aprende cómo implementamos la detección de objetos en nuestros prototipos.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold text-primary mb-2">Resumen de Temporada 2023</h3>
                <p className="text-muted-foreground">Un viaje emocional a través de los retos y éxitos del año pasado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Blue Block */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={teamImg?.imageUrl || ""} alt="Team R2D2" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-accent" /> Team R2D2
              </h2>
              <p className="text-white/80 text-lg mb-8">
                R2D2 no es solo un equipo, es un ecosistema de aprendizaje donde ingenieros, programadores y diseñadores colaboran para empujar los límites de la automatización.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Link href="/team-r2d2#que-es" className="group p-4 bg-white/5 rounded-lg hover:bg-accent/10 transition-colors border border-white/10">
                  <h4 className="font-bold text-accent mb-1">¿Qué es R2D2?</h4>
                  <p className="text-xs text-white/50">Nuestra filosofía y misión.</p>
                </Link>
                <Link href="/team-r2d2#competidores" className="group p-4 bg-white/5 rounded-lg hover:bg-accent/10 transition-colors border border-white/10">
                  <h4 className="font-bold text-accent mb-1">Competidores</h4>
                  <p className="text-xs text-white/50">Nuestros rivales en pista.</p>
                </Link>
                <Link href="/team-r2d2#guias" className="group p-4 bg-white/5 rounded-lg hover:bg-accent/10 transition-colors border border-white/10">
                  <h4 className="font-bold text-accent mb-1">Guías Oficiales</h4>
                  <p className="text-xs text-white/50">Reglamentos y recursos.</p>
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

      {/* Education Preview - White Surface */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-primary">
              <BookOpen className="text-primary" /> Material Educativo
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Accede a nuestros cursos especializados en robótica, desde fundamentos básicos hasta sistemas de control avanzados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-shadow border-2 border-transparent hover:border-accent">
              <div className="relative h-40">
                <Image src={courseImg?.imageUrl || ""} alt="Course" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">En Curso</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Fundamentos de Programación Arduino</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-muted-foreground">
                    <span>Progreso</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Repeat or link to full page */}
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

      {/* Partners & Sponsors Section */}
      <section id="socios" className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-3 text-primary">
              <Handshake className="text-primary" /> Nuestros Socios & Sponsors
            </h2>
            <p className="text-muted-foreground">Las organizaciones que hacen posible nuestro éxito.</p>
          </div>
          
          <div id="sponsors" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center bg-white p-6 rounded-xl shadow-sm hover:opacity-100 transition-opacity">
                <div className="text-primary font-bold flex items-center gap-2">
                  <Star className="text-accent w-4 h-4" /> PARTNER {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
