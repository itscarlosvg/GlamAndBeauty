export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Glam & Beauty Studio",
    image: "https://glamandbeauty.es/img/favicon-16.png",
    description:
      "Centro de estética especializado en microblading, extensiones de pestañas, maquillaje profesional y diseño de cejas en Galicia.",
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
    openingHours: ["Mo-Fr 09:00-20:00"],
    priceRange: "€€",
    serviceType: [
      "Microblading",
      "Extensiones de pestañas",
      "Maquillaje profesional",
      "Diseño de cejas",
      "Tratamientos faciales",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}