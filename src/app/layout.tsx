import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/footer/footer";
import StructuredData from "@/components/structured-data/Structured-data";

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
  metadataBase: new URL("https://glamandbeauty.es"),
  title: {
    default: "Glam & Beauty Studio | Microblading y Estética en Galicia",
    template: "%s | Glam & Beauty Studio",
  },
  description:
    "Centro de estética profesional en Galicia. Microblading y diseño de cejas, extensiones de pestañas, maquillaje profesional y tratamientos faciales personalizados. Reserva online.",
  keywords: [
    "microblading galicia",
    "extensiones de pestañas",
    "estética amés",
    "maquillaje profesional",
    "tratamientos faciales",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // CONFIGURACIÓN CORRECTA DE FAVICONS
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico?v=2"],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://glamandbeauty.es",
    title: "Glam & Beauty Studio | Estética Profesional en Galicia",
    description:
      "Microblading, extensiones de pestañas y maquillaje profesional en Galicia. Resultados naturales.",
    siteName: "Glam & Beauty Studio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Glam & Beauty Studio - Centro de estética en Galicia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glam & Beauty Studio | Estética en Galicia",
    description: "Microblading, extensiones de pestañas y maquillaje profesional en Galicia.",
    images: ["/og-image.jpg"], 
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
      <body className="bg-background text-foreground font-sans min-h-screen">
        {children}
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}