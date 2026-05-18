"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  X,
  Copy,
  Check,
  Instagram,
  Youtube,
  Mail,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// ─── Modal base ───────────────────────────────────────────────────────────────
function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-primary rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-accent text-white hover:text-primary transition-colors rounded-full p-2"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}

// ─── Modal Donación ───────────────────────────────────────────────────────────
function DonateModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);

  const bankData = [
    { label: "Banco", value: "Banco Estado" },
    { label: "Tipo de cuenta", value: "Cuenta Corriente" },
    { label: "Número de cuenta", value: "123456789" },
    { label: "Nombre titular", value: "Juan Pérez González" },
    { label: "RUT titular", value: "12.345.678-9" },
    { label: "Correo", value: "r2d2.eiv.2022@gmail.com" },
  ];

  function handleCopy(value: string, label: string) {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <Modal onClose={onClose}>
      <div className="p-8">
        {/* Advertencia datos ejemplo */}
        <div className="flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-lg px-4 py-3 mb-6">
          <AlertTriangle size={16} className="text-accent shrink-0" />
          <p className="text-accent text-xs font-semibold">
            DATOS DE EJEMPLO — Serán reemplazados por los datos reales próximamente.
          </p>
        </div>

        <h2 className="text-white text-2xl font-bold mb-2">Apoya al Equipo R2D2</h2>
        <p className="text-white/60 text-sm mb-6">
          Tu aporte nos permite costear inscripciones, materiales y traslados para competir
          a nivel nacional. Cada contribución hace la diferencia para el equipo.
        </p>

        <div className="flex flex-col gap-3">
          {bankData.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3"
            >
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                  {item.label}
                </p>
                <p className="text-white font-semibold text-sm mt-0.5">{item.value}</p>
              </div>
              <button
                onClick={() => handleCopy(item.value, item.label)}
                className="text-white/40 hover:text-accent transition-colors ml-4 shrink-0"
                title="Copiar"
              >
                {copied === item.label ? (
                  <Check size={16} className="text-accent" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs text-center mt-6">
          ¿Dudas? Escríbenos a{" "}
          <a href="mailto:r2d2.eiv.2022@gmail.com" className="text-accent hover:underline">
            r2d2.eiv.2022@gmail.com
          </a>
        </p>
      </div>
    </Modal>
  );
}

// ─── Modal Redes Sociales ─────────────────────────────────────────────────────
function SocialModal({ onClose }: { onClose: () => void }) {
  const socials = [
    {
      icon: <Youtube size={24} />,
      label: "YouTube",
      handle: "R2D2 EIV",
      href: "https://www.youtube.com/channel/UCgvtBa30KmkA4NPT3zBy1Jg",
      color: "hover:border-red-500 hover:text-red-400",
    },
    {
      icon: <Instagram size={24} />,
      label: "Instagram",
      handle: "@r2d2_eiv",
      href: "https://www.instagram.com/r2d2_eiv/",
      color: "hover:border-pink-500 hover:text-pink-400",
    },
    {
      icon: <Mail size={24} />,
      label: "Correo de contacto",
      handle: "r2d2.eiv.2022@gmail.com",
      href: "mailto:r2d2.eiv.2022@gmail.com",
      color: "hover:border-accent hover:text-accent",
    },
  ];

  return (
    <Modal onClose={onClose}>
      <div className="p-8">
        <h2 className="text-white text-2xl font-bold mb-2">Sigue Nuestros Pasos</h2>
        <p className="text-white/60 text-sm mb-8">
          Mantente al día con nuestras competencias, tutoriales y novedades del equipo.
          ¡Únete a la comunidad R2D2!
        </p>

        <div className="flex flex-col gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white/70 transition-all ${s.color}`}
            >
              <div className="shrink-0">{s.icon}</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">
                  {s.label}
                </p>
                <p className="font-semibold text-sm mt-0.5">{s.handle}</p>
              </div>
              <ArrowRight size={16} className="ml-auto shrink-0 opacity-40" />
            </a>
          ))}
        </div>
      </div>
    </Modal>
  );
}

// ─── Componente exportado ─────────────────────────────────────────────────────
export function HeroSection() {
  const [modal, setModal] = useState<"donate" | "social" | null>(null);
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-robot");

  return (
    <>
      {modal === "donate" && <DonateModal onClose={() => setModal(null)} />}
      {modal === "social" && <SocialModal onClose={() => setModal(null)} />}

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent uppercase">
            ROBÓTICA R2D2 EIV
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Forjando el futuro de la robótica a través de la educación, competencia y comunidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-lg font-bold"
              onClick={() => setModal("donate")}
            >
              Apoya al Equipo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => setModal("social")}
            >
              Sigue nuestros pasos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}