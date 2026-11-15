import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import vista from "@/assets/ambiente-vista.jpg";
import rooftop from "@/assets/hero-rooftop.jpg";
import mesa from "@/assets/ambiente-mesa.jpg";
import interno from "@/assets/ambiente-interno.jpg";
import externo from "@/assets/ambiente-externo.jpg";
import bar from "@/assets/ambiente-bar.jpg";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const PHOTOS = [
  { src: vista, w: 1400, h: 882, label: "Vista panorâmica de Bauru", alt: "Vista panorâmica de Bauru ao anoitecer a partir do rooftop", span: "md:col-span-8 md:row-span-2 aspect-[16/10] md:aspect-auto" },
  { src: rooftop, w: 1920, h: 1088, label: "Rooftop ao pôr do sol", alt: "Rooftop do Terrazzo Cucina ao pôr do sol", span: "md:col-span-4 aspect-[4/5] md:aspect-auto" },
  { src: mesa, w: 1024, h: 1280, label: "Mesas e decoração", alt: "Mesa posta com velas, cristais e ramos de oliveira", span: "md:col-span-4 aspect-[4/5] md:aspect-auto" },
  { src: interno, w: 1024, h: 1280, label: "Ambiente interno", alt: "Salão interno com banquetas verde oliva", span: "md:col-span-4 md:row-span-2 aspect-[4/5] md:aspect-auto" },
  { src: externo, w: 1400, h: 882, label: "Área externa", alt: "Área externa do rooftop com oliveiras e luzes suspensas", span: "md:col-span-8 aspect-[16/10] md:aspect-auto" },
  { src: bar, w: 1024, h: 1280, label: "Bar e iluminação noturna", alt: "Bar iluminado à noite com garrafas em prateleiras douradas", span: "md:col-span-8 aspect-[16/10] md:aspect-auto" },
];

export function Ambiente() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const go = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const photo = index !== null ? PHOTOS[index] : null;

  return (
    <section id="ambiente" className="section-pad bg-ivory text-ink">
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">O ambiente</p>
            <h2 className="display-lg mt-8">
              Uma vista especial.
              <br />
              <em className="text-olive">Momentos inesquecíveis.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="lede text-ink/70">
              Um cenário perfeito para desacelerar, apreciar bons sabores e compartilhar momentos
              especiais.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-12 lg:auto-rows-[22rem]">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.label} delay={(i % 3) * 120} className={cn("relative", p.span)}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ampliar foto: ${p.label}`}
                className="photo-zoom group absolute inset-0 block h-full w-full text-left"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: "var(--overlay-bottom)" }}
                />
                <span className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-ivory">
                  <span className="font-display text-xl font-light italic md:text-2xl">{p.label}</span>
                  <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    Ampliar
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
          <Dialog.Content className="fixed inset-0 z-[61] flex flex-col items-center justify-center p-4 text-ivory outline-none md:p-12">
            <Dialog.Title className="sr-only">{photo?.label ?? "Galeria"}</Dialog.Title>
            <Dialog.Description className="sr-only">
              Use as setas do teclado para navegar entre as fotos.
            </Dialog.Description>
            {photo && (
              <figure key={photo.label} className="flex max-h-full flex-col items-center animate-in fade-in zoom-in-95 duration-700">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.w}
                  height={photo.h}
                  className="max-h-[78vh] w-auto max-w-full object-contain"
                />
                <figcaption className="mt-6 flex items-center gap-5">
                  <span className="text-[0.65rem] tracking-[0.3em] text-gold">
                    {String((index ?? 0) + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-light italic">{photo.label}</span>
                </figcaption>
              </figure>
            )}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory/70 transition-colors hover:text-gold md:left-8"
            >
              <ChevronLeft className="h-7 w-7" strokeWidth={1} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory/70 transition-colors hover:text-gold md:right-8"
            >
              <ChevronRight className="h-7 w-7" strokeWidth={1} />
            </button>
            <Dialog.Close
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-ivory/70 transition-colors hover:text-gold md:right-8 md:top-8"
            >
              <X className="h-6 w-6" strokeWidth={1} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
