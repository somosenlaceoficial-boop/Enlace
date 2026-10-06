import { BUSINESS_TYPES } from '@/data/constants';
import { UtensilsCrossed, Briefcase, Store, MapPin, Wrench, Sparkles } from 'lucide-react';

const ICONS = [UtensilsCrossed, Briefcase, Store, MapPin, Wrench, Sparkles];

export default function BusinessTypes() {
  return (
    <section className="relative py-24 lg:py-32 bg-enlace-blue-deep overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-16 reveal">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-enlace-orange" />
            <span className="micro-label text-white/40">PARA_QUÉN</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Construimos para <span className="text-enlace-orange italic">negocios reales</span>.
          </h2>
        </div>

        {/* Dynamic typographic layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.04] rounded-xl overflow-hidden border border-white/[0.06]">
          {BUSINESS_TYPES.map((type, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={type.label}
                className="reveal group relative bg-enlace-blue-deep p-6 lg:p-10 hover:bg-enlace-blue-light/20 transition-all duration-500 cursor-default"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Number */}
                <span className="absolute top-4 right-4 micro-label text-white/10 tabular-nums group-hover:text-enlace-orange/40 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-enlace-orange/30 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-enlace-orange transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg lg:text-2xl text-white/70 group-hover:text-white transition-colors duration-300" style={{ fontWeight: 500 }}>
                    {type.label}
                  </h3>
                </div>

                {/* Bottom connection line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-enlace-orange group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
