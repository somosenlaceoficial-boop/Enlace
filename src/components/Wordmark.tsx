interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Wordmark({ size = 'md' }: WordmarkProps) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl sm:text-6xl lg:text-7xl',
  };

  return (
    <span className={`font-display tracking-tight leading-none ${sizes[size]}`} style={{ fontWeight: 600 }}>
      <span className="text-white">ENL</span>
      <span className="relative inline-block text-white">
        A
        <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-enlace-orange" style={{ height: '0.08em' }} />
        <span
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-enlace-orange"
          style={{ right: '-0.1em', marginTop: '-0.05em' }}
        />
      </span>
      <span className="text-white">CE</span>
    </span>
  );
}
