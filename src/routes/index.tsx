import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Minus, Plus } from "lucide-react";
import bottle from "@/assets/tide-bottle.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TIDE by SARKAR — Aquatic Unisex Parfum, 100 ml" },
      {
        name: "description",
        content:
          "Command the current. TIDE is an aquatic signature of sea salt, aromatic sage and mineral woods. 100 ml unisex parfum, ₹1,499.",
      },
      { property: "og:title", content: "TIDE by SARKAR — Aquatic Unisex Parfum" },
      {
        property: "og:description",
        content:
          "An aquatic signature of sea salt, aromatic sage and mineral woods, created for those who lead without noise.",
      },
    ],
  }),
  component: Index,
});

const NOTES = [
  {
    title: "Top Notes",
    notes: "Sea Salt · Bergamot · Marine Accord",
    copy: "A crisp opening inspired by cool ocean air.",
  },
  {
    title: "Heart Notes",
    notes: "Sage · Geranium · Water Lily",
    copy: "An aromatic, clean heart with understated depth.",
  },
  {
    title: "Base Notes",
    notes: "Driftwood · Mineral Amber · White Musk",
    copy: "A smooth, lasting trail of woods and skin-like musk.",
  },
];

const DETAILS = [
  "100 ml unisex parfum",
  "25% perfume concentration",
  "Long-lasting aquatic and woody profile",
  "Designed for day, evening and special occasions",
  "Premium SARKAR presentation",
  "Ships within 24–36 hours of ordering",
];

const JOURNEY = [
  { step: "01", title: "Opening", copy: "Crisp marine freshness" },
  { step: "02", title: "Heart", copy: "Aromatic confidence" },
  { step: "03", title: "Dry-down", copy: "Smooth mineral woods and musk" },
];

const PROFILE = [
  ["Freshness", "High"],
  ["Intensity", "Medium–High"],
  ["Longevity", "Long-lasting"],
  ["Best suited for", "All seasons"],
];

function Wave() {
  return (
    <svg
      viewBox="0 0 100 12"
      className="h-3 w-24 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M0 6c8-8 17 8 25 0s17 8 25 0 17 8 25 0 17 8 25 0" />
    </svg>
  );
}

