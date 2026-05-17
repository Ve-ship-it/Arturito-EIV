import Link from "next/link";
import { Bot, Mail, Instagram, Twitter, Youtube, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Bot className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold uppercase">ROBÓTICA R2D2 EIV</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Impulsando la innovación tecnológica y la educación en robótica para las nuevas generaciones.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Navegación</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/noticias" className="hover:text-accent">Noticias</Link></li>
              <li><Link href="/team-r2d2" className="hover:text-accent">Sobre R2D2</Link></li>
              <li><Link href="/material-educativo" className="hover:text-accent">Material Educativo</Link></li>
              <li><Link href="/#socios" className="hover:text-accent">Nuestros Socios</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contacto@r2d2team.com</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> www.r2d2team.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Síguenos</h3>
            <div className="flex gap-4">
              <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Equipo de Robótica R2D2 EIV. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
