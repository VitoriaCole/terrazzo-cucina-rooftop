import { Logo } from "./logo";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_DIRECTIONS_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/site";

const linkCls = "transition-colors duration-500 hover:text-gold";

export function Footer() {
  return (
    <footer className="bg-olive-deep text-ivory">
      <div className="container-lux py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-8 max-w-xs font-display text-xl font-light italic text-sand/80">
              A arte de viver bons momentos.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold">Endereço</h3>
            <address className="mt-6 text-sm not-italic leading-relaxed text-ivory/70">
              {ADDRESS.venue}
              <br />
              {ADDRESS.street}
              <br />
              {ADDRESS.district}
              <br />
              {ADDRESS.city} — {ADDRESS.state}
            </address>
            <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className={`mt-4 inline-block text-sm text-sand ${linkCls}`}>
              Ver localização →
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold">Contato</h3>
            <ul className="mt-6 space-y-3 text-sm text-ivory/70">
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Instagram {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={whatsappLink(WHATSAPP_MESSAGES.reserva)} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Reservas
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold">Horários</h3>
            {/* Official opening hours pending confirmation with the restaurant. */}
            <p className="mt-6 text-sm leading-relaxed text-ivory/70">
              Horários de funcionamento em confirmação.
            </p>
            <a href={whatsappLink(WHATSAPP_MESSAGES.horarios)} target="_blank" rel="noopener noreferrer" className={`mt-4 inline-block text-sm text-sand ${linkCls}`}>
              Consulte pelo WhatsApp →
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs tracking-[0.1em] text-ivory/45 md:flex-row md:items-center">
          <p>Terrazzo Cucina — A arte de viver bons momentos.</p>
          <p>© {new Date().getFullYear()} Terrazzo Cucina · Bauru — SP</p>
        </div>
      </div>
    </footer>
  );
}