function Index() {
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState(0);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <div className="bg-ink py-2 text-center eyebrow text-muted-foreground">
        Complimentary 2 ml sample with every order
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <nav className="hidden gap-8 eyebrow text-muted-foreground md:flex">
            <a href="#fragrance" className="transition-colors hover:text-foreground">
              The Fragrance
            </a>
            <a href="#notes" className="transition-colors hover:text-foreground">
              Notes
            </a>
            <a href="#experience" className="transition-colors hover:text-foreground">
              Experience
            </a>
          </nav>
          <a
            href="#buy"
            className="font-display text-xl font-800 tracking-[0.4em] md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            SARKAR
          </a>
          <div className="flex items-center gap-3">
            <a
              href="#buy"
              className="bg-primary px-5 py-3 eyebrow text-primary-foreground transition-opacity hover:opacity-90"
            >
              Buy Now
            </a>
            <span className="flex items-center gap-2 border border-border p-3 text-muted-foreground">
              <ShoppingBag className="size-4" />
              {cart > 0 && <span className="text-xs">{cart}</span>}
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-bg relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow text-muted-foreground">The New Aquatic Parfum</p>
            <h1 className="mt-6 font-display text-7xl leading-none tracking-[0.06em] md:text-8xl">
              TIDE
            </h1>
            <p className="mt-6 eyebrow text-lg text-accent">Command the current.</p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              An aquatic signature of sea salt, aromatic sage and mineral woods—created for those
              who remain calm, move with purpose and lead without noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Unisex", "Aquatic", "Parfum"].map((t) => (
                <span key={t} className="border border-border px-4 py-2 eyebrow">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-10 flex items-baseline gap-4">
              <span className="font-display text-4xl tracking-tight">₹1,499</span>
              <span className="eyebrow text-muted-foreground">100 ml</span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                onClick={() => setCart((c) => c + 1)}
                className="bg-primary px-8 py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90"
              >
                Add to Cart
              </button>
              <a
                href="#notes"
                className="border-b-2 border-primary pb-1 eyebrow transition-colors hover:text-accent"
              >
                Discover the Notes
              </a>
            </div>
          </div>

          <figure className="text-center">
            <img
              src={bottle}
              alt="SARKAR TIDE chess-inspired perfume bottle in deep blue glass"
              className="mx-auto w-full max-w-md drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            />
            <figcaption className="mt-6 eyebrow text-muted-foreground">
              Official SARKAR packaging reference
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Fragrance */}
      <section id="fragrance" className="deep-bg border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="flex justify-center">
            <Wave />
          </div>
          <h2 className="mt-8 font-display text-4xl uppercase tracking-tight md:text-5xl">
            Power, below the surface.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            TIDE opens with a cold rush of marine air and sea salt. Aromatic sage brings clarity at
            its heart, while driftwood, mineral amber and white musk leave a clean, commanding
            trail. Fresh but not fragile. Powerful but never loud.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Fresh", "Mineral", "Confident"].map((t) => (
              <span key={t} className="border border-border px-4 py-2 eyebrow text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center font-display text-4xl uppercase md:text-5xl">
          The Essence of Tide
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {NOTES.map((n, i) => (
            <article
              key={n.title}
              className="border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <span className="eyebrow text-primary">{`0${i + 1}`}</span>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-wide">{n.title}</h3>
              <p className="mt-4 text-sm text-accent">{n.notes}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{n.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="deep-bg border-y border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
          <img
            src={bottle}
            alt="TIDE parfum bottle presented against a deep blue backdrop"
            className="mx-auto w-full max-w-sm"
            loading="lazy"
          />
          <div>
            <p className="eyebrow text-muted-foreground">
              Boardrooms · Evenings · First Impressions
            </p>
            <h2 className="mt-6 font-display text-4xl uppercase md:text-5xl">
              Made to leave a mark.
            </h2>
            <ul className="mt-10 space-y-4">
              {DETAILS.map((d) => (
                <li key={d} className="flex gap-4 border-b border-border pb-4 text-muted-foreground">
                  <span className="text-primary">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center font-display text-4xl uppercase md:text-5xl">
          From First Impact to Final Impression
        </h2>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {JOURNEY.map((j) => (
            <li key={j.step} className="border-t-2 border-primary bg-card p-8">
              <span className="font-display text-3xl text-primary">{j.step}</span>
              <h3 className="mt-4 font-display text-xl uppercase tracking-wide">{j.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{j.copy}</p>
            </li>
          ))}
        </ol>

        <dl className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROFILE.map(([k, v]) => (
            <div key={k} className="bg-card p-6">
              <dt className="eyebrow text-muted-foreground">{k}</dt>
              <dd className="mt-3 font-display text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Buy */}
      <section id="buy" className="hero-bg border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl uppercase md:text-5xl">Own the current.</h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Discover TIDE, the aquatic signature fragrance from SARKAR.
            </p>
            <img
              src={bottle}
              alt="TIDE 100 ml parfum bottle"
              className="mt-10 w-52"
              loading="lazy"
            />
          </div>

          <div className="border border-border bg-card p-8">
            <h3 className="font-display text-2xl">Tide — Unisex Aquatic Parfum</h3>
            <p className="mt-2 eyebrow text-muted-foreground">100 ml</p>
            <p className="mt-6 font-display text-4xl">₹1,499</p>
            <p className="mt-1 text-sm text-muted-foreground">Inclusive of all taxes</p>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center border border-border">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-10 text-center font-display">{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Plus className="size-4" />
                </button>
              </div>
              <button
                onClick={() => setCart((c) => c + qty)}
                className="flex-1 bg-primary px-8 py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90"
              >
                Add to Cart
              </button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Complimentary 2 ml sample with every order.
            </p>
            <p className="text-sm text-muted-foreground">Ships within 24–36 hours.</p>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-center eyebrow text-muted-foreground">
        SARKAR · TIDE
      </footer>
    </div>
  );
}
