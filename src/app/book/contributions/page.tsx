import type { Metadata } from "next";
import { book } from "@/data/content";

export const metadata: Metadata = {
  title: "Other Book Contributions",
  description: "Books and essays contributed to by Taran Khan.",
};

export default function BookContributionsPage() {
  return (
    <article className="px-6 md:px-12 lg:px-20 py-16 max-w-4xl mx-auto">
      <h1 className="font-display text-5xl md:text-6xl text-ink mb-12">
        Other book contributions
      </h1>
      <div className="space-y-10">
        {book.contributions.map((contribution) => (
          <section key={contribution.title} className="border-b border-ink/10 pb-8">
            <h2 className="font-serif text-2xl text-ink">{contribution.title}</h2>
            <p className="text-sm text-ink-light mt-2">{contribution.meta}</p>
            <p className="font-serif text-ink-light mt-3 leading-relaxed">{contribution.note}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
