<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep confirmed office addresses in the central site configuration and the imported Careline map projection separate from the Contact view, so location selection and postal data stay consistent.
- Keep browser-local cookie choices in the shared consent module and require purpose-specific valid consent before any optional tracker loads; this preserves opt-in and withdrawal across pages.
- Reuse CookiePreferences in the first-visit dialog and cookie policy page so visitors edit the same consent choices everywhere.
- All lead forms share the fixed-recipient notification path and show success only after a confirmed send; failure keeps the form available instead of hiding the request in browser storage.
- Run lead server-handler unit tests with vitest.leads.config.ts to avoid the framework RPC transform while testing notification outcomes.
- Keep country-language choices and static flag drawings separate from LanguageSwitcher; only expose supported translations and persist the selected pair as a browser-local presentation preference.
- Keep text direction in the shared language-direction helper so the document and native language labels consistently support every RTL language.
- Use shared FormActions for the single consent checkbox and submit control on each lead form; offset it by the measured cookie banner to keep both controls unobscured.
- Resolve automatic country-language defaults from coarse request country metadata and browser languages; explicit browser-local selections always take precedence, with no external geolocation service or retained IP.
