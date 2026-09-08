import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/language";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t-4 border-accent bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="grid size-6 place-items-center rounded-[5px] bg-navy">
              <span className="size-2 rounded-full bg-accent" />
            </span>
            <span className="text-[15px] font-extrabold tracking-tight text-navy-foreground">
              OPTILINE<span className="font-medium text-navy-foreground/60"> MADA</span>
            </span>
          </div>
          <p className="text-[15px] font-semibold text-navy-foreground">{site.tagline}</p>
          <p className="mt-3 max-w-[34ch] text-[13px] text-navy-foreground/60">{t("footer.blurb")}</p>
          {(site.social.linkedin || site.social.facebook || site.social.instagram) && (
            <div className="mt-5 flex gap-4 text-[13px]">
              {site.social.linkedin && (
                  <a href={site.social.linkedin} className="text-navy-foreground/60 hover:text-accent">
                  LinkedIn
                </a>
              )}
              {site.social.facebook && (
                  <a href={site.social.facebook} className="text-navy-foreground/60 hover:text-accent">
                  Facebook
                </a>
              )}
              {site.social.instagram && (
                  <a href={site.social.instagram} className="text-navy-foreground/60 hover:text-accent">
                  Instagram
                </a>
              )}
            </div>
          )}
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-accent">
            {t("footer.solutions")}
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li>
               <Link to="/services/$slug" params={{ slug: "call-center" }} className="text-navy-foreground/70 hover:text-navy-foreground">
                Call Center
              </Link>
            </li>
            <li>
               <Link to="/services/$slug" params={{ slug: "it-development" }} className="text-navy-foreground/70 hover:text-navy-foreground">
                IT &amp; Software Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/$slug"
                params={{ slug: "administrative-outsourcing" }}
                 className="text-navy-foreground/70 hover:text-navy-foreground"
              >
                Administrative Outsourcing
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-accent">
            {t("footer.company")}
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link to="/about" className="text-navy-foreground/70 hover:text-navy-foreground">About Us</Link></li>
            <li><Link to="/careers" className="text-navy-foreground/70 hover:text-navy-foreground">Careers</Link></li>
            <li><Link to="/insights" className="text-navy-foreground/70 hover:text-navy-foreground">Insights</Link></li>
            <li><Link to="/contact" className="text-navy-foreground/70 hover:text-navy-foreground">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-accent">
            {t("footer.resources")}
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link to="/faq" className="text-navy-foreground/70 hover:text-navy-foreground">FAQ</Link></li>
            <li><Link to="/request-information" className="text-navy-foreground/70 hover:text-navy-foreground">Request Information</Link></li>
            <li><Link to="/request-a-visit" className="text-navy-foreground/70 hover:text-navy-foreground">Request a Visit</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-accent">
            {t("footer.legal")}
          </p>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link to="/privacy-policy" className="text-navy-foreground/70 hover:text-navy-foreground">Privacy</Link></li>
            <li><Link to="/cookie-policy" className="text-navy-foreground/70 hover:text-navy-foreground">Cookies</Link></li>
            <li><Link to="/terms" className="text-navy-foreground/70 hover:text-navy-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-[12.5px] text-navy-foreground/50 sm:flex-row">
          <span>© 2026 Optiline Mada. All rights reserved.</span>
          <span>Antananarivo, Madagascar</span>
        </div>
      </div>
    </footer>
  );
}
