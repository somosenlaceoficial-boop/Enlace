import { STEPS } from '@/data/constants';

export default function HowWeWork() {
  return (
    <section id="proceso" className="relative py-24 lg:py-32 bg-enlace-blue overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-enlace-orange/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-20 reveal flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-enlace-orange" />
              <span className="micro-label text-white/40">CÓMO_TRABAJAMOS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              De idea a <span className="text-enlace-orange italic">realidad</span>.
            </h2>
          </div>
          <span className="micro-label text-white/15 hidden sm:block">FLOW_01 → 04</span>
        </div>

        {/* Steps with connection line */}
        <div className="relative">
          {/* Horizontal connection line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-enlace-orange/10 via-enlace-orange/40 to-enlace-orange/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-enlace-orange/60 to-transparent animate-pulse-line" style={{ animation: 'pulseLine 3s ease-in-out infinite' }} />
          </div>

          {/* Vertical connection line (mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-enlace-orange/10 via-enlace-orange/30 to-enlace-orange/10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="reveal relative flex lg:flex-col items-start gap-4 lg:gap-0 lg:text-center pl-16 lg:pl-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Node */}
                <div className="relative flex-shrink-0 lg:mx-auto">
                  <div className="relative w-24 h-24 lg:w-24 lg:h-24 rounded-full border-2 border-enlace-blue-deep bg-enlace-blue-deep flex items-center justify-center group hover:border-enlace-orange/40 transition-colors duration-500 z-10">
                    <span className="font-display text-2xl lg:text-3xl text-enlace-orange" style={{ fontWeight: 600 }}>
                      {step.num}
                    </span>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border border-enlace-orange/20 animate-ping" style={{ animationDuration: '4s', animationDelay: `${i * 0.5}s` }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 lg:mt-6">
                  <h3 className="font-display text-xl lg:text-2xl text-white mb-2" style={{ fontWeight: 500 }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed lg:px-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
