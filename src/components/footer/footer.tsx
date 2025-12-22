// components/FooterMinimal.tsx
"use client";

import { FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

export default function FooterMinimal() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo y derechos */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Glam & Beauty
            </h3>
            <p className="text-foreground-muted text-sm">
              © {currentYear} - Centro de estética profesional
            </p>
          </div>

          {/* Contacto rápido */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+34123456789"
              className="flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors"
            >
              <FaPhone />
              <span className="text-sm">+34 644 45 74 26</span>
            </a>
            <a
              href="https://www.instagram.com/glamandbeauty_studio/"
              target="_blank"
              className="flex items-center gap-2 text-foreground-muted hover:text-rose-500 transition-colors"
            >
              <FaInstagram />
              <span className="text-sm">glamandbeauty_studio</span>
            </a>
            <a
              href="https://booksy.com/es-es/111439_glam-beauty_otro_61599_tarrio#ba_s=seo"
              target="_blank"
              className="px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition-colors text-sm"
            >
              Reservar cita
            </a>
          </div>
        </div>

        {/* Línea y enlaces legales */}
        <div className="mt-8 mb-15 pt-8 border-t border-subtle text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground-muted">
            <span>Avenida Rosalia de Castro 41, Amés, Galicia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
