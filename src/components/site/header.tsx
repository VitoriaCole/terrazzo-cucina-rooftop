import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Cta } from "./cta";
import { cn } from "@/lib/utils";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";

const NAV = [
  { href: "#essencia", label: "Essência" },
  { href: "#gastronomia", label: "Gastronomia" },
  { href: "#drinks", label: "Drinks" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#momentos", label: "Momentos" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-ivory transition-all duration-700 ease-[var(--ease-lux)]",
        scrolled ? "bg-ink/92 py-3 backdrop-blur-md" : "bg-transparent py-6",
      )}
    >
      <div className="container-lux flex items-center justify-between gap-8">
        <a href="#inicio" aria-label="Terrazzo Cucina — início">
          <Logo compact />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.68rem] font-normal uppercase tracking-[0.26em] text-ivory/80 transition-colors duration-500 hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Cta
            href={whatsappLink(WHATSAPP_MESSAGES.reserva)}
            variant="outlineLight"
            size="md"
            className="hidden sm:inline-flex"
          >
            Reservar
          </Cta>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={cn(
                "h-px w-6 bg-ivory transition-transform duration-500",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-ivory transition-transform duration-500",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col justify-center bg-ink px-8 transition-all duration-700 ease-[var(--ease-lux)] lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="space-y-5">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 font-display text-4xl font-light text-ivory transition-colors hover:text-gold"
              >
                <span className="font-sans text-xs tracking-[0.3em] text-gold">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Cta
          href={whatsappLink(WHATSAPP_MESSAGES.reserva)}
          className="mt-12 self-start"
          onClick={() => setOpen(false)}
        >
          Reserve sua mesa
        </Cta>
      </div>
    </header>
  );
}
