import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_URL } from '@/data/constants';
import { Wordmark } from '@/components/Wordmark';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-enlace-blue-deep/85 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#top" className="flex items-center" aria-label="ENLACE">
              <Wordmark size="md" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-enlace-orange transition-all duration-300 group-hover:w-3/4" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center px-5 py-2.5 rounded-lg bg-enlace-orange hover:bg-enlace-orange-light text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-enlace-orange/20"
              >
                Quiero mi proyecto
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg border border-white/10 text-white"
                aria-label="Abrir menú"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-enlace-blue-deep/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`relative h-full flex flex-col transition-transform duration-500 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-white/[0.06]">
            <Wordmark size="md" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg border border-white/10 text-white"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col px-5 py-8 gap-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between py-4 border-b border-white/[0.04] text-xl font-display text-white/80 hover:text-white transition-colors"
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              >
                <span>{link.label}</span>
                <span className="micro-label text-enlace-orange/40 group-hover:text-enlace-orange transition-colors">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="p-5 pb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full px-5 py-4 rounded-xl bg-enlace-orange text-white font-medium text-lg"
            >
              Quiero mi proyecto
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
