"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Bot, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Noticias", href: "/noticias" },
  { name: "Videos", href: "/videos" },
  { name: "Team R2D2", href: "/team-r2d2" },
  { name: "Material Educativo", href: "/material-educativo" },
  { name: "Socios", href: "/#socios" },
  { name: "Sponsors", href: "/#sponsors" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-primary shadow-lg py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-accent p-2 rounded-full transform group-hover:rotate-12 transition-transform shadow-md">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight",
              scrolled ? "text-white" : "text-primary"
            )}>
              ROBÓTICA R2D2 EIV
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  scrolled ? "text-white/90" : "text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className={cn("md:hidden", scrolled ? "text-white" : "text-primary")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary shadow-xl border-t border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-lg font-medium py-2 px-4 hover:bg-white/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
