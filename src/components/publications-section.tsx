"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, FileText, X, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Publication {
  id: number;
  type: "pdf" | "image";
  title: string;
  preview: string;
  file: string;
}

const publications: Publication[] = [
  {
    id: 1,
    type: "pdf",
    title: "Historia del Taller Robótica R2D2",
    preview: "/docs/previews/HISTORIA DEL TALLER ROBOTICA R2D2 ESPAÑOL.jpg",
    file: "/docs/HISTORIA DEL TALLER ROBOTICA R2D2 ESPAÑOL.pdf",
  },

  {
    id: 2,
    type: "pdf",
    title: "Cronología R2D2",
    preview: "/docs/previews/Cronologia r2d2.jpg",
    file: "/docs/Cronologia r2d2.pdf",
  },

  {
    id: 3,
    type: "pdf",
    title: "R2D2: La Leyenda de Triunfo",
    preview: "/docs/previews/R2D2_La_Leyenda_De_Triunfo.jpg",
    file: "/docs/R2D2_La_Leyenda_De_Triunfo.pdf",
  },

  {
    id: 4,
    type: "image",
    title: "Artículo Diario La Estrella",
    preview: "/docs/previews/Articulo_Estrella.jpg",
    file: "/docs/previews/Articulo_Estrella.jpg",
  },
];

function PublicationModal({
  publication,
  onClose,
}: {
  publication: Publication;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ height: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
          <h2 className="text-white text-lg font-bold">
            {publication.title}
          </h2>

          <div className="flex items-center gap-2">
            <a
              href={publication.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors"
              title="Abrir en pestaña nueva"
            >
              <ExternalLink size={18} />
            </a>

            <button
              onClick={onClose}
              className="bg-black/50 hover:bg-accent text-white hover:text-primary transition-colors rounded-full p-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex-1 bg-white overflow-auto">
          {publication.type === "pdf" ? (
            <iframe
              src={publication.file}
              className="w-full h-full"
              title={publication.title}
            />
          ) : (
            <div className="p-4 flex justify-center">
              <Image
                src={publication.file}
                alt={publication.title}
                width={1200}
                height={1800}
                className="w-auto h-auto max-w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PublicationsSection() {
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  return (
    <>
      {selectedPublication && (
        <PublicationModal
          publication={selectedPublication}
          onClose={() => setSelectedPublication(null)}
        />
      )}

      <section id="guias" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">
              Artículos y Publicaciones
            </h2>
            <p className="text-muted-foreground">
              Crónicas, reconocimientos y documentos que forman parte de la
              historia del Equipo R2D2.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {publications.map((publication) => (
              <Card
                key={publication.id}
                className="overflow-hidden group border-2 border-transparent hover:border-accent transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPublication(publication)}
              >
                <div className="relative h-64 bg-muted">
                  <Image
                    src={publication.preview}
                    alt={publication.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/50 transition-colors flex items-center justify-center">
                    <div className="bg-accent/90 text-primary p-4 rounded-full scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg opacity-0 group-hover:opacity-100">
                      <FileText size={24} />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                    {publication.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen size={16} />
                    Ver documento
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}