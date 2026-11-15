import bar from "@/assets/ambiente-bar.jpg";
import { Reveal } from "./reveal";
import { Cta } from "./cta";
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";

export function Reservas() {
  return (
    <section id="reservas" className="relative overflow-hidden bg-ink text-ivory">
      <img
        src={bar}
        alt=""
        aria-hidden
        width={1024}
        height={1280}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0" style={{ background: "var(--overlay-deep)" }} />
      <div className="container-lux relative section-pad">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Reservas</p>
            <h2 className="display-lg mt-8">
              Sua próxima experiência começa <em className="text-gold">com uma reserva.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="lede mt-10 max-w-xl text-ivory/75">
              Escolha seu momento, reúna pessoas especiais e venha descobrir o Terrazzo Cucina.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <Cta href={whatsappLink(WHATSAPP_MESSAGES.reserva)}>Reserve sua mesa pelo WhatsApp</Cta>
            <span className="text-sm tracking-[0.15em] text-ivory/60">{WHATSAPP_DISPLAY}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
