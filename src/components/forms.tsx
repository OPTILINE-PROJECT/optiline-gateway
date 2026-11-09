import { sendLeadEmail } from "@/lib/leads.functions";
import type { ReactNode } from "react";
import { useLanguage } from "@/i18n/language";

export function FormSubmissionError() {
  const { lang } = useLanguage();
  const messages = {
    en: "Your request could not be emailed. Please try again or contact contact@optiline-mada.com directly.",
    fr: "Votre demande n’a pas pu être envoyée par e-mail. Réessayez ou contactez directement contact@optiline-mada.com.",
    es: "No se pudo enviar su solicitud por correo. Inténtelo de nuevo o contacte directamente con contact@optiline-mada.com.",
    de: "Ihre Anfrage konnte nicht per E-Mail gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie contact@optiline-mada.com direkt.",
    it: "Non è stato possibile inviare la richiesta per e-mail. Riprova o contatta direttamente contact@optiline-mada.com.",
    pt: "Não foi possível enviar o pedido por email. Tente novamente ou contacte diretamente contact@optiline-mada.com.",
    nl: "Uw aanvraag kon niet per e-mail worden verzonden. Probeer opnieuw of neem rechtstreeks contact op via contact@optiline-mada.com.",
    ar: "تعذر إرسال طلبك بالبريد الإلكتروني. يرجى المحاولة مجددًا أو التواصل مباشرة عبر contact@optiline-mada.com.",
  };
  return <p role="alert" className="text-sm text-destructive" data-no-translate>{messages[lang]}</p>;
}

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
  let sent = false;
  try {
    const res = await sendLeadEmail({ data: lead });
    sent = res.ok;
  } catch (e) {
    console.error("Lead email failed");
  }
  if (endpoint) {
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    }).catch((e) => console.error("Lead webhook failed", e));
  }
  return sent;
}
