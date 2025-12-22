"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaComment, FaArrowRight } from "react-icons/fa";

const mockPosts = [
  { src: "/img/1.png", likes: "73", comments: "6", caption: "✨Nuestra carta de servicios✨" },
  { src: "/img/2.png", likes: "195", comments: "3", caption: "Mi nombre es Rocío y me dedico a transformar y embellecer miradas ✨" },
  { src: "/img/3.png", likes: "68", comments: "2", caption: "El combo ideal: laminado de cejas y pestañas 😍 para las amantes de la naturalidad ✨" },
  { src: "/img/4.png", likes: "42", comments: "5", caption: "MICROBLADING ✨" },
  { src: "/img/5.png", likes: "154", comments: "4", caption: "Un pequeño resumen de nuestro día a día en @glamandbeauty_studio 💖" },
  { src: "/img/6.png", likes: "69", comments: "1", caption: "Extensiones de pestañas + Diseño de cejas✨" },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-gradient-to-br from-accent/5 to-rose-500/5 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-br from-gold-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-accent rounded-full"></div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Instagram
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-rose-500 rounded-full"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Nuestro <span className="text-gradient-accent">trabajo</span> en acción
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Inspírate con resultados reales, detrás de escenas y el día a día de nuestro estudio de belleza
          </p>
          
          {/* Stats de Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">3K+</div>
              <div className="text-foreground-muted text-sm">Seguidores</div>
            </div>
            <div className="w-px h-8 bg-subtle"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">80+</div>
              <div className="text-foreground-muted text-sm">Publicaciones</div>
            </div>
            <div className="w-px h-8 bg-subtle"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">4.9</div>
              <div className="text-foreground-muted text-sm">Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {mockPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/glamandbeauty_studio/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.7, 
                ease: "backOut",
                scale: { delay: index * 0.1 + 0.2, duration: 0.5 }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl group"
            >
              {/* Imagen */}
              <Image
                src={post.src}
                alt={`Instagram post - ${post.caption}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Overlay de info */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {/* Stats */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1 text-white">
                    <FaHeart className="text-rose-400" />
                    <span className="text-sm font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <FaComment className="text-blue-400" />
                    <span className="text-sm font-semibold">{post.comments}</span>
                  </div>
                </div>
                
                {/* Captión */}
                <p className="text-white text-sm md:text-base font-medium line-clamp-2">
                  {post.caption}
                </p>
              </div>
              
              {/* Icono Instagram flotante */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-surface rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-lg">
                <FaInstagram className="text-rose-500 text-lg" />
              </div>
              
              {/* Efecto de borde */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-500"></div>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-rose-500/0 opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
            </motion.a>
          ))}
        </div>
        
        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="bg-accent-dark/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-subtle shadow-card max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-purple-500 flex items-center justify-center">
                <FaInstagram className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">@glamandbeauty_studio</h3>
                <p className="text-foreground-muted text-sm">Síguenos para más inspiración</p>
              </div>
            </div>
            
            <p className="text-foreground-muted text-lg mb-8 max-w-lg mx-auto">
              Únete a nuestra comunidad y descubre tips de belleza, promociones exclusivas y resultados reales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/glamandbeauty_studio/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaInstagram className="text-lg" />
                <span>Seguir en Instagram</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="https://www.instagram.com/glamandbeauty_studio/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-dark text-foreground font-semibold rounded-full hover:bg-surface-alt transition-all duration-300 border border-subtle"
              >
                <span>Ver perfil completo</span>
              </a>
            </div>
            
            {/* Hashtags */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["#BellezaNatural", "#Microblading", "#Estética", "#MaquillajeProfesional", "#CuidadoFacial"].map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-accent-light text-accent-dark text-sm rounded-full hover:bg-accent hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Indicador flotante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-foreground-muted text-sm">
            <span>Actualizado diariamente</span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span>Contenido exclusivo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}