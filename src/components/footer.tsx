import Link from "next/link";
import { Bot, Mail, Instagram, Youtube } from "lucide-react";

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
              <li>
                <Link href="/#socios-sponsors" className="hover:text-accent">
                  Quiénes nos apoyan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:r2d2.eiv.2022@gmail.com" className="hover:text-accent">
                  r2d2.eiv.2022@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-accent">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/r2d2_eiv/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* TikTok — SVG directo porque lucide no lo incluye */}
              <a
                href="https://www.tiktok.com/@r2d2.eiv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors"
                title="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/channel/UCgvtBa30KmkA4NPT3zBy1Jg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-colors"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
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