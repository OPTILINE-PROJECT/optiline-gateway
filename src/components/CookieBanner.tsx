import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/language";

const KEY = "optiline-cookie-consent";

export function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (value: "accepted" | "declined") => {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 border-t border-line bg-card/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[70ch] text-[13px] leading-relaxed text-muted-foreground">
          {t("cookies.text")}{" "}
          <Link to="/cookie-policy" className="underline hover:text-foreground">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-md border border-line px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-paper"
          >
            {t("cookies.decline")}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-md bg-navy px-4 py-2 text-[13px] font-semibold text-navy-foreground transition-colors hover:bg-blue"
          >
            {t("cookies.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
