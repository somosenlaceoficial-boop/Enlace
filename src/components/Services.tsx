import { SERVICES } from '@/data/constants';
import { Layers, Grid2x2, Smartphone, ShoppingBag, Boxes } from 'lucide-react';

const ICONS = [Layers, Grid2x2, Smartphone, ShoppingBag, Boxes];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32 bg-enlace-blue-deep overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16 reveal">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-enlace-orange" />
              <span className="micro-label text-white/40">QUÉ_HACEMOS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Soluciones que <span className="text-enlace-orange italic">construyen</span>.
            </h2>
          </div>
          <span className="micro-label text-white/15 hidden sm:block">SYS_01 — 05</span>
        </div>

        {/* Modular grid system — NOT identical cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            const isWide = i === 4; // Last one spans full width
            const colSpan = isWide ? 'md:col-span-12' : i === 0 ? 'md:col-span-6' : i === 1 ? 'md:col-span-6' : i === 2 ? 'md:col-span-4' : i === 3 ? 'md:col-span-4' : 'md:col-span-4';

            return (
              <div
                key={service.num}
                className={`reveal group relative ${colSpan} p-6 lg:p-8 rounded-xl border border-white/[0.06] hover:border-enlace-orange/20 bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Corner markers */}
                <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/10 group-hover:border-enlace-orange/30 transition-colors" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/10 group-hover:border-enlace-orange/30 transition-colors" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/10 group-hover:border-enlace-orange/30 transition-colors" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/10 group-hover:border-enlace-orange/30 transition-colors" />

                <div className={`flex ${isWide ? 'flex-col sm:flex-row sm:items-center justify-between gap-4' : 'flex-col gap-6'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="micro-label text-enlace-orange tabular-nums">{service.num}</span>
                      <span className="h-px w-8 bg-enlace-orange/30" />
                    </div>
                    <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-enlace-orange/30 group-hover:bg-enlace-orange/5 transition-all duration-500">
                      <Icon className="w-5 h-5 text-white/40 group-hover:text-enlace-orange transition-colors duration-500" />
                    </div>
                  </div>

                  <div className={isWide ? 'flex-1 sm:px-8' : ''}>
                    <h3 className="font-display text-xl lg:text-2xl text-white leading-snug mb-2" style={{ fontWeight: 500 }}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed">{service.desc}</p>
                  </div>

                  {isWide && (
                    <div className="flex items-center gap-2">
                      <span className="micro-label text-white/20">SOLUCIÓN_TOTAL</span>
                      <span className="w-2 h-2 rounded-full bg-enlace-orange/50" />
                    </div>
                  )}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-enlace-orange/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
