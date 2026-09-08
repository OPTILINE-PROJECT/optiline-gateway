import { Link } from "@tanstack/react-router";

export function LogoMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <svg
      viewBox="0 0 44 44"
      aria-hidden="true"
      className="size-full"
      fill="none"
    >
      <rect width="44" height="44" rx="10" className={inverted ? "fill-background" : "fill-navy"} />
      <path
        d="M13.5 12.5h8.25c5.1 0 8.75 3.72 8.75 9.5s-3.65 9.5-8.75 9.5H13.5v-19Z"
        className={inverted ? "stroke-navy" : "stroke-navy-foreground"}
        strokeWidth="3.25"
      />
      <path
        d="m24.5 27.5 4.25-7 4.25 7 4.25-7"
        className="stroke-accent"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35.5" cy="12.5" r="2.5" className="fill-coral" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Optiline Mada — home">
      <span className="size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
        <LogoMark inverted={inverted} />
      </span>
      <span className={`text-[15px] font-extrabold ${inverted ? "text-navy-foreground" : "text-foreground"}`}>
        OPTILINE<span className={inverted ? "font-medium text-navy-foreground/60" : "font-medium text-muted-foreground"}> MADA</span>
      </span>
    </Link>
  );
}
