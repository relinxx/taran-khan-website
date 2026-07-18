"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/book", label: "Book" },
  { href: "/reportage", label: "Reportage" },
  { href: "/workshops", label: "Workshops" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex justify-between items-baseline">
        <Link href="/" className="block h-8 md:h-10 w-auto hover:opacity-80 transition-opacity">
              <img  src="/logo.svg"  
              alt="Taran Khan" className="h-full w-auto" 
              />
        </Link>

        <nav className="hidden md:flex gap-8 font-sans text-xs uppercase tracking-widest text-ink-light">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative group hover:text-dusk transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-dusk transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden font-sans text-xs uppercase tracking-widest text-ink-light"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-paper z-40 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 font-sans text-xs uppercase tracking-widest text-ink-light"
          >
            Close
          </button>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink hover:text-dusk transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}