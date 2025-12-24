"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaCalendarAlt,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaClock,
  FaFacebook,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Solo aplicar animaciones GSAP en desktop
    if (!isMobile && imageRef.current) {
      // Animación parallax
      gsap.to(imageRef.current, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animación de elementos flotantes
      gsap.to(".floating-element-1", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-element-2", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <section className="relative min-h-screen h-auto md:h-screen overflow-hidden flex items-center justify-start">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-pink-50/10 to-white/5 z-0" />

      {/* Patrón decorativo - solo desktop */}
      <div className="hidden md:block absolute inset-0 opacity-[0.02] z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Imagen principal responsive */}
      <div ref={imageRef} className="absolute inset-0 opacity-80 md:opacity-80">
        <picture>
          {/* Imagen para móvil (ancho < 768px) */}
          <source
            srcSet="/img/hero-mobilev1.png"
            media="(max-width: 767px)"
            width={768}
            height={1024}
          />
          {/* Imagen para desktop (ancho >= 768px) */}
          <source
            srcSet="/img/hero-desktop.jpeg"
            media="(min-width: 768px)"
            width={1920}
            height={1080}
          />
          {/* Imagen por defecto (fallback) */}
          <Image
            src="/img/hero-desktop.jpeg" // Misma que desktop como fallback
            alt="Centro de estética profesional Glam & Beauty"
            fill
            priority
            className="object-cover object-center md:object-right"
            sizes="100vw"
            quality={90}
          />
        </picture>
        {/* Overlay mejorado - más fuerte del lado izquierdo en desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 md:bg-gradient-to-r md:from-black/90 md:via-black/70 md:to-black/30" />
      </div>

      {/* Elementos decorativos flotantes - solo desktop */}
      <div className="floating-element-1 absolute top-1/4 right-10 w-6 h-6 rounded-full bg-accent/30 blur-sm hidden md:block" />
      <div className="floating-element-2 absolute bottom-1/3 left-12 w-8 h-8 rounded-full bg-purple-400/20 blur-sm hidden md:block" />

      {/* Contenido principal - Ahora claramente al lado izquierdo */}
      <div
        ref={contentRef}
        className="relative z-20 w-full md:w-auto px-4 py-8 md:py-0 md:pl-12 lg:pl-16 xl:pl-24"
      >
        <div className="md:max-w-xl lg:max-w-2xl">
          {/* Contenedor alineado completamente a la izquierda */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Columna de texto */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className="text-white w-full"
            >
              {/* Título principal */}
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="mb-6 md:mb-8"
              >
                <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  <span className="block">Glam & Beauty</span>
                </h1>
                <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-accent mt-4 md:mt-6 mx-auto md:mx-0" />
              </motion.div>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-10 leading-relaxed"
              >
                Descubre la excelencia en microblading, extensiones de pestañas
                y tratamientos faciales personalizados.
              </motion.p>

              {/* Servicios destacados */}
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 justify-center md:justify-start"
              >
                {["Microblading", "Extensiones", "Faciales", "Maquillaje"].map(
                  (service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-base border border-white/20 hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
                    >
                      {service}
                    </span>
                  )
                )}
              </motion.div>

              {/* Botones de acción - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden md:flex flex-col lg:flex-row gap-4 mb-8"
              >
                {/* Botón de reserva */}
                <a
                  href="https://booksy.com/es-es/111439_glam-beauty_otro_61599_tarrio#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  <FaCalendarAlt className="text-xl" />
                  <span>Reservar cita</span>
                </a>

                {/* Botón de WhatsApp */}
                <a
                  href="https://wa.me/34644457426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg"
                >
                  <FaWhatsapp className="text-green-400 text-xl" />
                  <span>Consultar WhatsApp</span>
                </a>
              </motion.div>

              {/* Redes sociales - Desktop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="hidden md:block mt-8"
              >
                <span className="text-white/70 text-base mb-3 block">
                  Síguenos en redes
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/glamandbeauty_studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/p/Salón-de-belleza-GlamBeauty-100062981451492/?locale=es_ES"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-white text-xl" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Barra de iconos flotante - Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center gap-4 bg-black/80 backdrop-blur-lg rounded-full px-5 py-3 border border-white/20 shadow-2xl">
          {/* Icono de WhatsApp */}
          <a
            href="https://wa.me/34644457426"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-all duration-300 active:scale-95 shadow-lg"
            aria-label="Consultar por WhatsApp"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>

          {/* Icono de reserva */}
          <a
            href="https://booksy.com/es-es/111439_glam-beauty_otro_61599_tarrio#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-all duration-300 active:scale-95 shadow-lg"
            aria-label="Reservar cita"
          >
            <FaCalendarAlt className="text-white text-xl" />
          </a>

          {/* Icono de Instagram */}
          <a
            href="https://www.instagram.com/glamandbeauty_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center hover:opacity-90 transition-all duration-300 active:scale-95 shadow-lg"
            aria-label="Instagram"
          >
            <FaInstagram className="text-white text-xl" />
          </a>
        </div>
      </div>

      {/* Información de contacto - versión móvil simplificada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="md:hidden absolute top-4 left-0 right-0 px-4"
      >
        <div className="flex justify-between items-center">
          {/* Teléfono */}
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 border border-white/20">
            <a
              href="tel:+34644457426"
              className="flex items-center gap-2 text-white text-sm font-medium px-2"
            >
              <FaPhoneAlt className="text-accent" />
              <span className="hidden sm:inline">Llamar</span>
            </a>
          </div>

          {/* Horario */}
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 border border-white/20">
            <div className="flex items-center gap-2 text-white text-sm px-2">
              <FaClock className="text-accent text-xs" />
              <span>9:00 - 20:00</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Información de contacto - versión desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:block absolute top-8 right-8"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-xs">
          <div className="text-center">
            <div className="text-2xl font-serif text-accent mb-2">Abierto</div>
            <div className="text-white text-sm mb-1">
              Lun - Vie: 9:00 - 20:00
            </div>
            <div className="text-white text-sm mb-4">Sáb: 10:00 - 18:00</div>
            <a
              href="tel:+34644457426"
              className="text-white hover:text-accent transition-colors text-lg font-semibold inline-flex items-center gap-2"
            >
              <FaPhoneAlt className="text-accent" />
              +34 644 45 74 26
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - solo desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm tracking-widest">
            DESCUBRE MÁS
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
