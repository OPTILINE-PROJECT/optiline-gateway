import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/language";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="grid size-6 place-items-center rounded-[5px] bg-navy">
              <span className="size-2 rounded-full bg-accent" />
            </span>
            <span className="text-[15px] font-extrabold tracking-tight text-foreground">
              OPTILINE<span className="font-medium text-muted-foreground"> MADA</span>
            </span>
          </div>
          <p className="text-[15px] font-semibold text-foreground">{site.tagline}</p>
          <p className="mt-3 max-w-[34ch] text-[13px] text-muted-foreground">{t("footer.blurb")}</p>
          {(site.social.linkedin || site.social.facebook || site.social.instagram) && (
            <div className="mt-5 flex gap-4 text-[13px]">
              {site.social.linkedin && (
                <a href={site.social.linkedin} className="text-muted-foreground hover:text-foreground">
                  LinkedIn
                </a>
              )}
              {site.social.facebook && (
                <a href={site.social.facebook} className="text-muted-foreground hover:text-foreground">
                  Facebook
                </a>
              )}
              {site.social.instagram && (
                <a href={site.social.instagram} className="text-muted-foreground hover:text-foreground">
                  Instagram
                </a>
              )}
            </div>
          )}
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {t("footer.solutions")}
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li>
              <Link to="/services/$slug" params={{ slug: "call-center" }} className="text-foreground/80 hover:text-foreground">
                Call Center
              </Link>
            </li>
            <li>
              <Link to="/services/$slug" params={{ slug: "it-development" }} className="text-foreground/80 hover:text-foreground">
                IT &amp; Software Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/$slug"
                params={{ slug: "administrative-outsourcing" }}
                className="text-foreground/80 hover:text-foreground"
              >
                Administrative Outsourcing
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {t("footer.company")}
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About Us</Link></li>
            <li><Link to="/careers" className="text-foreground/80 hover:text-foreground">Careers</Link></li>
            <li><Link to="/insights" className="text-foreground/80 hover:text-foreground">Insights</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {t("footer.resources")}
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link to="/faq" className="text-foreground/80 hover:text-foreground">FAQ</Link></li>
            <li><Link to="/request-information" className="text-foreground/80 hover:text-foreground">Request Information</Link></li>
            <li><Link to="/request-a-visit" className="text-foreground/80 hover:text-foreground">Request a Visit</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {t("footer.legal")}
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link to="/privacy-policy" className="text-foreground/80 hover:text-foreground">Privacy</Link></li>
            <li><Link to="/cookie-policy" className="text-foreground/80 hover:text-foreground">Cookies</Link></li>
            <li><Link to="/terms" className="text-foreground/80 hover:text-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-[12.5px] text-muted-foreground sm:flex-row">
          <span>© 2026 Optiline Mada. All rights reserved.</span>
          <span>Antananarivo, Madagascar</span>
        </div>
      </div>
    </footer>
  );
}
