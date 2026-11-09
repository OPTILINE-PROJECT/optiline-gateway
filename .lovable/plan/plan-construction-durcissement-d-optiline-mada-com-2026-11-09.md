# Plan — Construction / durcissement d'optiline-mada.com

Brief appliqué section par section, adapté à l'existant (site 8 langues, TanStack Start, sans CMS).

## Décisions d'adaptation (écarts avec le brief, signalés)

- **Langues** : le site est déjà en 8 langues (EN/FR/ES/DE/IT/PT/NL/AR/HE) avec URL unique + sélecteur pays-langue et détection automatique — architecture confirmée précédemment. Je ne passe pas à `/en/` + `/fr/` : cela détruirait les 8 langues et le référencement existant. Conséquence : `hreflang` réciproque n'est pas possible sans URL par langue ; je le signale mais ne restructure pas.
- **CMS / MFA / plugins / comptes admin** : il n'y a pas de CMS ni de back-office — ces points sont sans objet. Les sauvegardes et le WAF sont gérés par la plateforme d'hébergement ; je les documente dans le README.
- **Rate limiting** : la plateforme n'a pas de primitive standard de limitation de débit. Je mets en place honeypot invisible + protection CSRF (déjà active) + validation serveur stricte. Une limitation ad-hoc par IP est possible mais fragile (workers sans état) — je ne l'ajoute que si vous la confirmez.
- **Aucun chiffre inventé** : les données manquantes seront en `[À COMPLÉTER : …]` visible, conformément à vos règles.

## 1. Sécurité — en-têtes HTTP
- Middleware serveur global ajoutant sur toutes les réponses : HSTS (31536000, includeSubDomains, preload), `Content-Security-Policy-Report-Only` (default-src 'self', img-src 'self' data: https:, frame-ancestors 'self', object-src 'none', base-uri 'self', form-action 'self', upgrade-insecure-requests), X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy (camera/microphone self, geolocation off), X-Frame-Options: SAMEORIGIN, Cross-Origin-Opener-Policy: same-origin.
- Route `/api/csp-report` (POST, réception des rapports, journalisée, sans données perso).
- HTTPS/TLS 1.2+ et redirection 301 : gérés par la plateforme (vérifié, documenté).
- Bascule CSP en mode strict à la fin, après vérification des rapports en preview.

## 2. Sécurité — applicatif
- Honeypot invisible sur les 4 formulaires (champ leurre rejeté côté serveur).
- CSRF : déjà actif sur les fonctions serveur ; vérification + test.
- Validation serveur stricte (zod) déjà en place : re-vérification des 4 handlers.
- Secrets : déjà côté serveur uniquement ; vérification qu'aucune clé n'est exposée.
- README : section sauvegardes/restauration, staging, durcissement (documenté comme géré par la plateforme).

## 3. Conformité données
- Politique de confidentialité : ajout de la loi malgache n° 2014-038 en plus du RGPD (finalités, base légale, durées, droits, contact, transferts hors Madagascar) — dans les 9 langues.
- Bandeau cookies : déjà conforme (refus aussi simple qu'acceptation, aucun traceur avant consentement) — vérification.
- Formulaires : mention d'usage des données + case non précochée — déjà en place, vérifié.

## 4. SEO technique
- `robots.txt` : autorisation explicite GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot.
- Canonical absolu self-référent : vérification sur toutes les pages.
- Page 404 soignée (notFoundComponent racine, 9 langues) ; page 500 déjà présente.
- CWV : dimensions explicites + lazy loading sous la ligne de flottaison sur les images, `fetchpriority="high"` sur l'image principale d'accueil, polices avec font-display: swap (déjà) — audit et corrections.

## 5. SEO — architecture et contenu
Nouvelles pages (9 langues chacune, avec blocs « réponse en bref » et définitions sous H2) :
- `/tarifs` : les 3 prix confirmés (690 € / 1 290 € / 590 €) + ce qui est inclus.
- `/securite-et-conformite` : NDA, ségrégation des postes, supervision, politique mots de passe, continuité, cadre légal malgache — avec `[À COMPLÉTER]` là où il manque des faits.
- `/infrastructure` : faits confirmés (10 Gbps, 3 000 workstations, 24/7) + `[À COMPLÉTER]` sinon.
- `/comment-ca-marche` : le processus en étapes.
- `/cas-clients` : structure type (secteur, mission, volumétrie, effectif, durée, résultat) entièrement en `[À COMPLÉTER]` — aucun cas inventé.
- Tableau comparatif Madagascar vs Inde / Philippines / Maroc / Tunisie (fuseau, francophonie, coût, stabilité) avec verdict, sur `/why-madagascar`.
- Maillage interne services ↔ industries ↔ cas clients.

## 6. Données structurées (JSON-LD)
- Accueil : `Organization` + `ProfessionalService` (nom, url, logo, téléphone, adresse Antsirabe, areaServed, sameAs — LinkedIn/Crunchbase en `[À COMPLÉTER]`).
- `FAQPage` sur /faq, `Article` sur les insights, `BreadcrumbList` + `WebSite` sur toutes les pages.

## 7. GEO — visibilité moteurs IA
- `llms.txt` enrichi : sections Services / Faits clés / Preuves, une ligne par page avec résumé court, ajout des nouvelles pages.
- Contenu extractible : tableaux, FAQ courtes, blocs réponse en bref (inclus dans la section 5).

## 8. Conversion et mesure
- Formulaire de devis en 3 étapes (besoin → volumétrie/langue → coordonnées) sur `/request-information`, avec reprise du brouillon en local et envoi final vers contact@optiline-mada.com (chemin existant conservé).
- CTA secondaire « Réserver 30 min » avec lien calendrier `[À COMPLÉTER]`.
- `/api/health` (GET, statut JSON).
- Analytics sans cookies : emplacement prêt dans le module de consentement (catégorie Mesure d'audience) pour brancher Plausible/Umami — script inséré seulement après consentement.
- README : section TODO hors-code (Google Business Profile, LinkedIn, Crunchbase, annuaires, SPF/DKIM/DMARC, presse).

## Vérifications
- Tests vitest existants + nouveaux (honeypot, en-têtes, santé).
- Parcours Playwright : formulaire 3 étapes, nouvelles pages FR/EN/HE, mobile 375 px, absence d'overflow, CSP sans violation bloquante.
- Build OK avant de terminer.
