import carbonara from "@/assets/prato-carbonara.jpg";
import vista from "@/assets/ambiente-vista.jpg";
import drinks from "@/assets/drinks-bar.jpg";
import tagliata from "@/assets/prato-tagliata.jpg";
import mesa from "@/assets/ambiente-mesa.jpg";
import arancini from "@/assets/prato-arancini.jpg";
import { Reveal } from "./reveal";
import { Cta } from "./cta";
import { InstagramIcon } from "./icons";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

/*
 * Replace each entry with an official post from @terrazzocucina:
 * set `image` to the post photo and `href` to the post URL (https://www.instagram.com/p/...).
 */
const POSTS = [
  { image: carbonara, alt: "Carbonara", href: INSTAGRAM_URL },
  { image: vista, alt: "Vista do rooftop ao anoitecer", href: INSTAGRAM_URL },
  { image: drinks, alt: "Drinks no bar", href: INSTAGRAM_URL },
  { image: tagliata, alt: "Tagliata di ancho", href: INSTAGRAM_URL },
  { image: mesa, alt: "Mesa posta", href: INSTAGRAM_URL },
  { image: arancini, alt: "Arancini", href: INSTAGRAM_URL },
];

export function Instagram() {
  return (
    <section id="instagram" className="section-pad bg-ivory text-ink">
      <div className="container-lux">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="display-lg mt-8">
              Um pouco do <em className="text-olive">nosso universo.</em>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-2xl italic text-olive transition-colors hover:text-gold md:text-3xl"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {POSTS.map((post, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver publicação no Instagram: ${post.alt}`}
                className="photo-zoom group relative block aspect-square"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-ivory opacity-0 transition-all duration-700 group-hover:bg-ink/50 group-hover:opacity-100">
                  <InstagramIcon className="h-7 w-7" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Cta href={INSTAGRAM_URL} variant="outlineDark">
            Siga nosso Instagram
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
