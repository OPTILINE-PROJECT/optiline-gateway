import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Optiline Mada — home">
      <span className="grid size-6 place-items-center rounded-[5px] bg-navy">
        <span className="size-2 rounded-full bg-accent animate-brandglow" />
      </span>
      <span className="text-[15px] font-extrabold tracking-tight text-foreground">
        OPTILINE<span className="font-medium text-muted-foreground"> MADA</span>
      </span>
    </Link>
  );
}
