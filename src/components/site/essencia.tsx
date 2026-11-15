import interno from "@/assets/ambiente-interno.jpg";
import mesa from "@/assets/ambiente-mesa.jpg";
import { Reveal } from "./reveal";

export function Essencia() {
  return (
    <section id="essencia" className="section-pad bg-ivory text-ink">
      <div className="container-lux grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-6">
          <Reveal className="photo-zoom aspect-[4/5] w-[85%]">
            <img
              src={interno}
              alt="Salão interno do Terrazzo Cucina com banquetas verde oliva e luminárias douradas"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal
            delay={200}
            className="photo-zoom absolute -bottom-12 right-0 aspect-[3/4] w-[42%] border-[10px] border-ivory"
          >
            <img
              src={mesa}
              alt="Mesa posta com taças de cristal, velas e ramos de oliveira"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="eyebrow">Nossa essência</p>
            <h2 className="display-lg mt-8">
              Mais que um restaurante.
              <br />
              <em className="text-olive">Uma experiência.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="mt-10 space-y-6 text-ink/75">
            <p className="lede">
              No alto de Bauru, o Terrazzo Cucina reúne a essência da gastronomia italiana, a
              sofisticação de um ambiente acolhedor e uma vista privilegiada da cidade.
            </p>
            <p className="lede">
              Cada detalhe é pensado para proporcionar momentos especiais, seja em um jantar a dois,
              uma celebração ou um encontro entre amigos.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-12 flex items-center gap-6">
            <span className="gold-rule w-16" />
            <span className="font-display text-xl italic text-olive">Benvenuti al Terrazzo</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
