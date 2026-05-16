const STATUS_STYLES = {
  active: {
    dot: "bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.15)]",
    label: "Active",
  },
  beta: {
    dot: "bg-sky-400 shadow-[0_0_0_3px_rgba(56,189,248,0.15)]",
    label: "Beta",
  },
  experimental: {
    dot: "bg-amber-400 shadow-[0_0_0_3px_rgba(251,191,36,0.15)]",
    label: "Experimental",
  },
};

export function LabModuleCard({ tag, header, description, status, targetPath }) {
  const meta = STATUS_STYLES[status] ?? STATUS_STYLES.active;

  return (
    <a
      href={targetPath}
      className={[
        "group relative flex min-h-0 min-w-0 flex-col gap-3 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 no-underline text-inherit",
        "transition-all duration-300 ease-out",
        "outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        "hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.05]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-300 before:ease-out",
        "before:bg-[radial-gradient(ellipse_115%_85%_at_50%_-5%,rgba(248,250,252,0.14),rgba(148,163,184,0.06)_42%,transparent_68%)]",
        "hover:before:opacity-100",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-300 after:ease-out",
        "after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_0_24px_-8px_rgba(226,232,240,0.12)]",
        "hover:after:opacity-100",
      ].join(" ")}
    >
      <div className="relative z-[1] flex min-w-0 shrink-0 items-center gap-2">
        <span
          className={[
            "inline-flex max-w-[min(100%,14rem)] truncate rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400",
            "transition-colors duration-300 ease-out group-hover:text-slate-300",
          ].join(" ")}
        >
          {tag}
        </span>
        <span
          className={`ml-auto h-2 w-2 shrink-0 rounded-full transition-opacity duration-300 ease-out group-hover:opacity-90 ${meta.dot}`}
          title={meta.label}
          aria-label={meta.label}
        />
      </div>

      <h2
        className={[
          "relative z-[1] min-w-0 font-['Sora',system-ui,sans-serif] text-base font-semibold tracking-tight text-slate-50",
          "transition-colors duration-300 ease-out group-hover:text-slate-100",
        ].join(" ")}
      >
        {header}
      </h2>

      <p
        className={[
          "relative z-[1] min-w-0 line-clamp-3 text-sm leading-relaxed text-slate-500",
          "transition-colors duration-300 ease-out group-hover:text-slate-400",
        ].join(" ")}
      >
        {description}
      </p>

      <div className="relative z-[1] mt-auto flex min-w-0 shrink-0 items-center justify-between gap-2 border-t border-white/[0.06] pt-3 text-xs text-slate-500">
        <span
          className={[
            "min-w-0 truncate font-mono text-[11px] text-slate-600",
            "transition-colors duration-300 ease-out group-hover:text-slate-500",
          ].join(" ")}
        >
          {targetPath}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-slate-500 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:text-slate-300"
        >
          →
        </span>
      </div>
    </a>
  );
}
