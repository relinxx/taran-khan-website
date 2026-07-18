import type { Metadata } from "next";
import { contact, workshops } from "@/data/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops & Teaching",
  description:
    "Taran Khan teaches creative nonfiction with Arvon, Faber Academy, and mentors with South Asia Speaks.",
};

export default function WorkshopsPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink mb-12">
        Workshops
        <br />
        <span className="italic text-ink-light/60">&amp; Teaching</span>
      </h1>
      <div className="max-w-3xl mb-16 space-y-6 text-ink-light font-serif text-lg leading-relaxed">
        <p>{workshops.philosophy}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <section>
          <h2 className="font-display text-3xl text-ink mb-8">Workshops</h2>

          <div className="mb-10">
            <h3 className="font-sans text-xs uppercase tracking-widest text-dusk mb-4">
              Upcoming
            </h3>
            <div className="bg-white/30 border border-ink/10 p-8">
              <p className="text-ink-light/80 font-serif mb-4">
                No open workshops right now — to hear about new ones first, join
                the mailing list below.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-2"
                action={contact.newsletter.action}
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-transparent border border-ink/20 focus:border-dusk outline-none text-sm font-sans text-ink"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-ink text-paper text-sm uppercase tracking-wider font-sans hover:bg-dusk transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-dusk mb-4">
              Recent
            </h3>
            <div className="space-y-4">
              {workshops.recent.map((course, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline border-b border-ink/10 pb-4"
                >
                  <div>
                    <p className="font-serif text-lg text-ink">{course.title}</p>
                    <p className="text-sm text-ink-light">{course.venue}</p>
                  </div>
                  {course.year && (
                    <span className="font-sans text-xs text-ink-light/40">
                      {course.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink mb-8">Work With Me</h2>

          <div className="mb-10">
            <h3 className="font-sans text-xs uppercase tracking-widest text-dusk mb-4">
              Manuscript Consultation
            </h3>
            <p className="text-ink-light/80 font-serif mb-6 leading-relaxed">
              {workshops.consultation}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-ink/20 hover:border-dusk hover:text-dusk transition-colors text-ink font-sans"
            >
              Get in touch &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
