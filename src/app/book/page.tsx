import type { Metadata } from "next";
import Image from "next/image";
import { book } from "@/data/content";
import coverArt from "../../data/book_cover.png";

export const metadata: Metadata = {
  title: "Shadow City: A Woman Walks Kabul",
  description:
    "Shadow City: A Woman Walks Kabul by Taran Khan. Winner of the Stanford Dolman Travel Book of the Year.",
};

export default function BookPage() {
  return (
    <article className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
        <div className="lg:col-span-5">
          <div className="w-full max-w-sm overflow-hidden border border-ink/10 bg-ink/5 shadow-[0_20px_60px_rgba(3,41,58,0.18)]">
            <div className="relative aspect-[277/443] w-full">
              <Image
                src={coverArt}
                alt="Shadow City: A Woman Walks Kabul book cover"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <div className="w-24 overflow-hidden border border-ink/10 bg-ink/5">
              <div className="relative aspect-[277/443] w-full">
                <Image
                  src={coverArt}
                  alt="Shadow City: A Woman Walks Kabul cover thumbnail"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-24 overflow-hidden border border-ink/10 bg-ink/5">
              <div className="relative aspect-[277/443] w-full">
                <Image
                  src={coverArt}
                  alt="Shadow City: A Woman Walks Kabul cover thumbnail"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="font-sans text-xs uppercase tracking-widest text-dusk">
            {book.publisher}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 leading-tight text-ink">
            Shadow City:
            <br />
            <span className="italic">A Woman Walks Kabul</span>
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            {book.awards.map((a) => (
              <span
                key={a}
                className="px-3 py-1 border border-dusk/30 text-dusk text-xs uppercase tracking-wider font-sans"
              >
                {a}
              </span>
            ))}
          </div>

          <p className="font-sans text-xs uppercase tracking-widest text-ink-light/60 mb-8">
            {book.translations}
          </p>

          <blockquote className="font-display text-2xl md:text-3xl leading-snug mb-8 text-ink">
            &ldquo;{book.quote}&rdquo;
          </blockquote>

          <div className="space-y-4 font-serif text-ink-light leading-relaxed">
            {book.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-ink/10">
            <a
              href={book.extractUrl}
              className="inline-flex items-center gap-2 text-dusk hover:text-ink transition-colors font-sans"
            >
              Read an extract <span>&rarr;</span>
              <span className="text-xs text-ink-light/50">(Al Jazeera)</span>
            </a>
          </div>
        </div>
      </div>

      <section className="mb-24">
        <h2 className="font-display text-3xl md:text-4xl mb-12 text-ink">
          Praise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {book.praise.map((item, i) => (
            <div
              key={i}
              className={item.long ? "md:col-span-2 max-w-3xl" : ""}
            >
              <p className="font-serif text-xl md:text-2xl leading-relaxed mb-3 text-ink">
                &ldquo;{item.text}&rdquo;
              </p>
              <cite className="font-sans text-sm uppercase tracking-wider text-ink-light not-italic">
                &mdash; {item.source}
              </cite>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h3 className="font-display text-2xl mb-6 text-ink">Order</h3>
          <div className="flex flex-wrap gap-3">
            {book.buyLinks.map((l) => (
              <a
                key={l.label}
                href={l.url}
                className="px-4 py-2 border border-ink/20 hover:border-dusk hover:text-dusk transition-colors text-sm uppercase tracking-wider font-sans text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl mb-6 text-ink">
            Reviews & Press
          </h3>
          <div className="flex flex-wrap gap-3">
            {book.reviewLinks.map((l) => (
              <a
                key={l.label}
                href={l.url}
                className="px-4 py-2 border border-ink/20 hover:border-dusk hover:text-dusk transition-colors text-sm uppercase tracking-wider font-sans text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {book.press.map((l) => (
              <a
                key={l.label}
                href={l.url}
                className="text-sm text-ink-light hover:text-dusk transition-colors underline underline-offset-4 decoration-1"
              >
                {l.label} &rarr;
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="pt-12 border-t border-ink/10">
        <h3 className="font-display text-2xl mb-6 text-ink">
          Other Book Contributions
        </h3>
        <div className="space-y-6">
          {book.contributions.map((c, i) => (
            <div key={i}>
              <p className="font-serif text-lg text-ink">{c.title}</p>
              <p className="text-sm text-ink-light">{c.meta}</p>
              <p className="text-sm text-ink-light/70 mt-1">{c.note}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
