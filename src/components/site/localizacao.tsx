import { Reveal } from "./reveal";
import { Cta } from "./cta";
import { ADDRESS, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL } from "@/lib/site";

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-ink text-ivory">
      <div className="grid lg:grid-cols-12">
        <div className="section-pad flex items-center lg:col-span-5">
          <div className="w-full px-[clamp(1.25rem,6vw,5rem)]">
            <Reveal>
              <p className="eyebrow">Localização</p>
              <h2 className="display-lg mt-8">
                Estamos esperando <em className="text-gold">por você.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <address className="mt-12 space-y-1 not-italic">
                <span className="block font-display text-3xl font-light italic">Terrazzo Cucina</span>
                <span className="block text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                  {ADDRESS.venue}
                </span>
                <span className="block pt-5 text-sm leading-relaxed text-ivory/70">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.district}
                  <br />
                  {ADDRESS.city} — {ADDRESS.state}
                </span>
              </address>
            </Reveal>
            <Reveal delay={300} className="mt-12">
              <Cta href={MAPS_DIRECTIONS_URL} variant="outlineLight">
                Como chegar
              </Cta>
            </Reveal>
          </div>
        </div>
        <div className="map-frame relative min-h-[26rem] lg:col-span-7 lg:min-h-[44rem]">
          <iframe
            title="Mapa com a localização do Terrazzo Cucina no Hotel Tulip Inn, em Bauru"
            src={MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
