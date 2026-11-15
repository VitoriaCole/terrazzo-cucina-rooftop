import bar from "@/assets/drinks-bar.jpg";
import spritz from "@/assets/drinks-spritz.jpg";
import { Reveal } from "./reveal";

export function Drinks() {
  return (
    <section id="drinks" className="relative overflow-hidden bg-olive text-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="photo-zoom relative min-h-[60vh] lg:min-h-[92vh]">
          <img
            src={bar}
            alt="Negroni e old fashioned sobre o balcão de mármore do bar, com as luzes da cidade ao fundo"
            width={1400}
            height={938}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="relative flex items-center section-pad">
          <div className="px-[clamp(1.25rem,6vw,6rem)]">
            <Reveal>
              <p className="eyebrow">Drinks & carta de bebidas</p>
              <h2 className="display-lg mt-8 max-w-lg">
                Brindes que fazem parte <em className="text-gold">da experiência.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="lede mt-10 max-w-md text-ivory/75">
                Drinks clássicos e autorais preparados para acompanhar cada momento, em uma
                atmosfera que convida a apreciar a noite.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-14 flex items-end gap-8">
              <div className="photo-zoom aspect-[4/5] w-40 shrink-0 sm:w-52">
                <img
                  src={spritz}
                  alt="Bartender servindo um drink dourado em taça coupe ao entardecer"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="max-w-[14rem] pb-2 font-display text-xl italic leading-snug text-sand/90">
                “Ao cair da tarde, o brinde tem a cor do céu.”
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
