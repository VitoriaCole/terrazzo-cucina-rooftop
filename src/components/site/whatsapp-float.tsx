import { WhatsAppIcon } from "./icons";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(WHATSAPP_MESSAGES.reserva)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-3 rounded-full border border-gold/40 bg-ink/90 pl-4 pr-4 text-gold shadow-2xl backdrop-blur-md transition-all duration-700 hover:border-gold hover:pr-6 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.65rem] uppercase tracking-[0.25em] text-ivory transition-all duration-700 group-hover:max-w-40">
        Reservar
      </span>
    </a>
  );
}
