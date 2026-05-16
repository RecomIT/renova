/**
 * Minimal app shell: top bar, optional eyebrow, main region.
 * Styling: slate / thin borders / ease-in-out (labs-style).
 */
export function ShellLayout({ eyebrow, title, subtitle, children, footer }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-slate-950/90 backdrop-blur-md transition-colors duration-300 ease-in-out">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-slate-100 no-underline transition-opacity duration-300 ease-in-out hover:opacity-90"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-xs font-bold text-slate-200">
              RL
            </span>
            <span className="hidden sm:inline text-sm">Renova Labs</span>
          </a>
          <span className="h-4 w-px bg-white/10" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Learning hub
          </span>
          <div className="flex-1" />
          <nav aria-label="Shell actions" className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-all duration-300 ease-in-out hover:border-white/20 hover:bg-white/[0.06]"
            >
              Search
            </button>
            <a
              href="https://www.renovalabs.ai/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 no-underline transition-all duration-300 ease-in-out hover:border-emerald-400/50 hover:bg-emerald-500/15"
            >
              Book intro
            </a>
          </nav>
        </div>
      </header>

      <div className="relative flex-1">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6">
          {(eyebrow || title || subtitle) && (
            <div className="mb-10 max-w-2xl">
              {eyebrow && (
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h1 className="font-['Sora',system-ui,sans-serif] text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{subtitle}</p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>

      {footer && (
        <footer className="border-t border-white/[0.08] bg-slate-950/80 py-6 text-center text-xs text-slate-500">
          {footer}
        </footer>
      )}
    </div>
  );
}
