import type { Metadata } from "next";
import { reportage } from "@/data/content";

export const metadata: Metadata = {
  title: "Reportage & Essays",
  description:
    "Long-form journalism and essays by Taran Khan on Afghanistan, migration, gender, and the life of cities.",
};

export default function ReportagePage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink mb-12">
        Reportage
        <br />
        <span className="italic text-ink-light/60">&amp; Essays</span>
      </h1>
      <div className="max-w-3xl mb-20 space-y-6">
        {reportage.intro.map((p, i) => (
          <p
            key={i}
            className="font-serif text-lg md:text-xl leading-relaxed text-ink-light"
          >
            {p}
          </p>
        ))}
      </div>
      <div className="border-t border-ink/10">
        {reportage.pieces.map((piece, i) => (
          <a
            key={i}
            href={piece.url}
            className="group block border-b border-ink/10 py-8 md:py-10 hover:bg-white/40 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
              <div className="md:col-span-3">
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light/50">
                  {piece.pub}
                </span>
                <span className="block md:hidden font-sans text-xs text-ink-light/30 mt-1">
                  {piece.year}
                </span>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl group-hover:text-dusk transition-colors leading-snug mb-2 text-ink">
                  {piece.title}
                </h3>
                <p className="font-serif text-sm md:text-base text-ink-light leading-relaxed max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                  {piece.excerpt}
                </p>
              </div>

              <div className="md:col-span-2 md:text-right hidden md:block">
                <span className="font-sans text-xs uppercase tracking-widest text-ink-light/30">
                  {piece.year}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
