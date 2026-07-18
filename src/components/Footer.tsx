import Link from "next/link";
import { siteMeta } from "@/data/content";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 py-12 border-t border-ink/10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="font-display text-lg text-ink">Taran Khan</span>
          <span className="block text-sm text-ink-light font-sans">Writer & Journalist</span>
        </div>

        <Link
          href="https://instagram.com/_tarankhan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm uppercase tracking-wider text-ink-light hover:text-dusk transition-colors"
        >
          Instagram {siteMeta.instagram}
        </Link>

        <span className="font-sans text-xs text-ink-light/50">
          &copy; {new Date().getFullYear()} Taran Khan. All rights reserved.
        </span>
      </div>
    </footer>
  );
}