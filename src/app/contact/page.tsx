import type { Metadata } from "next";
import { contact, siteMeta } from "@/data/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Taran Khan for commissions, festival invitations, and workshop enquiries.",
};

export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink mb-16">
        Contact
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <section>
          <div className="mb-12">
            <h2 className="font-sans text-xs uppercase tracking-widest text-dusk mb-4">
              General Enquiries
            </h2>
            <p className="font-serif text-2xl md:text-3xl text-ink mb-2">
              For commissions, workshop enquiries, and all other correspondence:
            </p>
            <a
              href={`mailto:${siteMeta.email}`}
              className="text-lg text-ink-light hover:text-dusk transition-colors underline underline-offset-8 decoration-1 font-serif"
            >
              {siteMeta.email}
            </a>
          </div>

          <div>
            <h2 className="font-sans text-xs uppercase tracking-widest text-dusk mb-4">
              Literary Representation
            </h2>
            <p className="font-serif text-xl text-ink mb-1">
              {contact.agent.name}
            </p>
            <p className="text-sm text-ink-light mb-4 font-sans">
              {contact.agent.company}
            </p>
            <a
              href={`mailto:${contact.agent.email}`}
              className="text-ink-light hover:text-dusk transition-colors underline underline-offset-4 decoration-1 font-serif"
            >
              {contact.agent.email}
            </a>
          </div>
        </section>

        <section>
          <h2 className="font-sans text-xs uppercase tracking-widest text-dusk mb-6">
            Stay in touch
          </h2>
          <p className="text-ink-light/80 font-serif mb-6">
            {contact.newsletter.text}
          </p>

          <form
            className="space-y-4"
            action={contact.newsletter.action}
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full px-0 py-3 bg-transparent border-b border-ink/20 focus:border-dusk outline-none text-lg placeholder:text-ink-light/30 font-serif text-ink"
            />
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-ink text-paper hover:bg-dusk transition-colors uppercase tracking-widest text-sm font-sans"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-16 pt-8 border-t border-ink/10">
            <Link
              href="https://instagram.com/_tarankhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-ink-light hover:text-dusk transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-serif">Follow on Instagram — @_tarankhan</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
