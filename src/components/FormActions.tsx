import { Button } from "@/components/ui/button";

/** One real checkbox and submit button, pinned while the long form scrolls. */
export function FormActions({ busy, action }: { busy: boolean; action: string }) {
  return (
    <div className="form-actions fixed inset-x-3 z-40 mx-auto max-w-6xl rounded-lg border border-line bg-card p-3 shadow-elevate sm:inset-x-6">
      <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <label className="flex min-w-0 items-start gap-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 accent-primary" />
          <span className="min-w-0">I agree to be contacted by Optiline Mada regarding my request.</span>
        </label>
        <Button type="submit" disabled={busy} className="h-auto min-h-11 min-w-0 whitespace-normal px-5 py-2.5">{busy ? "Sending…" : action}</Button>
      </div>
    </div>
  );
}