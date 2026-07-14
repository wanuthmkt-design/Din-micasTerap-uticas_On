import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import heroProductAsset from "@/assets/hero-product.png.asset.json";
import tutorialHeroAsset from "@/assets/tutorial-hero.png.asset.json";
import product1Asset from "@/assets/product-1.jpg.asset.json";
import product2Asset from "@/assets/product-2.jpg.asset.json";
import product3Asset from "@/assets/product-3.jpg.asset.json";

const heroProduct = heroProductAsset.url;
const tutorialHero = tutorialHeroAsset.url;
const product1 = product1Asset.url;
const product2 = product2Asset.url;
const product3 = product3Asset.url;
import guaranteeSeal from "@/assets/guarantee.png";
import proof1Asset from "@/assets/proof-1.jpg.asset.json";
import proof2Asset from "@/assets/proof-2.jpg.asset.json";
import proof3Asset from "@/assets/proof-3.jpg.asset.json";
import proof4Asset from "@/assets/proof-4.jpg.asset.json";
import proof5Asset from "@/assets/proof-5.jpg.asset.json";
import proof6Asset from "@/assets/proof-6.jpg.asset.json";
import proof7Asset from "@/assets/proof-7.jpg.asset.json";

const proof1 = proof1Asset.url;
const proof2 = proof2Asset.url;
const proof3 = proof3Asset.url;
const proof4 = proof4Asset.url;
const proof5 = proof5Asset.url;
const proof6 = proof6Asset.url;
const proof7 = proof7Asset.url;

export const Route = createFileRoute("/")({
  component: SalesPage,
});

const CHECKOUT_URL = "#checkout";
const HOTMART_URL = "https://pay.hotmart.com/R106732905U?checkoutMode=10";

