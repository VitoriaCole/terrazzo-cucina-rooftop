import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Essencia } from "@/components/site/essencia";
import { Gastronomia } from "@/components/site/gastronomia";
import { Drinks } from "@/components/site/drinks";
import { Ambiente } from "@/components/site/ambiente";
import { Momentos } from "@/components/site/momentos";
import { Instagram } from "@/components/site/instagram";
import { Localizacao } from "@/components/site/localizacao";
import { Reservas } from "@/components/site/reservas";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { ADDRESS, INSTAGRAM_URL, WHATSAPP_NUMBER, whatsappLink } from "@/lib/site";

const TITLE = "Terrazzo Cucina | Restaurante Italiano Rooftop em Bauru — SP";
const DESCRIPTION =
  "Gastronomia italiana, drinks autorais e vista privilegiada de Bauru no rooftop do Hotel Tulip Inn. Reserve sua mesa pelo WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Terrazzo Cucina",
  description: DESCRIPTION,
  servesCuisine: ["Italiana"],
  acceptsReservations: whatsappLink(),
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS.street}, ${ADDRESS.district}`,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    addressCountry: ADDRESS.country,
  },
  containedInPlace: { "@type": "Hotel", name: ADDRESS.venue },
  sameAs: [INSTAGRAM_URL],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "restaurante italiano Bauru, rooftop Bauru, Terrazzo Cucina, Tulip Inn Bauru, jantar romântico Bauru, drinks Bauru" },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Bauru" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#essencia"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Essencia />
        <Gastronomia />
        <Drinks />
        <Ambiente />
        <Momentos />
        <Instagram />
        <Localizacao />
        <Reservas />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
