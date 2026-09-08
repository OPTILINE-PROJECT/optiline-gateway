import type { ReactNode } from "react";

export function Field({
  label,
  htmlFor,
  children,
  required,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[13px] font-medium text-foreground">
        {label}
        {required && <span className="text-blue"> *</span>}
      </label>
      {children}
    </div>
  );
}

export const inputClass =
  "w-full rounded-md border border-line bg-card px-3.5 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-blue";

export function SubmitButton({ children, disabled }: { children: ReactNode; disabled?: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="rounded-md bg-navy px-6 py-3.5 text-[15px] font-semibold text-navy-foreground ring-1 ring-black/5 transition-colors hover:bg-blue disabled:opacity-60"
    >
      {children}
    </button>
  );
}

/**
 * Lead payload sent on every form submission. Keep this shape stable — it is
 * the contract for a future CRM / webhook / Laravel API integration.
 */
export type Lead = {
  date: string;
  source: string;
  language: string;
  [key: string]: string;
};

export async function submitLead(lead: Lead, endpoint: string) {
  if (!endpoint) {
    // No endpoint configured yet: keep the lead locally so nothing is lost.
    const stored = JSON.parse(window.localStorage.getItem("optiline-leads") ?? "[]");
    stored.push(lead);
    window.localStorage.setItem("optiline-leads", JSON.stringify(stored));
    return;
  }
  await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
}
