"use client";

import { reviews } from "@/data/reviews";
import {
  FaStar,
  FaQuoteLeft,
  FaGoogle,
  FaUsers,
  FaCommentAlt,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function TestimonialsCarousel() {
  return (
    <section className="py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decoración de fondo */}
        <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-accent/10 to-rose-500/10 rounded-full blur-xl md:blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-rose-500/10 to-accent/10 rounded-full blur-xl md:blur-3xl"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-24">
            <div className="inline-flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-6 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-rose-500 to-accent rounded-full"></div>
              <span className="text-accent font-semibold tracking-wider uppercase text-xs md:text-sm">
                Testimonios
              </span>
              <div className="w-6 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-accent to-rose-500 rounded-full"></div>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 md:mb-6">
              Opiniones <span className="text-gradient-accent">reales</span>
            </h2>
            <p className="text-foreground-muted text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-10 px-4">
              Lo que dicen nuestros clientes sobre su experiencia
            </p>

            {/* Rating promedio */}
            <div className="inline-flex items-center gap-3 md:gap-4 bg-rose-900/80 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-subtle shadow-card max-w-sm mx-auto">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold-500 text-sm md:text-lg" />
                  ))}
                </div>
                <span className="text-xl md:text-2xl font-bold text-foreground">4.9</span>
                <span className="text-foreground-muted">/5</span>
              </div>
              <div className="w-px h-4 md:h-6 bg-subtle"></div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <FaGoogle className="text-neutral-500 text-sm md:text-base" />
                <span className="text-foreground-muted text-xs md:text-sm">Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Carrusel principal - MOBILE: 1 testimonio, DESKTOP: 3 */}
          <div className="px-2 sm:px-0">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                renderBullet: function (index, className) {
                  return `<span class="${className} !w-2 !h-2 md:!w-2.5 md:!h-2.5 !bg-accent-dark/50 hover:!bg-accent-dark !transition-all duration-300 !mx-0.5 md:!mx-1"></span>`;
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              breakpoints={{
                // Móvil: 1 slide
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // Tablet pequeña: 1 slide
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                // Tablet grande: 2 slides
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                // Desktop: 3 slides
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                  centeredSlides: false,
                },
                // Desktop grande: 3 slides
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                  centeredSlides: false,
                },
              }}
              grabCursor={true}
              effect="slide"
              speed={600}
              centeredSlides={true}
              className="!pb-12 md:!pb-14"
            >
              {reviews.map((r, i) => (
                <SwiperSlide key={i}>
                  <div className="h-full">
                    <div className="group relative h-full flex flex-col bg-accent-dark rounded-xl md:rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 border border-subtle hover:border-accent/30 overflow-hidden mx-2 md:mx-0">
                      {/* Cinta decorativa superior */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-accent via-rose-500 to-accent"></div>

                      {/* Contenido - MEJOR ALTURA PARA MÓVIL */}
                      <div className="p-5 md:p-6 lg:p-8 flex-1 flex flex-col">
                        {/* Icono de comillas */}
                        <div className="mb-3 md:mb-4">
                          <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
                            <FaQuoteLeft className="text-accent text-lg" />
                          </div>
                        </div>

                        {/* Estrellas */}
                        <div className="flex items-center mb-3 md:mb-4">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <FaStar
                                key={idx}
                                className={`mr-1 text-sm md:text-base ${
                                  idx < r.rating
                                    ? "text-gold-500"
                                    : "text-neutral-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm font-semibold text-foreground-muted">
                            {r.rating}.0
                          </span>
                        </div>

                        {/* Texto del testimonio - MEJOR VISUALIZACIÓN */}
                        <div className="flex-1 mb-5 md:mb-6 min-h-[120px]">
                          <p className="text-foreground-muted text-base md:text-lg leading-relaxed line-clamp-5 md:line-clamp-5">
                            {r.text}
                          </p>
                        </div>

                        {/* Información del cliente */}
                        <div className="pt-4 md:pt-6 border-t border-subtle">
                          <div className="flex items-center">
                            {/* Avatar del cliente */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent-light to-accent/30 flex items-center justify-center mr-3">
                              <span className="text-accent-dark font-bold text-sm">
                                {r.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-foreground text-sm md:text-base truncate">
                                {r.name}
                              </p>
                              {r.date && (
                                <p className="text-foreground-muted text-xs mt-0.5">
                                  {r.date}
                                </p>
                              )}
                            </div>
                            {/* Logo de Google */}
                            <div className="flex-shrink-0">
                              <div className="w-7 h-7 bg-gradient-to-br from-surface-alt to-surface rounded-full flex items-center justify-center shadow-sm border border-subtle">
                                <FaGoogle className="text-neutral-500 text-xs" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navegación personalizada */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
            <button 
              className="swiper-button-prev-custom w-12 h-12 rounded-full bg-accent-dark shadow-card hover:shadow-hover hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center border border-subtle hover:border-accent/50 group active:scale-95"
              aria-label="Testimonio anterior"
            >
              <FaChevronLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            <div className="swiper-pagination !relative !w-auto"></div>

            <button 
              className="swiper-button-next-custom w-12 h-12 rounded-full bg-accent-dark shadow-card hover:shadow-hover hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center border border-subtle hover:border-accent/50 group active:scale-95"
              aria-label="Siguiente testimonio"
            >
              <FaChevronRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats debajo del carrusel - MEJOR DISTRIBUCIÓN */}
      <div className="max-w-5xl mx-auto mt-12 md:mt-20 lg:mt-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              value: "250+",
              label: "Clientes Satisfechos",
              icon: <FaUsers className="text-accent text-xl md:text-2xl" />,
              color: "from-accent/20 to-accent/10",
            },
            {
              value: "4.9/5",
              label: "Rating Promedio",
              icon: <FaStar className="text-gold-500 text-xl md:text-2xl" />,
              color: "from-gold-500/20 to-gold-500/10",
            },
            {
              value: "120+",
              label: "Reseñas Google",
              icon: <FaCommentAlt className="text-rose-500 text-xl md:text-2xl" />,
              color: "from-rose-500/20 to-rose-500/10",
            },
            {
              value: "99%",
              label: "Recomiendan",
              icon: <FaHeart className="text-accent text-xl md:text-2xl" />,
              color: "from-accent/20 to-rose-500/10",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 md:p-6 backdrop-blur-sm rounded-xl shadow-card hover:shadow-hover transition-all duration-300 border border-subtle hover:border-accent/30 group active:scale-95 md:hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-foreground-muted text-xs md:text-sm leading-tight px-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}