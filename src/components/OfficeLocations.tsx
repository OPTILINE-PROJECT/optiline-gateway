import { useState } from "react";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language";
import { offices } from "@/lib/site";
import map from "@/lib/office-map.json";

const copy = {
  en: { title: "Our international offices", map: "Office locations", open: "View location", country: "Country" },
  fr: { title: "Nos bureaux internationaux", map: "Localisation des bureaux", open: "Voir la localisation", country: "Pays" },
  es: { title: "Nuestras oficinas internacionales", map: "Ubicación de las oficinas", open: "Ver ubicación", country: "País" },
  de: { title: "Unsere internationalen Büros", map: "Bürostandorte", open: "Standort ansehen", country: "Land" },
  it: { title: "I nostri uffici internazionali", map: "Sedi degli uffici", open: "Visualizza posizione", country: "Paese" },
  pt: { title: "Os nossos escritórios internacionais", map: "Localização dos escritórios", open: "Ver localização", country: "País" },
  nl: { title: "Onze internationale kantoren", map: "Kantoorlocaties", open: "Bekijk locatie", country: "Land" },
  ar: { title: "مكاتبنا الدولية", map: "مواقع المكاتب", open: "عرض الموقع", country: "البلد" },
};
const pins = ["office-pin-antsirabe", "office-pin-silicon", "office-pin-miami", "office-pin-dubai", "office-pin-singapore", "office-pin-london", "office-pin-hongkong"];
const countries = {
  en: ["Madagascar", "United States", "United States", "United Arab Emirates", "Singapore", "United Kingdom", "Hong Kong SAR"],
  fr: ["Madagascar", "États-Unis", "États-Unis", "Émirats arabes unis", "Singapour", "Royaume-Uni", "Hong Kong"],
  es: ["Madagascar", "Estados Unidos", "Estados Unidos", "Emiratos Árabes Unidos", "Singapur", "Reino Unido", "Hong Kong"],
  de: ["Madagaskar", "Vereinigte Staaten", "Vereinigte Staaten", "Vereinigte Arabische Emirate", "Singapur", "Vereinigtes Königreich", "Hongkong"],
  it: ["Madagascar", "Stati Uniti", "Stati Uniti", "Emirati Arabi Uniti", "Singapore", "Regno Unito", "Hong Kong"],
  pt: ["Madagáscar", "Estados Unidos", "Estados Unidos", "Emirados Árabes Unidos", "Singapura", "Reino Unido", "Hong Kong"],
  nl: ["Madagaskar", "Verenigde Staten", "Verenigde Staten", "Verenigde Arabische Emiraten", "Singapore", "Verenigd Koninkrijk", "Hongkong"],
  ar: ["مدغشقر", "الولايات المتحدة", "الولايات المتحدة", "الإمارات العربية المتحدة", "سنغافورة", "المملكة المتحدة", "هونغ كونغ"],
};

export function OfficeLocations() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<string>(offices[0].id);
  const active = offices.find((office) => office.id === selected) ?? offices[0];
  const c = copy[lang];
  const country = (index: number) => countries[lang][index];
  const locationUrl = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section aria-labelledby="offices-title" className="border-t border-line py-16 md:py-20" data-no-translate>
      <div className="mb-8 flex items-center gap-3">
        <Globe2 className="size-7 shrink-0 text-accent" />
        <h2 id="offices-title" className="text-2xl font-bold text-foreground md:text-3xl">{c.title}</h2>
      </div>
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div role="group" aria-label={c.map} dir="ltr" className="relative aspect-[1000/440] w-full">
          <svg viewBox="0 0 1000 440" aria-hidden="true" className="absolute inset-0 size-full">
            <path d={map.land} className="fill-paper stroke-line" strokeWidth="0.7" />
            {map.routes.map((route, index) => <path key={index} d={route} className="fill-none stroke-accent/50" strokeWidth="1.5" strokeDasharray="4 5" />)}
          </svg>
          {offices.map((office, index) => (
            <Button key={office.id} variant="ghost" size="icon" aria-label={office.city} aria-pressed={selected === office.id}
              onClick={() => setSelected(office.id)} title={office.city}
              className={`absolute size-9 -translate-x-1/2 -translate-y-1/2 rounded-full ${pins[index]} ${selected === office.id ? "bg-blue/15 text-blue" : "text-accent"}`}>
              <span className={`size-2.5 rounded-full ring-4 ring-background ${selected === office.id ? "bg-blue" : "bg-accent"}`} />
            </Button>
          ))}
        </div>
        <div aria-live="polite" className="min-h-44 border-s-2 border-accent ps-5">
          <p className="text-xs font-medium uppercase text-muted-foreground">{country(offices.indexOf(active))}</p>
          <h3 className="mt-2 text-xl font-bold text-foreground">{active.city}</h3>
          <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">{active.address}</address>
          <Button asChild variant="link" className="mt-3 h-auto whitespace-normal px-0 text-start">
            <a href={locationUrl(active.address)} target="_blank" rel="noopener noreferrer">{c.open}<ArrowUpRight /></a>
          </Button>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {offices.map((office, index) => (
          <article key={office.id} className={`flex flex-col rounded-lg border bg-card p-5 ${selected === office.id ? "border-blue" : "border-line"}`}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-foreground">{office.city}</h3>
              <Button size="icon" variant="ghost" title={`${c.map} — ${office.city}`} aria-label={`${c.map} — ${office.city}`} aria-pressed={selected === office.id} onClick={() => setSelected(office.id)} className="shrink-0 text-blue"><MapPin /></Button>
            </div>
            <p className="text-xs text-muted-foreground">{country(index)}</p>
            <address className="my-4 text-sm not-italic leading-relaxed text-foreground">{office.address}</address>
            <Button asChild variant="link" className="mt-auto h-auto justify-start whitespace-normal px-0 text-start"><a href={locationUrl(office.address)} target="_blank" rel="noopener noreferrer">{c.open}<ArrowUpRight /></a></Button>
          </article>
        ))}
      </div>
    </section>
  );
}