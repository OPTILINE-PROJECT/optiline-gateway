import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/i18n/language";
import { cookieCopy } from "@/i18n/cookies";
import { COOKIE_EVENT, noOptionalCookies, readCookieConsent, saveCookieConsent, type CookieChoices } from "@/lib/cookie-consent";

export function CookiePreferences({ onSaved }: { onSaved?: () => void }) {
  const { lang } = useLanguage();
  const c = cookieCopy(lang);
  const [choices, setChoices] = useState<CookieChoices>(noOptionalCookies);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const sync = () => setChoices(readCookieConsent() ?? noOptionalCookies);
    sync();
    window.addEventListener(COOKIE_EVENT, sync);
    return () => window.removeEventListener(COOKIE_EVENT, sync);
  }, []);
  const save = (value: CookieChoices) => { setChoices(value); saveCookieConsent(value); setSaved(true); onSaved?.(); };
  return (
    <div className="space-y-4" data-no-translate>
      <div className="divide-y divide-line">
        <div className="flex items-start justify-between gap-4 py-3">
          <div><p className="font-semibold text-foreground">{c.essential}</p><p className="text-sm text-muted-foreground">{c.essentialInfo}</p></div>
          <Switch checked disabled aria-label={c.essential} />
        </div>
        {(["analytics", "marketing"] as const).map((purpose) => (
          <div key={purpose} className="flex items-start justify-between gap-4 py-3">
            <label htmlFor={`cookies-${purpose}`} className="cursor-pointer"><span className="block font-semibold text-foreground">{c[purpose]}</span><span className="block text-sm text-muted-foreground">{c[`${purpose}Info`]}</span></label>
            <Switch id={`cookies-${purpose}`} checked={choices[purpose]} onCheckedChange={(checked) => { setChoices((previous) => ({ ...previous, [purpose]: checked })); setSaved(false); }} aria-label={c[purpose]} />
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">{c.inactive}</p>
      <p className="text-sm text-muted-foreground">{c.retention}</p>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => save(noOptionalCookies)}>{c.reject}</Button>
        <Button variant="outline" onClick={() => save({ analytics: true, marketing: true })}>{c.accept}</Button>
        <Button onClick={() => save(choices)} className="h-auto min-h-9 whitespace-normal">{c.save}</Button>
      </div>
      <p role="status" className="text-sm text-accent">{saved ? c.saved : ""}</p>
    </div>
  );
}