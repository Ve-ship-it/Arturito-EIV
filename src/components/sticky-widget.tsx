"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyWidget() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.from_name.trim()) {
      alert("Debes ingresar tu nombre.");
      return;
    }

    if (!form.from_email.trim()) {
      alert("Debes ingresar tu correo.");
      return;
    }

    if (!form.message.trim()) {
      alert("Debes ingresar tu consulta.");
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "service_cewhfqr",
        "template_jz4awrc",
        {
          from_name: form.from_name,
          from_email: form.from_email,
          phone: form.phone,
          message: form.message,
        },
        "Km9FZrTdBLrr_peWv"
      );

      alert("Consulta enviada correctamente.");

      setForm({
        from_name: "",
        from_email: "",
        phone: "",
        message: "",
      });

      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar la consulta.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-28 right-8 z-[70] w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between bg-primary text-white px-4 py-3">
            <div>
              <h3 className="font-bold">Contáctanos</h3>
              <p className="text-xs opacity-80">
                Equipo de Robótica R2D2 EIV
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:opacity-70"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <input
              type="text"
              name="from_name"
              placeholder="Nombre *"
              value={form.from_name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Correo electrónico *"
              value={form.from_email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />

            <input
              type="text"
              name="phone"
              placeholder="Teléfono (opcional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />

            <textarea
              name="message"
              placeholder="Escribe tu consulta..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full border rounded-lg px-3 py-2 text-sm resize-none"
            />

            <Button
              onClick={handleSubmit}
              disabled={sending}
              className="w-full bg-accent text-primary hover:bg-accent/90"
            >
              {sending ? "Enviando..." : "Enviar consulta"}
            </Button>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-center">
        <button
          onClick={() => setOpen(!open)}
          className="bg-accent text-primary p-4 rounded-full shadow-2xl animate-micro-bounce hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-accent/50"
          title="Contáctanos"
        >
          <MessageSquare className="w-6 h-6 font-bold" />
        </button>
      </div>
    </>
  );
}