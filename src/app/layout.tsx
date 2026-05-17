import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyWidget } from '@/components/sticky-widget';

export const metadata: Metadata = {
  title: 'Equipo de Robótica R2D2 EIV - Robotics Excellence',
  description: 'La plataforma oficial del Equipo de Robótica R2D2 EIV, noticias, videos y material educativo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyWidget />
      </body>
    </html>
  );
}
