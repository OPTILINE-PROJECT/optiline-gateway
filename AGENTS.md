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
