import { useState, useEffect, useRef, useCallback } from 'react';
import type { Proyecto } from '@/types';
import { usePrefersReducedMotion } from '@/hooks/useProyectos';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectViewerProps {
  proyectos: Proyecto[];
  loading: boolean;
}

export default function ProjectViewer({ proyectos, loading }: ProjectViewerProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const dragStartRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const total = proyectos.length;

  const goTo = useCallback(
    (index: number, dir: number) => {
      if (total === 0) return;
      const next = ((index % total) + total) % total;
      setDirection(dir);
      setCurrent(next);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const handleDragStart = (clientX: number) => {
    if (total <= 1) return;
    dragStartRef.current = clientX;
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || dragStartRef.current === null) return;
    const delta = clientX - dragStartRef.current;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    if (Math.abs(dragOffset) > 80) {
      if (dragOffset > 0) prev();
      else next();
    }
    setIsDragging(false);
    setDragOffset(0);
    dragStartRef.current = null;
  };

  const markLoaded = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const proyecto = proyectos[current];
  const prevProyecto = total > 1 ? proyectos[(current - 1 + total) % total] : null;
  const nextProyecto = total > 1 ? proyectos[(current + 1) % total] : null;

  const dragStyle = isDragging
    ? { transform: `translateX(${dragOffset}px)`, transition: 'none' }
    : { transform: 'translateX(0)', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      {/* Window frame */}
      <div className="relative rounded-xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-white/[0.06] bg-enlace-blue-deep/40">
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-enlace-orange/50" />
          </div>
          <div className="flex items-center gap-2 ml-2 flex-1 min-w-0">
            <span className="micro-label text-white/30 hidden sm:inline">ENLACE / PROJECT_VIEWER</span>
            <span className="micro-label text-white/30 sm:hidden">ENLACE</span>
            {proyecto && (
              <span className="micro-label text-white/20 hidden md:inline truncate">
                — {proyecto.id}_{proyecto.nombre.toLowerCase().replace(/\s+/g, '_')}
              </span>
            )}
          </div>
          {proyecto && (
            <span className="micro-label text-enlace-orange/70 tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          )}
        </div>

        {/* Image area */}
        <div
          className="relative aspect-[16/10] sm:aspect-[16/9] bg-enlace-blue-deep grid-bg overflow-hidden select-none"
          style={{ cursor: total > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
        >
          {/* Scan line effect */}
          {!reduced && !loading && (
            <div
              className="absolute inset-x-0 h-24 pointer-events-none z-20 opacity-30"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(230,120,20,0.08) 50%, transparent 100%)',
                animation: 'scan 6s linear infinite',
              }}
            />
          )}

          {/* Loading state — structural skeleton, no white screen */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-enlace-orange animate-pulse" />
                  <span className="micro-label text-white/40">CARGANDO_PROYECTOS</span>
                </div>
                <div className="w-32 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-1/2 bg-enlace-orange/60 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {/* Empty state when no projects loaded */}
          {!loading && proyectos.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="micro-label text-white/30">SIN_PROYECTOS</span>
            </div>
          )}

          {/* Main image */}
          {proyecto && !loading && (
            <div className="absolute inset-0" style={dragStyle}>
              <div
                key={proyecto.id}
                className={`absolute inset-0 ${reduced ? '' : 'animate-scale-in'}`}
              >
                <img
                  src={`/${proyecto.imagen}`}
                  alt={proyecto.nombre}
                  className="w-full h-full object-cover"
                  loading={current === 0 ? 'eager' : 'lazy'}
                  fetchPriority={current === 0 ? 'high' : 'auto'}
                  onLoad={() => markLoaded(current)}
                  draggable={false}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-enlace-blue-deep/70 via-transparent to-enlace-blue-deep/20" />
              </div>

              {/* Corner coordinates */}
              <div className="absolute top-3 left-3 micro-label text-white/25 pointer-events-none">
                {proyecto.id} · {proyecto.categoria}
              </div>
              <div className="absolute top-3 right-3 micro-label text-white/25 pointer-events-none flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${loadedImages.has(current) ? 'bg-enlace-orange' : 'bg-white/20'}`} />
                {loadedImages.has(current) ? 'LOADED' : 'LOADING'}
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="micro-label text-enlace-orange">{proyecto.id}</span>
                    <span className="h-px w-6 bg-enlace-orange/40" />
                    <span className="micro-label text-white/50">{proyecto.categoria}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-tight truncate">
                    {proyecto.nombre}
                  </h3>
                  <p className="text-sm text-white/60 mt-1 clamp-2 max-w-md hidden sm:block">
                    {proyecto.descripcion}
                  </p>
                </div>
                <a
                  href={proyecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-enlace-orange hover:border-enlace-orange transition-all duration-300 flex-shrink-0"
                >
                  <span className="text-sm font-medium text-white">{proyecto.boton}</span>
                  <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          )}

          {/* Side preview cards (desktop only) */}
          {!loading && prevProyecto && nextProyecto && total > 2 && (
            <>
              {/* Previous project preview */}
              <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 pointer-events-none hidden md:block opacity-30 hover:opacity-60 transition-opacity duration-500">
                <div className="relative h-full overflow-hidden border-r border-white/5">
                  <img
                    src={`/${prevProyecto.imagen}`}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-enlace-blue-deep/60" />
                </div>
              </div>
              {/* Next project preview */}
              <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 pointer-events-none hidden md:block opacity-30 hover:opacity-60 transition-opacity duration-500">
                <div className="relative h-full overflow-hidden border-l border-white/5">
                  <img
                    src={`/${nextProyecto.imagen}`}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-enlace-blue-deep/60" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Controls bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-t border-white/[0.06] bg-enlace-blue-deep/40">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={total <= 1}
              aria-label="Proyecto anterior"
              className="group p-2 rounded-lg border border-white/10 hover:border-enlace-orange/40 hover:bg-enlace-orange/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 text-white/60 group-hover:text-enlace-orange transition-colors" />
            </button>
            <button
              onClick={next}
              disabled={total <= 1}
              aria-label="Proyecto siguiente"
              className="group p-2 rounded-lg border border-white/10 hover:border-enlace-orange/40 hover:bg-enlace-orange/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-enlace-orange transition-colors" />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5 flex-1 justify-center max-w-xs overflow-x-auto">
            {proyectos.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={`Ir a ${p.nombre}`}
                className={`h-1 rounded-full transition-all duration-500 flex-shrink-0 ${
                  i === current
                    ? 'w-8 bg-enlace-orange'
                    : 'w-1.5 bg-white/15 hover:bg-white/30'
                }`}
              />
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 micro-label text-white/30">
            <kbd className="px-1.5 py-0.5 rounded border border-white/10 text-white/40">←</kbd>
            <kbd className="px-1.5 py-0.5 rounded border border-white/10 text-white/40">→</kbd>
          </div>
        </div>
      </div>

      {/* Direction indicator (decorative) */}
      {direction !== 0 && !reduced && (
        <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-30"
          style={{ [direction > 0 ? 'right' : 'left']: '12%' }}
        >
          <ChevronRight
            className={`w-8 h-8 text-enlace-orange/60 ${direction > 0 ? '' : 'rotate-180'} animate-fade-in`}
          />
        </div>
      )}
    </div>
  );
}
