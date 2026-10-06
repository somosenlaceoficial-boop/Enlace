import { WHATSAPP_URL } from '@/data/constants';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative py-24 lg:py-40 bg-enlace-blue-deep overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-enlace-orange/[0.06] blur-3xl" />

      {/* Tech lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-enlace-orange/10 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8 reveal">
          <span className="h-px w-8 bg-enlace-orange/40" />
          <span className="micro-label text-white/40">CTA_FINAL</span>
          <span className="h-px w-8 bg-enlace-orange/40" />
        </div>

        {/* Main text */}
        <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6" style={{ fontWeight: 400 }}>
          ¿Tienes una idea?
        </h2>
        <p className="reveal text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed mb-10" style={{ transitionDelay: '100ms' }}>
          Cuéntanos qué necesitas.
          <br />
          Nosotros vemos cómo convertirlo en realidad.
        </p>

        {/* CTA button */}
        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-enlace-orange hover:bg-enlace-orange-light text-white font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-enlace-orange/25"
          >
            Quiero mi proyecto
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Tech indicator */}
        <div className="reveal flex items-center justify-center gap-4 mt-12 pt-8 border-t border-white/[0.06]" style={{ transitionDelay: '300ms' }}>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-enlace-orange animate-pulse" />
            <span className="micro-label text-white/30">RESPUESTA_INMEDIATA</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-white/15" />
          <span className="micro-label text-white/30">WHATSAPP · 56 3244 2366</span>
        </div>
      </div>
    </section>
  );
}
