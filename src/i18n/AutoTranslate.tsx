import { useEffect } from "react";
import { useLanguage } from "./language";
import fr from "./auto/fr.json";
import es from "./auto/es.json";
import de from "./auto/de.json";
import it from "./auto/it.json";
import pt from "./auto/pt.json";
import nl from "./auto/nl.json";
import ar from "./auto/ar.json";
import he from "./auto/he.json";

const dicts: Record<string, Record<string, string>> = { fr, es, de, it, pt, nl, ar, he };
const ATTRS = ["placeholder", "aria-label", "alt", "title"] as const;

// Remember the original English so switching back (or re-renders) works.
const textOrig = new WeakMap<Text, { en: string; applied: string }>();
const attrOrig = new WeakMap<Element, Record<string, { en: string; applied: string }>>();

function translateText(node: Text, dict: Record<string, string> | null) {
  const current = node.nodeValue ?? "";
  let rec = textOrig.get(node);
  if (!rec || current !== rec.applied) {
    rec = { en: current, applied: current };
    textOrig.set(node, rec);
  }
  const key = rec.en.trim();
  const tr = dict && key ? dict[key] : undefined;
  const next = tr ? rec.en.replace(key, tr) : rec.en;
  if (next !== current) node.nodeValue = next;
  rec.applied = next;
}

function translateAttrs(el: Element, dict: Record<string, string> | null) {
  for (const a of ATTRS) {
    const current = el.getAttribute(a);
    if (current == null) continue;
    const map = attrOrig.get(el) ?? {};
    let rec = map[a];
    if (!rec || current !== rec.applied) rec = { en: current, applied: current };
    const tr = dict?.[rec.en.trim()];
    const next = tr ?? rec.en;
    if (next !== current) el.setAttribute(a, next);
    rec.applied = next;
    map[a] = rec;
    attrOrig.set(el, map);
  }
}

function walk(root: Node, dict: Record<string, string> | null) {
  if (root.nodeType === Node.TEXT_NODE) return translateText(root as Text, dict);
  if (!(root instanceof Element)) return;
  if (root.closest("script,style,[data-no-translate]")) return;
  translateAttrs(root, dict);
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let n: Node | null;
  while ((n = w.nextNode())) {
    if (n.nodeType === Node.TEXT_NODE) {
      const p = n.parentElement;
      if (p && !["SCRIPT", "STYLE"].includes(p.tagName)) translateText(n as Text, dict);
    } else translateAttrs(n as Element, dict);
  }
}

/** Translates all rendered page text using the generated dictionaries. */
export function AutoTranslate() {
  const { lang } = useLanguage();

  useEffect(() => {
    const dict = lang === "en" ? null : (dicts[lang] ?? null);
    walk(document.body, dict);
    const titleRec = { en: document.title };
    const tt = dict?.[document.title];
    if (tt) document.title = tt;

    let busy = false;
    const obs = new MutationObserver((muts) => {
      if (busy) return;
      busy = true;
      for (const m of muts) {
        if (m.type === "characterData") translateText(m.target as Text, dict);
        else if (m.type === "attributes") translateAttrs(m.target as Element, dict);
        else m.addedNodes.forEach((n) => walk(n, dict));
      }
      obs.takeRecords();
      busy = false;
    });
    obs.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...ATTRS],
    });
    return () => {
      obs.disconnect();
      void titleRec;
    };
  }, [lang]);

  return null;
}
