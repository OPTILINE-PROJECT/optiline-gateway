import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/language";
import { site } from "@/lib/site";

export function FloatingCTA() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 end-5 z-40 flex flex-col items-end gap-2">
      {site.contact.whatsapp && (
        <a
          href={`https://wa.me/${site.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line bg-card px-4 py-2.5 text-[13px] font-semibold text-foreground shadow-elevate transition-colors hover:border-accent/50"
        >
          WhatsApp
        </a>
      )}
      <Link
        to="/request-information"
        className="rounded-full bg-navy px-5 py-3 text-[14px] font-semibold text-navy-foreground shadow-elevate transition-colors hover:bg-blue"
      >
        <span className="hidden sm:inline">{t("cta.letsTalk")}</span>
        <span className="sm:hidden">{t("cta.requestInfo")}</span>
      </Link>
    </div>
  );
}
