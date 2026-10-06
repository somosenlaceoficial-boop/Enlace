import { usePrefersReducedMotion } from '@/hooks/useProyectos';

export default function BrandStatement() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="enfoque" className="relative py-24 lg:py-40 overflow-hidden bg-enlace-blue">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-enlace-blue-deep via-enlace-blue to-enlace-blue-deep" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-enlace-orange/[0.05] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Label */}
          <div className="flex items-center gap-3 reveal">
            <span className="h-px w-8 bg-enlace-orange/40" />
            <span className="micro-label text-white/40">MANIFIESTO_ENLACE</span>
            <span className="h-px w-8 bg-enlace-orange/40" />
          </div>

          {/* Statement */}
          <div className="space-y-2 lg:space-y-4">
            <p
              className="reveal font-display text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-white/30 leading-[1.1]"
              style={{ fontWeight: 300 }}
            >
              Tu negocio es diferente.
            </p>
            <p
              className="reveal font-display text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-white/60 leading-[1.1]"
              style={{ fontWeight: 400, transitionDelay: '120ms' }}
            >
              Tu solución también debería serlo.
            </p>
            <p
              className="reveal font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-enlace-orange leading-[1.1] pt-2"
              style={{ fontWeight: 600, transitionDelay: '240ms' }}
            >
              Diseñamos soluciones a tu medida.
            </p>
          </div>

          {/* Decorative connection line */}
          <div className="reveal flex items-center gap-2 pt-6" style={{ transitionDelay: '360ms' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-enlace-orange" />
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
