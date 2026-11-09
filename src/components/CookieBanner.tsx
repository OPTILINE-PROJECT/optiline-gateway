import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/language";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CookiePreferences } from "@/components/CookiePreferences";
import { cookieCopy } from "@/i18n/cookies";
import { COOKIE_EVENT, COOKIE_KEY, noOptionalCookies, readCookieConsent, saveCookieConsent } from "@/lib/cookie-consent";

export function CookieBanner() {
  const { lang } = useLanguage();
  const c = cookieCopy(lang);
  const [visible, setVisible] = useState(false);
  const [customise, setCustomise] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(!readCookieConsent());
    sync();
    const storage = (event: StorageEvent) => { if (event.key === COOKIE_KEY || event.key === null) sync(); };
    window.addEventListener(COOKIE_EVENT, sync);
    window.addEventListener("storage", storage);
    return () => { window.removeEventListener(COOKIE_EVENT, sync); window.removeEventListener("storage", storage); };
  }, []);

  const decide = (accepted: boolean) => {
    saveCookieConsent(accepted ? { analytics: true, marketing: true } : noOptionalCookies);
    setVisible(false);
  };

  return (
    <>
      {visible ? <section aria-label={c.title} data-no-translate className="fixed inset-x-0 bottom-0 z-50 max-h-[85dvh] overflow-y-auto border-t border-line bg-card shadow-elevate">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><h2 className="font-semibold text-foreground">{c.title}</h2><p className="mt-2 max-w-[75ch] text-sm text-muted-foreground">{c.intro} <Link to="/cookie-policy" className="text-blue underline">{c.policy}</Link></p></div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => decide(false)}>{c.reject}</Button>
            <Button variant="outline" onClick={() => decide(true)}>{c.accept}</Button>
            <Button variant="outline" onClick={() => setCustomise(true)}>{c.customise}</Button>
          </div>
        </div>
      </section> : <Button variant="outline" className="fixed bottom-4 start-4 z-40 h-auto min-h-9 max-w-[calc(100vw-8rem)] whitespace-normal bg-card text-xs" data-no-translate onClick={() => setCustomise(true)}>{c.settings}</Button>}
      <Dialog open={customise} onOpenChange={setCustomise}>
        <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto" data-no-translate>
          <DialogTitle>{c.title}</DialogTitle>
          <DialogDescription>{c.intro}</DialogDescription>
          <CookiePreferences onSaved={() => { setCustomise(false); setVisible(false); }} />
        </DialogContent>
      </Dialog>
    </>
  );
}
