"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaCrown,
  FaEye,
  FaHandSparkles,
  FaStar,
  FaClock,
  FaAward,
  FaShieldAlt,
  FaBrush,
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaCircle,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Componente ImageSlider optimizado para móvil
function ImageSlider({ 
  images, 
  alt, 
  interval = 5000 
}: { 
  images: string[]; 
  alt: string; 
  interval?: number; 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length > 1 && !isMobile) {
      intervalRef.current = setInterval(nextImage, interval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [interval, images.length, isMobile]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextImage, interval);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl">
      <div className="relative h-full w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`${alt} - Ejemplo ${index + 1}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              quality={isMobile ? 80 : 90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Controles móviles */}
      {images.length > 1 && isMobile && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 z-10">
          <button
            onClick={prevImage}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-all duration-300 active:scale-95"
            aria-label="Imagen anterior"
          >
            <FaChevronLeft className="text-white text-lg" />
          </button>
          <button
            onClick={nextImage}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-all duration-300 active:scale-95"
            aria-label="Siguiente imagen"
          >
            <FaChevronRight className="text-white text-lg" />
          </button>
        </div>
      )}

      {/* Indicadores de puntos */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de imágenes */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

const services = [
  {
    title: "Microblading & Micropigmentación",
    description: "Microblading de cejas y micropigmentación de cejas, labios y ojos. Técnicas avanzadas para realzar tu mirada y sonrisa de forma natural.",
    images: ["/img/micropig.png", "/img/micropiglabio2.jpg"],
    icon: FaCrown,
    features: [
      "Microblading para cejas naturales",
      "Delineado semipermanente de ojos",
      "Pigmentación de labios (lip blush)",
      "Diseño facial personalizado",
      "Pigmentos orgánicos hipoalergénicos",
    ],
    duration: "2-3 horas",
    results: "12-24 meses",
    color: "from-accent-light to-accent/50",
    highlight: "Realce facial completo",
    mobileDescription: "Técnica de microblading y micropigmentación para realzar tu mirada y labios con resultados naturales y duraderos.",
  },
  {
    title: "Extensiones de Pestañas",
    description: "Miradas intensas y elegantes con volúmenes personalizados para cada tipo de ojo y estilo de vida.",
    image: "/img/pestanhas.png",
    icon: FaEye,
    features: [
      "Volumen ruso",
      "Efecto wet look",
      "Mantenimiento mensual",
      "Materiales hipoalergénicos",
    ],
    duration: "1.5-2 horas",
    results: "4-6 semanas",
    color: "from-accent-light to-accent/50",
    highlight: "Miradas impactantes",
    mobileDescription: "Pestañas personalizadas para una mirada intensa y elegante.",
  },
  {
    title: "Maquillaje Profesional",
    description: "Maquillaje para eventos especiales, bodas y sesiones fotográficas con acabados impecables y duraderos.",
    image: "/img/makeup.png",
    icon: FaHandSparkles,
    features: [
      "Prueba previa gratuita",
      "Productos de lujo",
      "Técnica HD",
      "Duración 12+ horas",
    ],
    duration: "1-2 horas",
    results: "Día completo",
    color: "from-accent-light to-accent/50",
    highlight: "Estilo en eventos",
    mobileDescription: "Maquillaje profesional para eventos, bodas y sesiones fotográficas.",
  },
  {
    title: "Diseño & Depilación de Cejas",
    description: "Laminado y depilación profesional de cejas para realzar tu mirada con precisión y simetría perfecta.",
    image: "/img/lamceja.png",
    icon: FaEye,
    features: [
      "Diseño personalizado según tu rostro",
      "Depilación con hilo o cera profesional",
      "Asesoramiento de forma y grosor",
      "Simetría perfecta garantizada",
    ],
    duration: "30-45 min",
    results: "3-4 semanas",
    color: "from-accent-light to-accent/50",
    highlight: "Cejas perfectas",
    mobileDescription: "Diseño y depilación profesional para cejas perfectamente definidas.",
  },
  {
    title: "Diseño de Cejas con Henna",
    description: "Tinte semi-permanente natural que define, rellena y oscurece las cejas para un look definido y duradero.",
    image: "/img/cejashenna.png",
    icon: FaBrush,
    features: [
      "Henna 100% natural y orgánica",
      "Duración de 2-4 semanas",
      "Ideal para cejas claras o poco pobladas",
      "Resultados naturales y definidos",
    ],
    duration: "45-60 min",
    results: "2-4 semanas",
    color: "from-accent-light to-accent/50",
    highlight: "Henna profesional",
    mobileDescription: "Tinte natural de henna para cejas definidas y con volumen.",
  },
];

export default function Services() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Configurar animaciones GSAP solo en desktop
    if (!isMobile) {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            },
          }
        );
      }

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const image = section.querySelector(".service-image");
        const content = section.querySelector(".service-content");
        const isReversed = index % 2 !== 0;

        if (image) {
          gsap.fromTo(
            image,
            {
              x: isReversed ? -80 : 80,
              opacity: 0,
              rotateY: isReversed ? -5 : 5,
            },
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "top 30%",
                scrub: 1.5,
              },
            }
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            {
              x: isReversed ? 80 : -80,
              opacity: 0,
              scale: 0.95,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "top 30%",
                scrub: 1.5,
              },
            }
          );
        }
      });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section className="py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-4 md:mb-6">
          <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-accent to-rose-500 rounded-full"></div>
          <span className="text-accent font-semibold tracking-wider uppercase text-xs md:text-sm">
            Servicios Premium
          </span>
          <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-rose-500 to-accent rounded-full"></div>
        </div>

        <h2
          ref={titleRef}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6 px-2"
        >
          Belleza <span className="text-accent">excepcional</span>
          <br className="hidden md:block" />
          <span className="text-foreground-muted text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-2">
            en cada detalle
          </span>
        </h2>

        <p className="text-foreground-muted text-base md:text-lg max-w-2xl mx-auto px-4">
          Descubre nuestros tratamientos exclusivos diseñados para realzar tu belleza natural con resultados visibles.
        </p>
      </div>

      <div className="space-y-20 md:space-y-0">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          const Icon = service.icon;
          const isMicroblading = service.title === "Microblading & Micropigmentación";
          const price = index === 0 ? "250" : index === 1 ? "60" : index === 2 ? "50" : index === 3 ? "15" : "30";

          return (
            <div
              key={service.title}
              ref={(el) => {
                if (el) sectionsRef.current[index] = el;
              }}
              className={`relative ${
                index < services.length - 1 ? "mb-20 md:mb-32" : ""
              }`}
            >
              {/* Línea decorativa - solo desktop */}
              {index < services.length - 1 && !isMobile && (
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent/10 to-transparent z-0"></div>
              )}

              <div className="relative z-10">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Imagen - en móvil va arriba */}
                  <div
                    className={`service-image relative h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl ${
                      isReversed ? "md:order-1" : "md:order-2"
                    }`}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                  >
                    {isMicroblading ? (
                      <ImageSlider
                        images={(service as any).images || []}
                        alt={service.title}
                        interval={isMobile ? 6000 : 4000}
                      />
                    ) : (
                      <>
                        <Image
                          src={service.image!}
                          alt={service.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          priority={index === 0}
                          quality={isMobile ? 80 : 90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent"></div>
                      </>
                    )}

                    {/* Etiqueta de precio - posición móvil */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <div className="bg-gradient-to-r from-accent/40 via-accent/25 to-rose-500/25 backdrop-blur-md md:backdrop-blur-lg rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg border border-accent/30">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs md:text-sm text-white/90">
                              Desde
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-white">
                              €{price}
                            </p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-300 text-sm md:text-base" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenido - en móvil va abajo */}
                  <div
                    className={`service-content flex flex-col justify-center space-y-4 md:space-y-6 ${
                      isReversed ? "md:order-2 md:pl-8 lg:pl-12" : "md:order-1 md:pr-8 lg:pr-12"
                    }`}
                  >
                    <div className="inline-flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} border border-accent-light/50`}
                      >
                        <Icon className="text-foreground text-lg md:text-xl" />
                      </div>
                      <span className="text-accent font-semibold tracking-wider uppercase text-xs md:text-sm">
                        {service.highlight}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-base md:text-lg text-foreground-muted leading-relaxed hidden md:block">
                      {service.description}
                    </p>
                    <p className="text-base md:text-lg text-foreground-muted leading-relaxed md:hidden">
                      {service.mobileDescription}
                    </p>

                    <div className="space-y-2 md:space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <span className="text-foreground-muted text-sm md:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 md:gap-6 pt-3 md:pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                          <FaClock className="text-accent text-xs md:text-sm" />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm text-foreground-muted">
                            Duración
                          </p>
                          <p className="font-semibold text-foreground text-sm md:text-base">
                            {service.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                          <FaStar className="text-accent text-xs md:text-sm" />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm text-foreground-muted">
                            Resultados
                          </p>
                          <p className="font-semibold text-foreground text-sm md:text-base">
                            {service.results}
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://booksy.com/es-es/111439_glam-beauty_otro_61599_tarrio#ba_s=seo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between gap-3 px-5 py-3 md:px-6 md:py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 max-w-sm mt-4 md:mt-6 hover:shadow-hover active:scale-95 md:hover:-translate-y-0.5 text-sm md:text-base"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <FaCalendarAlt className="text-base md:text-lg" />
                        <span>Reservar ahora</span>
                      </div>
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 hidden md:block" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}