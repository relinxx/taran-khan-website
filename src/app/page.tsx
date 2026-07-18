import type { Metadata } from "next";
import Link from "next/link";
import { about } from "@/data/content";

export const metadata: Metadata = {
  title: "Taran Khan | Writer & Journalist — Author of Shadow City",
  description:
    "Taran Khan is an award-winning writer and journalist, author of Shadow City: A Woman Walks Kabul. Reportage and essays on Afghanistan, exile, and the life of cities.",
};

export default function HomePage() {
  return (
    <>
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-ink mb-8">
          Taran
          <br />
          Khan
        </h1>

        <p className="font-serif text-lg md:text-xl max-w-2xl leading-relaxed text-ink-light mb-4">
          Award-winning writer and journalist. Author of{" "}
          <em className="font-display not-italic">
            Shadow City: A Woman Walks Kabul
          </em>
          .
        </p>

        <p className="font-serif text-sm md:text-base text-ink-light/70 max-w-xl leading-relaxed">
          {about.origin}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/book"
            className="group flex items-center justify-between px-6 py-4 border border-ink/20 hover:border-dusk hover:bg-white/40 transition-all text-ink"
          >
            <span className="font-serif text-lg">Read the book</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/reportage"
            className="group flex items-center justify-between px-6 py-4 border border-ink/20 hover:border-dusk hover:bg-white/40 transition-all text-ink"
          >
            <span className="font-serif text-lg">Reportage</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/workshops"
            className="group flex items-center justify-between px-6 py-4 border border-ink/20 hover:border-dusk hover:bg-white/40 transition-all text-ink"
          >
            <span className="font-serif text-lg">Workshops</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-4xl mx-auto">
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink-light mb-6">
          {about.headline}
        </p>
      </section>
    </>
  );
}
