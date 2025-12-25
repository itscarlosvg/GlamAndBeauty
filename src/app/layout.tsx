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
        url: "/favicon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    // Para Windows/Microsoft
    apple: [
      {
        url: "/favicon-180.png",
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
        <title>Glam & Beauty Studio | Centro de Estética en Galicia</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-16.png"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/favicon-16.png" />
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
          content="https://glamandbeauty.es/img/logo.png"
        />
        <meta property="og:url" content="https://glamandbeauty.es" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
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
