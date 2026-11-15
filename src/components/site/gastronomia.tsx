import { useState } from "react";
import carpaccio from "@/assets/prato-carpaccio.jpg";
import arancini from "@/assets/prato-arancini.jpg";
import carbonara from "@/assets/prato-carbonara.jpg";
import mezzaluna from "@/assets/prato-mezzaluna.jpg";
import tagliata from "@/assets/prato-tagliata.jpg";
import sobremesa from "@/assets/prato-sobremesa.jpg";
import { Reveal } from "./reveal";
import { Cta } from "./cta";
import { cn } from "@/lib/utils";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";

type Dish = { name: string; image: string; alt: string };
type Category = { id: string; label: string; note: string; dishes: Dish[] };

// Dish names only — ingredients, prices and availability must come from the official menu.
const CATEGORIES: Category[] = [
  {
    id: "entradas",
    label: "Entradas",
    note: "O início da experiência, para compartilhar à mesa.",
    dishes: [
      { name: "Carpaccio de mignon", image: carpaccio, alt: "Carpaccio de mignon" },
      { name: "Arancini", image: arancini, alt: "Arancini dourados" },
    ],
  },
  {
    id: "massas",
    label: "Massas",
    note: "Receitas clássicas e frescas, no tempo certo.",
    dishes: [
      { name: "Carbonara", image: carbonara, alt: "Spaghetti à carbonara" },
      { name: "Mezzaluna mozzarella", image: mezzaluna, alt: "Mezzaluna recheada de mozzarella" },
    ],
  },
  {
    id: "principais",
    label: "Pratos principais",
    note: "Cortes e preparos que celebram o melhor ingrediente.",
    dishes: [{ name: "Tagliata di ancho", image: tagliata, alt: "Tagliata di ancho fatiada" }],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    note: "O final doce de uma noite especial. Consulte as opções da casa.",
    dishes: [{ name: "Dolci della casa", image: sobremesa, alt: "Sobremesa italiana servida com café" }],
  },
];

export function Gastronomia() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <section id="gastronomia" className="section-pad bg-ink text-ivory">
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Gastronomia</p>
            <h2 className="display-lg mt-8">
              A arte de saborear <em className="text-gold">a Itália.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="lede text-ivory/70">
              Uma cozinha que valoriza ingredientes, técnicas e combinações que despertam os
              sentidos.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div role="tablist" aria-label="Categorias do cardápio" className="flex flex-row flex-wrap gap-x-8 gap-y-4 lg:flex-col lg:gap-0">
              {CATEGORIES.map((cat, i) => {
                const selected = cat.id === active;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    type="button"
                    id={`tab-${cat.id}`}
                    aria-selected={selected}
                    aria-controls={`painel-${cat.id}`}
                    onClick={() => setActive(cat.id)}
                    className={cn(
                      "group flex items-baseline gap-5 text-left transition-colors duration-500 lg:border-b lg:border-ivory/10 lg:py-7",
                      selected ? "text-ivory" : "text-ivory/40 hover:text-ivory/80",
                    )}
                  >
                    <span className={cn("font-sans text-[0.65rem] tracking-[0.3em]", selected ? "text-gold" : "")}>
                      0{i + 1}
                    </span>
                    <span className="font-display text-2xl font-light md:text-3xl lg:text-4xl">
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-10 hidden max-w-xs text-sm leading-relaxed text-ivory/50 lg:block">
              {current.note}
            </p>
          </Reveal>

          <div
            role="tabpanel"
            id={`painel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="lg:col-span-8"
          >
            <div
              key={current.id}
              className={cn(
                "grid gap-6 animate-in fade-in duration-1000",
                current.dishes.length > 1 ? "sm:grid-cols-2" : "",
              )}
            >
              {current.dishes.map((dish, i) => (
                <figure
                  key={dish.name}
                  className={cn(i === 1 && "sm:mt-24")}
                >
                  <div
                    className={cn(
                      "photo-zoom",
                      current.dishes.length > 1 ? "aspect-[4/5]" : "aspect-[4/5] sm:aspect-[16/11]",
                    )}
                  >
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-b border-ivory/10 pb-5">
                    <span className="font-display text-2xl font-light italic md:text-3xl">
                      {dish.name}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                      {current.label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-sm text-ivory/50 lg:hidden">{current.note}</p>
          </div>
        </div>

        <Reveal className="mt-20 flex flex-col items-start gap-6 border-t border-ivory/10 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-ivory/55">
            O cardápio é renovado ao longo das estações. Solicite a versão atualizada à nossa equipe.
          </p>
          <Cta href={whatsappLink(WHATSAPP_MESSAGES.cardapio)} variant="outlineLight">
            Conheça nosso cardápio
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
