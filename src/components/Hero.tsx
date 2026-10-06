import type { Proyecto } from '@/types';
import ProjectViewer from '@/components/ProjectViewer';
import { WHATSAPP_URL } from '@/data/constants';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  proyectos: Proyecto[];
  loading: boolean;
}

export default function Hero({ proyectos, loading }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-enlace-blue" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-enlace-blue-deep/40 via-transparent to-enlace-blue-deep/60" />
      <div className="absolute inset-0 bg-radial-blue" />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-enlace-orange/[0.04] blur-3xl animate-float"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-enlace-blue-light/[0.06] blur-3xl animate-float"
        style={{ animationDelay: '3s' }}
      />

      {/* Tech grid lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-enlace-orange/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">
          {/* Left: text content (title + description first on mobile, left on desktop) */}
          <div className="flex flex-col gap-6 lg:gap-7 order-1 lg:order-1">
            {/* Status badge */}
            <div className="flex items-center gap-3 animate-fade-down" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-enlace-orange opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-enlace-orange" />
                </span>
                <span className="micro-label text-white/50">DIGITAL_PRODUCT_STUDIO</span>
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white animate-fade-up text-balance"
              style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 400 }}
            >
              Conectamos negocios
              <br />
              con{' '}
              <span className="relative inline-block">
                <span className="text-enlace-orange italic">tecnología</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-enlace-orange/40"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 6 Q 50 2, 100 4 T 198 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>

            {/* Subtext */}
            <p
              className="text-lg text-white/50 max-w-md leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              Diseñamos y construimos productos digitales reales para negocios que quieren crecer.
            </p>

            {/* Desktop CTAs — both buttons, hidden on mobile */}
            <div
              className="hidden lg:flex flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-enlace-orange hover:bg-enlace-orange-light text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-enlace-orange/20"
              >
                Quiero mi proyecto
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#proyectos"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white font-medium transition-all duration-300"
              >
                Ver proyectos
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

            {/* Tech footer line — desktop only */}
            <div
              className="hidden lg:flex items-center gap-4 pt-2 animate-fade-up"
              style={{ animationDelay: '0.65s', opacity: 0 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="micro-label text-white/20">MX · DIGITAL · WEB · APPS</span>
            </div>
          </div>

          {/* Right: Project Viewer (second on mobile, right on desktop) */}
          <div
            className="order-2 lg:order-2 animate-scale-in"
            style={{ animationDelay: '0.3s', opacity: 0 }}
            id="proyectos"
          >
            {/* Section label above viewer */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-enlace-orange animate-pulse" />
                <span className="micro-label text-white/40">PROYECTOS_REALES</span>
              </div>
              <span className="micro-label text-white/20 hidden sm:inline">ARRASTRA · DESLIZA · EXPLORA</span>
            </div>

            <ProjectViewer proyectos={proyectos} loading={loading} />
          </div>

          {/* Mobile-only CTA after Project Viewer */}
          <div className="flex flex-col gap-4 order-3 lg:hidden animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-enlace-orange hover:bg-enlace-orange-light text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-enlace-orange/20"
            >
              Quiero mi proyecto
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-4 pt-1">
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="micro-label text-white/20">MX · DIGITAL · WEB · APPS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="micro-label text-white/20">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
