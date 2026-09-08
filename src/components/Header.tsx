import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/language";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/solutions", label: t("nav.solutions") },
    { to: "/why-madagascar", label: t("nav.whyMadagascar") },
    { to: "/about", label: t("nav.about") },
    { to: "/industries", label: t("nav.industries") },
    { to: "/insights", label: t("nav.insights") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-7 text-[13.5px] text-muted-foreground lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/request-information"
            className="hidden rounded-md bg-navy px-4 py-2.5 text-[13.5px] font-semibold text-navy-foreground ring-1 ring-black/5 transition-colors hover:bg-blue sm:inline-flex"
          >
            {t("cta.buildTeam")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex size-9 flex-col items-center justify-center gap-1 rounded-md border border-line lg:hidden"
          >
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-[15px] text-foreground transition-colors hover:bg-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/request-information"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-navy px-4 py-3 text-center text-[14px] font-semibold text-navy-foreground"
              >
                {t("cta.requestInfo")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
