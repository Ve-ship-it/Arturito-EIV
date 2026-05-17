
"use client";

import { MessageSquare } from "lucide-react";

export function StickyWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-center">
      <button 
        className="bg-accent text-primary p-4 rounded-full shadow-2xl animate-micro-bounce hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-accent/50"
        title="Contáctanos"
      >
        <MessageSquare className="w-6 h-6 font-bold" />
      </button>
    </div>
  );
}
