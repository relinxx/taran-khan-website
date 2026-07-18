import type { Metadata } from "next";
import { events } from "@/data/content";

export const metadata: Metadata = {
  title: "Events — Talks, Appearances & Podcasts",
  description:
    "Taran Khan speaks at festivals and on podcasts about Afghanistan, exile, walking, and the writing of place.",
};

export default function EventsPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink mb-12">
        Events
      </h1>
      <p className="max-w-3xl font-serif text-lg text-ink-light mb-16 leading-relaxed">
        {events.intro}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <section>
          <h2 className="font-display text-3xl text-ink mb-8 pb-4 border-b border-ink/10">
            Talks &amp; Appearances
          </h2>
          <div className="space-y-8">
            {events.talks.map((talk, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-serif text-xl md:text-2xl group-hover:text-dusk transition-colors text-ink">
                    {talk.title}
                  </h3>
                  {talk.year && (
                    <span className="font-sans text-xs uppercase tracking-widest text-ink-light/50">
                      {talk.year}
                    </span>
                  )}
                </div>
                <p className="font-serif text-sm text-ink-light mb-2">
                  {talk.venue}
                  {talk.note ? ` — ${talk.note}` : ""}
                </p>
                <a
                  href={talk.url}
                  className="font-sans text-sm uppercase tracking-wider text-dusk hover:text-ink transition-colors"
                >
                  {talk.type === "watch" ? "Watch \u2192" : "Event \u2192"}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink mb-8 pb-4 border-b border-ink/10">
            Podcasts
          </h2>
          <div className="space-y-8">
            {events.podcasts.map((pod, i) => (
              <div key={i} className="group">
                <h3 className="font-serif text-xl md:text-2xl group-hover:text-dusk transition-colors mb-1 text-ink">
                  {pod.title}
                </h3>
                <p className="font-serif text-sm text-ink-light mb-1">
                  with {pod.host}
                </p>
                <p className="font-serif text-sm text-ink-light/70 mb-3">
                  {pod.note}
                </p>
                <a
                  href={pod.url}
                  className="font-sans text-sm uppercase tracking-wider text-dusk hover:text-ink transition-colors"
                >
                  Listen &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
