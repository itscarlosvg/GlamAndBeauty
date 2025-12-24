import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // =================== IMÁGENES OPTIMIZADAS ===================
  images: {
    // Formatos modernos más ligeros
    formats: ['image/avif', 'image/webp'],
    
    // Tamaños responsive para diferentes dispositivos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        
    // Desactiva el warning de tamaño en desarrollo
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // =================== RENDIMIENTO & VELOCIDAD ===================
  // Pre-renderizado estático cuando sea posible
  output: 'standalone', // Mejor para Vercel
  
  // Compresión y optimización
  compress: true,
  
  // Headers HTTP para caché y seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Caché para assets estáticos
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // Seguridad
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // HSTS (solo en producción)
          ...(process.env.NODE_ENV === 'production'
            ? [
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=63072000; includeSubDomains; preload',
                },
              ]
            : []),
        ],
      },
      // Caché específico para imágenes
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // =================== COMPILADOR OPTIMIZADO ===================
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
    
    // Mejor soporte para styled-components si los usas
    styledComponents: true,
    
    // Optimizaciones de React
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },

  // =================== EXPERIMENTAL (estable) ===================
  experimental: {
    // Mejor rendimiento de imágenes
    optimizeCss: true,
    
    // Scroll restoration suave
    scrollRestoration: true,
    
    // Mejor soporte para modulos ES
    esmExternals: true,
    
    // Server Actions optimizadas
    serverActions: {
      bodySizeLimit: '2mb',
    },
    
    // Optimización de bundles
    optimizePackageImports: [
      'react-icons',
      'framer-motion',
      'gsap',
    ],
  },

  // =================== CONFIGURACIÓN DE BUILD ===================
  // Para Vercel
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
    ],
  },
};

export default nextConfig;