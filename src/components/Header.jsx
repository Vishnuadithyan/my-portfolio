import { useState } from 'react';
import { Menu, Terminal, X } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export default function Header({ name }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const firstName = name.split(' ')[0];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 rounded-md text-lg font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
        >
          <Terminal className="h-5 w-5 text-indigo-400" aria-hidden="true" />
          <span>
            {firstName}
            <span className="text-indigo-400">.dev</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden gap-8 text-sm font-medium text-slate-400 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-slate-800/80 bg-slate-950/95 px-6 py-4 sm:hidden"
        >
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-md px-2 py-1.5 transition hover:bg-slate-900 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
