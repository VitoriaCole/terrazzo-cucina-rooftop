import jantar from "@/assets/momentos-jantar.jpg";
import celebracao from "@/assets/momentos-celebracao.jpg";
import { Reveal } from "./reveal";
import { Cta } from "./cta";
import { WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";

const MOMENTOS = [
  { title: "Jantares românticos", text: "Uma mesa à luz de velas, a cidade ao fundo e o tempo desacelerando a dois." },
  { title: "Aniversários e comemorações", text: "Celebrações com o cuidado de quem entende que algumas datas merecem ser lembradas." },
  { title: "Encontros especiais", text: "Reencontros, pedidos e conversas que pedem um cenário à altura." },
  { title: "Eventos e experiências gastronômicas", text: "Momentos exclusivos pensados em conjunto com a nossa equipe." },
];

export function Momentos() {
  return (
    <section id="momentos" className="section-pad overflow-hidden bg-sand text-ink">
      <div className="container-lux grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">Momentos especiais</p>
            <h2 className="display-lg mt-8 max-w-xl">
              Existem momentos que merecem <em className="text-olive">um cenário à altura.</em>
            </h2>
          </Reveal>

          <ol className="mt-16 border-t border-ink/15">
            {MOMENTOS.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 100} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-7 md:grid-cols-[4rem_1fr]">
                <span className="pt-2 text-[0.65rem] tracking-[0.3em] text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-normal md:text-3xl">{m.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/65">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-12">
            <Cta href={whatsappLink(WHATSAPP_MESSAGES.momento)} variant="outlineDark">
              Planeje seu momento
            </Cta>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <Reveal className="photo-zoom aspect-[4/5]">
            <img
              src={jantar}
              alt="Brinde com vinho tinto em jantar romântico no rooftop ao entardecer"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={200} className="photo-zoom relative -mt-24 ml-auto aspect-[16/10] w-3/4 border-[10px] border-sand lg:-ml-24 lg:mr-auto">
            <img
              src={celebracao}
              alt="Amigos brindando com espumante em uma comemoração"
              width={1400}
              height={882}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