function CTA({
  label = "Quiero mi acceso ahora",
  href = CHECKOUT_URL,
  variant = "primary",
}: {
  label?: string;
  href?: string;
  variant?: "primary" | "green";
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={variant === "green" ? "btn-cta-green" : "btn-cta"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={() => {
        const w = window as unknown as { lvTrack?: (n: string) => void };
        w.lvTrack?.("Lead");
      }}
      suppressHydrationWarning
    >
      {label}
      <span aria-hidden>›</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-[3px] h-4 w-4 shrink-0 text-[color:var(--color-sage-deep)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Countdown() {
  const [seconds, setSeconds] = useState(15 * 60);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return (
    <div className="mx-auto flex items-center justify-center gap-2 font-display text-5xl font-bold tracking-tight text-[color:var(--color-petrol)] sm:text-6xl">
      <span className="rounded-xl bg-[color:var(--color-sand-deep)] px-4 py-2 tabular-nums">
        {mm}
      </span>
      <span className="text-[color:var(--color-terracotta-deep)]">:</span>
      <span className="rounded-xl bg-[color:var(--color-sand-deep)] px-4 py-2 tabular-nums">
        {ss}
      </span>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="hairline rounded-2xl bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold leading-snug text-[color:var(--color-petrol)]">
          {q}
        </span>
        <span
          className={`mt-1 text-xl text-[color:var(--color-terracotta-deep)] transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
          {a}
        </div>
      )}
    </div>
  );
}

function SalesPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const proofs = useMemo(
    () => [
      {
        src: "https://goosdtech.online/wp-content/uploads/2026/07/imagem-5.webp",
        alt: "Testimonio del material",
      },
      {
        src: "https://goosdtech.online/wp-content/uploads/2026/07/imagem-7.webp",
        alt: "Testimonio del material",
      },
      {
        src: "https://goosdtech.online/wp-content/uploads/2026/07/imagem-8.webp",
        alt: "Testimonio del material",
      },
      {
        src: "https://goosdtech.online/wp-content/uploads/2026/07/imagem-9.webp",
        alt: "Testimonio del material",
      },
      {
        src: "https://goosdtech.online/wp-content/uploads/2026/07/imagem-10.webp",
        alt: "Testimonio del material",
      },
      {
        src: "https://goosdtech.online/wp-content/uploads/2026/07/imagem-12.webp",
        alt: "Testimonio del material",
      },
      {
        src: "https://goosdtech.online/wp-content/uploads/2026/07/imagem-13.webp",
        alt: "Testimonio del material",
      },
    ],
    [],
  );

  return (
    <main className="min-h-screen bg-[color:var(--color-sand)]">
      <header className="mx-auto flex max-w-lg items-center justify-center px-6 py-5">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-[color:var(--color-sage-deep)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M12 3c3 4 3 8 0 12 3 0 6-2 6-6M12 3c-3 4-3 8 0 12-3 0-6-2-6-6" />
          </svg>
          <span className="font-display text-lg tracking-tight text-[color:var(--color-petrol)]">
            Sesión Lista
          </span>
        </div>
      </header>

      {/* DOBRA 1 */}
      <section className="mx-auto max-w-lg px-6 pb-8 pt-2">
        <div className="mb-4 flex justify-center">
          <Eyebrow>Material clínico premium</Eyebrow>
        </div>
        <h1 className="text-center font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--color-petrol)] sm:text-5xl">
          +250 Dinámicas Terapéuticas{" "}
          <em className="not-italic text-[color:var(--color-sage-deep)]">listas</em> para imprimir y
          aplicar en tu próxima sesión
        </h1>

        <div className="mt-7 overflow-hidden rounded-3xl bg-card hairline">
          <img
            src="https://goosdtech.online/wp-content/uploads/2026/07/imagem-16.webp"
            alt="Apostilla y fichas impresas del material"
            width={1024}
            height={1024}
            className="h-auto w-full"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="mt-6 text-center text-[15px] leading-relaxed text-[color:var(--color-muted-foreground)]">
          Separadas por tema y objetivo, funcionan en cualquier abordaje (TCC, Gestalt,
          Psicoanálisis, Humanista). Abres el PDF, eliges, imprimes y aplicas, incluso si tu sesión
          es dentro de una hora.
        </p>

        <ul className="mt-7 space-y-3">
          {[
            "Sin armar sesiones desde cero",
            "Cualquier abordaje terapéutico",
            "Imprime y aplica en minutos",
            "Pacientes más abiertos y activos",
            "Grupos que sí participan",
            "Acceso inmediato tras el pago",
          ].map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-[15px] text-[color:var(--color-petrol)]"
            >
              <Check />
              <span className="font-semibold">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTA />
          <p className="mt-3 text-center text-xs text-[color:var(--color-muted-foreground)]">
            Acceso inmediato · Pago 100% seguro
          </p>
        </div>
      </section>

      {/* DOBRA 2 */}
      <section className="mx-auto max-w-lg px-6 py-14">
        <div className="mb-2 flex justify-center">
          <Eyebrow>Míralo en la práctica</Eyebrow>
        </div>
        <h2 className="text-center font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Así se ve, así se aplica
        </h2>

        <div className="mt-8 overflow-hidden rounded-3xl bg-card hairline">
          <img
            src="https://goosdtech.online/wp-content/uploads/2026/07/imagem-1.webp"
            alt="Terapeuta sosteniendo una ficha lista para aplicar"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-auto w-full"
            referrerPolicy="no-referrer"
          />
          <div className="border-t border-[color:var(--color-border)] px-5 py-4 text-center text-sm text-[color:var(--color-muted-foreground)]">
            Abrir · elegir · imprimir · aplicar
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
          {[
            "https://goosdtech.online/wp-content/uploads/2026/07/imagem-17.webp",
            "https://goosdtech.online/wp-content/uploads/2026/07/imagem-18.webp",
            "https://goosdtech.online/wp-content/uploads/2026/07/imagem-21.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="group relative cursor-zoom-in overflow-hidden rounded-2xl bg-card hairline transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setActiveImage(src)}
            >
              <img
                src={src}
                alt={`Vista del material ${i + 1}`}
                width={512}
                height={512}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100 sm:right-3 sm:bottom-3 sm:h-8 sm:w-8">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOBRA 3 */}
      <section className="bg-[color:var(--color-sand-deep)]/60">
        <div className="mx-auto max-w-lg px-6 py-14">
          <div className="mb-2 flex justify-center">
            <Eyebrow>Ideal para ti</Eyebrow>
          </div>
          <h2 className="text-center font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Ideal para ti que deseas
          </h2>

          <ul className="mt-8 space-y-4">
            {[
              {
                t: "Recuperar tu tiempo libre",
                d: "Deja de perder noches armando actividades desde cero para cada paciente.",
              },
              {
                t: "Sesiones más participativas",
                d: "Dinámicas que rompen el silencio y activan a pacientes callados o cansados.",
              },
              {
                t: "Seguridad en la conducción",
                d: "Nunca más el miedo de trabarte pensando qué aplicar en la próxima sesión.",
              },
              {
                t: "Evolución visible del paciente",
                d: "Herramientas concretas que aceleran los avances encuentro tras encuentro.",
              },
            ].map((b, i) => (
              <li key={b.t} className="flex items-start gap-4 rounded-2xl bg-card p-5 hairline">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--color-sage)]/20 font-display text-lg text-[color:var(--color-sage-deep)]">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold text-[color:var(--color-petrol)]">
                    {b.t}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--color-muted-foreground)]">
                    {b.d}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DOBRA 4 */}
      <section className="mx-auto max-w-lg px-6 py-14 text-center">
        <div className="mb-2 flex justify-center">
          <Eyebrow>Oferta por tiempo limitado</Eyebrow>
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          El precio sube cuando el reloj llega a cero
        </h2>
        <div className="mt-8">
          <Countdown />
        </div>
        <p className="mx-auto mt-6 max-w-sm text-[15px] leading-relaxed text-[color:var(--color-muted-foreground)]">
          Estamos liberando el material completo por solo{" "}
          <b className="text-[color:var(--color-petrol)]">$3,90</b> durante esta ventana. Cuando el
          contador termine, la oferta vuelve al valor real de{" "}
          <span className="line-through">$20,00</span>.
        </p>
        <div className="mt-8">
          <CTA label="Aprovechar antes de que suba" />
        </div>
      </section>

      {/* DOBRA 5 */}
      <section className="overflow-hidden bg-[color:var(--color-sand-deep)]/60 py-14">
        <div className="mx-auto mb-8 max-w-lg px-6 text-center">
          <div className="mb-2 flex justify-center">
            <Eyebrow>Terapeutas ya aplicando</Eyebrow>
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Miles de sesiones transformadas
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[...proofs, ...proofs].map((p, i) => (
              <figure
                key={i}
                className="w-44 sm:w-64 shrink-0 cursor-zoom-in overflow-hidden rounded-2xl bg-card hairline transition-transform hover:scale-[1.02] active:scale-[0.98] [backface-visibility:hidden] [transform:translate3d(0,0,0)]"
                onClick={() => setActiveImage(p.src)}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  width={512}
                  height={512}
                  loading="eager"
                  decoding="async"
                  className="aspect-square h-full w-full object-cover [backface-visibility:hidden] [transform:translate3d(0,0,0)]"
                  referrerPolicy="no-referrer"
                />
              </figure>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[color:var(--color-sand-deep)]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[color:var(--color-sand-deep)]/80 to-transparent z-10" />
        </div>
      </section>

      {/* DOBRA 6 */}
      <section id="checkout" className="mx-auto max-w-lg px-6 py-14">
        <div className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-[0_30px_60px_-30px_rgba(31,78,95,0.35)] hairline sm:p-8">
          <div className="absolute -right-3 top-5 rotate-3 rounded-full bg-[color:var(--color-terracotta-deep)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[color:var(--color-primary-foreground)] shadow">
            80% off hoy
          </div>

          <div className="mb-3 flex justify-center">
            <Eyebrow>Todo lo que recibes</Eyebrow>
          </div>
          <h2 className="text-center font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Sesión Lista, completo
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl hairline">
            <img
              src="https://goosdtech.online/wp-content/uploads/2026/07/imagem-1.webp"
              alt="Todos los materiales del paquete"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-auto w-full"
              referrerPolicy="no-referrer"
            />
          </div>

          <ul className="mt-6 space-y-3 text-[15px]">
            {[
              {
                b: "Apostilla principal",
                d: "+250 dinámicas en apostilla ilustrada A4, por tema y objetivo.",
              },
              { b: "Fichas individuales", d: "Una dinámica por página, listas para imprimir." },
              { b: "Apoyo visual", d: "Para sesiones más participativas." },
              { b: "Material digital", d: "PDF con acceso inmediato." },
            ].map((it) => (
              <li key={it.b} className="flex items-start gap-3">
                <Check />
                <span className="text-[color:var(--color-petrol)]">
                  <b>{it.b}.</b>{" "}
                  <span className="text-[color:var(--color-muted-foreground)]">{it.d}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-dashed border-[color:var(--color-border)] pt-6 text-center">
            <p className="text-sm text-[color:var(--color-muted-foreground)]">
              Valor real del paquete
            </p>
            <p className="mt-1 font-display text-xl font-semibold text-[color:var(--color-muted-foreground)] line-through">
              $20,00
            </p>
            <p className="mt-4 text-sm text-[color:var(--color-muted-foreground)]">
              Hoy pagas apenas
            </p>
            <p className="mt-1 font-display text-6xl font-bold leading-none text-green-600">
              $3<span className="text-4xl align-top">,90</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-[color:var(--color-sage-deep)]">
              Pago único · Acceso inmediato
            </p>
          </div>

          <div className="mt-6">
            <CTA label="Quiero todo por $3,90" href={HOTMART_URL} variant="green" />
          </div>
        </div>
      </section>

      {/* DOBRA 7 */}
      <section className="bg-[color:var(--color-sand-deep)]/60">
        <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-14 text-center">
          <img
            src={guaranteeSeal}
            alt="Sello de garantía"
            width={200}
            height={200}
            loading="lazy"
            className="h-32 w-32"
          />
          <div className="mt-2 flex justify-center">
            <Eyebrow>Garantía incondicional</Eyebrow>
          </div>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            7 días para probar sin riesgo
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[color:var(--color-muted-foreground)]">
            Aplica las dinámicas con tus pacientes durante una semana. Si no sientes que tus
            sesiones ganaron vida y engagement, escríbenos y te devolvemos el 100% del valor. El
            material queda contigo.
          </p>
        </div>
      </section>

      {/* DOBRA 8 */}
      <section className="mx-auto max-w-lg px-6 py-14">
        <div className="mb-2 flex justify-center">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
        </div>
        <h2 className="text-center font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Dudas resueltas antes de comprar
        </h2>

        <div className="mt-8 space-y-3">
          <Faq
            q="¿Funciona con mi abordaje terapéutico?"
            a="Sí. Las dinámicas están organizadas por objetivo clínico, no por escuela. Se aplican en TCC, Gestalt, Psicoanálisis, Humanista, terapia infantil, de pareja y grupal, adaptándose a tu estilo de conducción."
          />
          <Faq
            q="¿Necesito imprimirlas para usarlas?"
            a="No es obligatorio. Cada dinámica viene en PDF con ficha lista para imprimir, pero también funcionan proyectadas o leídas directamente en pantalla si atiendes en formato online."
          />
          <Faq
            q="¿Cómo recibo el material después de pagar?"
            a="El acceso es inmediato. Al finalizar el pago llega a tu correo el enlace de descarga con todos los PDFs, fichas y bonos. Los guardas en tu computadora y los abres cuando quieras, sin plazo."
          />
          <Faq
            q="¿Sirve para pacientes infantiles y adolescentes?"
            a="Sí. Hay categorías específicas para niños, adolescentes y adultos, con dinámicas simbólicas, lúdicas y de autoconocimiento adaptables por edad y por nivel de vínculo con el paciente."
          />
          <Faq
            q="¿Y si aún no tengo consultorio propio?"
            a="Perfecto para quien está empezando. El material te da un repertorio inicial completo, seguro y profesional, para llegar preparada o preparado desde tu primera sesión clínica, en clínica ajena, online o en instituciones."
          />
          <Faq
            q="¿Por qué el precio es tan bajo?"
            a="Estamos en una ventana de lanzamiento para hacer llegar el material a la mayor cantidad posible de profesionales. Cuando el contador termine, la oferta vuelve al valor real de $20,00 sin excepciones."
          />
        </div>

        <div className="mt-10">
          <CTA />
          <p className="mt-3 text-center text-xs text-[color:var(--color-muted-foreground)]">
            Pago único · Garantía de 7 días
          </p>
        </div>
      </section>

      <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-sand-deep)]/40">
        <div className="mx-auto max-w-lg px-6 py-8 text-center text-xs text-[color:var(--color-muted-foreground)]">
          © {new Date().getFullYear()} Sesión Lista. Todos los derechos reservados. Este producto no
          sustituye supervisión clínica ni formación profesional.
        </div>
      </footer>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 transition-all duration-300 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
              aria-label="Cerrar"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img
              src={activeImage}
              alt="Vista ampliada"
              className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl hairline"
            />
            <p className="mt-3 text-center text-sm text-white/75">
              Toca en cualquier parte para cerrar
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
