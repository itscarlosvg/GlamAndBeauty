import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/footer/footer";

// Configuración de fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glam & Beauty",
  description: "Centro de estética profesional",
  icons: {
    icon: [
      // Favicon básico
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      // Para dispositivos Apple
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      // Para Android
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    // Para Windows/Microsoft
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <head>
        {/* METADATOS BÁSICOS - Google los lee primero */}
        <title>Glam & Beauty Studio | Microblading y Estética en Galicia</title>
        <meta
          name="description"
          content="Centro de estética profesional en Galicia. Microblading de cejas, extensiones de pestañas, maquillaje profesional y tratamientos faciales personalizados. Reserva online."
        />

        {/* PARA GOOGLE - Evita que indexe páginas de prueba */}
        <meta name="robots" content="index, follow" />

        {/* PARA REDES SOCIALES - Cuando compartan tu enlace */}
        <meta
          property="og:title"
          content="Glam & Beauty Studio | Estética Profesional"
        />
        <meta
          property="og:description"
          content="Microblading, extensiones de pestañas y maquillaje profesional en Galicia. Resultados naturales."
        />
        <meta
          property="og:image"
          content="https://glamandbeauty.es/img/logo.jpg"
        />
        <meta property="og:url" content="https://glamandbeauty.es" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />

        {/* LOCAL BUSINESS - Google My Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Glam & Beauty Studio",
            image: "https://glamandbeauty.es/img/logo.jpg",
            description:
              "Centro de estética especializado en microblading, extensiones de pestañas y maquillaje profesional en Galicia.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Avenida Rosalía de Castro 41",
              addressLocality: "Amés",
              addressRegion: "Galicia",
              postalCode: "15864",
              addressCountry: "ES",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 42.904201,
              longitude: -8.65613,
            },
            url: "https://glamandbeauty.es",
            telephone: "+34644457426",
            openingHours: "Mo-Fr 09:00-20:00, Sa 10:00-18:00",
            priceRange: "€€",
            serviceType: [
              "Microblading",
              "Extensiones de pestañas",
              "Maquillaje profesional",
              "Tratamientos faciales",
            ],
          })}
        </script>
      </head>

      <body className="bg-background text-foreground font-sans min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}

/*
 * By:
 *   ░█████╗░░█████╗░██████╗░██╗░░░░░░█████╗░░██████╗░░░░░░░░░█████╗░░█████╗░██████╗░███████╗░░░
 *   ██╔══██╗██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔════╝░░░░░░░░██╔══██╗██╔══██╗██╔══██╗██╔════╝░░░
 *   ██║░░╚═╝███████║██████╔╝██║░░░░░██║░░██║╚█████╗░░░░░░░░░██║░░╚═╝██║░░██║██║░░██║█████╗░░░░░
 *   ██║░░██╗██╔══██║██╔══██╗██║░░░░░██║░░██║░╚═══██╗░░░░░░░░██║░░██╗██║░░██║██║░░██║██╔══╝░░░░░
 *   ╚█████╔╝██║░░██║██║░░██║███████╗╚█████╔╝██████╔╝░░░░░░░░╚█████╔╝╚█████╔╝██████╔╝███████╗██╗
 *   ░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝░╚════╝░╚═════╝░░░░░░░░░░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═╝
 *
 * ⚡ Powered by: React
 * License: MIT - Compartir es vivir!
 */
