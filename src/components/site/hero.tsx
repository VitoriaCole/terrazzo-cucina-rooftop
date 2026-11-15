import hero from "@/assets/hero-rooftop.jpg";
import { Cta } from "./cta";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory"
    >
      <img
        src={hero}
        alt="Rooftop do Terrazzo Cucina ao pôr do sol, com mesas à luz de velas e vista para Bauru"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
      />
      <div aria-hidden className="absolute inset-0" style={{ background: "var(--overlay-hero)" }} />

      <div className="container-lux relative pb-28 pt-40 md:pb-36">
        <p className="eyebrow mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Rooftop · Gastronomia Italiana · Bauru
        </p>
        <h1 className="display-xl max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-150">
          Uma experiência italiana <em className="font-light text-gold">acima</em> de tudo.
        </h1>
        <p className="lede mt-8 max-w-xl text-ivory/80 animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-300">
          Sabores autênticos, momentos especiais e uma vista que transforma cada encontro em uma
          experiência inesquecível.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-500">
          <Cta href={whatsappLink(WHATSAPP_MESSAGES.reserva)}>Reserve sua mesa</Cta>
          <Cta href="#essencia" variant="outlineLight">
            Explore nosso universo
          </Cta>
        </div>
      </div>

      <a
        href="#essencia"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 right-[clamp(1.25rem,5vw,4rem)] hidden flex-col items-center gap-4 text-ivory/60 transition-colors hover:text-gold md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em] [writing-mode:vertical-rl]">
          Role
        </span>
        <span className="relative block h-16 w-px overflow-hidden bg-ivory/20">
          <span className="absolute inset-0 animate-scroll-line bg-gold" />
        </span>
      </a>
    </section>
  );
}
