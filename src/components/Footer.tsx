import { NAV_LINKS, WHATSAPP_URL, EMAIL, EMAIL_LINK, PHONE_DISPLAY } from '@/data/constants';
import { Wordmark } from '@/components/Wordmark';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-enlace-blue-deep border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Wordmark size="lg" />
            <p className="font-display text-lg text-enlace-orange/80 italic" style={{ fontWeight: 400 }}>
              Conecta lo que importa.
            </p>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed mt-2">
              Digital product studio. Diseñamos y construimos productos digitales para negocios.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="micro-label text-white/30 mb-2">NAVEGACIÓN</span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-enlace-orange transition-colors duration-300 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="micro-label text-white/30 mb-2">CONTACTO</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-enlace-orange/50" />
              <span>WhatsApp · {PHONE_DISPLAY}</span>
            </a>
            <a
              href={EMAIL_LINK}
              className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-enlace-orange/50" />
              <span>{EMAIL}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-lg bg-enlace-orange text-white text-sm font-medium w-fit hover:bg-enlace-orange-light transition-all duration-300"
            >
              Quiero mi proyecto
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/[0.04]">
          <span className="micro-label text-white/25">
            © {year} ENLACE · CONECTA LO QUE IMPORTA
          </span>
          <div className="flex items-center gap-4">
            <span className="micro-label text-white/20">MX</span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="micro-label text-white/20">DIGITAL_PRODUCT_STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
