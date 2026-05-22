"use client";

import { useState } from "react";
import Image from "next/image";
import { History, X, ChevronLeft, ChevronRight } from "lucide-react";

const generations = [
  {
    year: 2018,
    cover: "/images/2018.jpeg",
    count: 13,
  },
  {
    year: 2023,
    cover: "/images/2023.jpeg",
    count: 5,
  },
  {
    year: 2024,
    cover: "/images/2024.jpeg",
    count: 8,
  },
  {
    year: 2025,
    cover: "/images/2025.JPG",
    count: 9,
  },
];

function ArchiveModal({
  generation,
  onClose,
}: {
  generation: (typeof generations)[0];
  onClose: () => void;
}) {
  const images = [
    generation.cover,
    ...Array.from(
      { length: generation.count },
      (_, i) =>
        `/images/archive/${generation.year}/${generation.year}-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  ];

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-primary rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-accent text-white hover:text-primary rounded-full p-2"
        >
          <X size={20} />
        </button>

        <div className="relative h-[80vh] flex items-center justify-center bg-black">
          <Image
            src={images[current]}
            alt={`${generation.year} - ${current + 1}`}
            fill
            className="object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-4 bg-black/60 hover:bg-accent text-white hover:text-primary p-3 rounded-full"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 bg-black/60 hover:bg-accent text-white hover:text-primary p-3 rounded-full"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-white text-sm">
            {current + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HistoricalArchive() {
  const [selectedGeneration, setSelectedGeneration] =
    useState<(typeof generations)[0] | null>(null);

  return (
    <>
      {selectedGeneration && (
        <ArchiveModal
          generation={selectedGeneration}
          onClose={() => setSelectedGeneration(null)}
        />
      )}

      <section id="archivo" className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
              <History className="text-primary" />
              Archivo Histórico
            </h2>

            <p className="text-muted-foreground max-w-2xl">
              Recordando a las generaciones y delegaciones anteriores que
              pavimentaron el camino.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generations.map((generation) => (
              <div
                key={generation.year}
                onClick={() => setSelectedGeneration(generation)}
                className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <Image
                  src={generation.cover}
                  alt={`Generación ${generation.year}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold">
                    Generación {generation.year}
                  </h4>
                  <p className="text-accent text-sm font-medium">
                    {generation.count + 1} imágenes
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}