import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.record(z.string().max(60), z.string().max(5000)).refine((o) => Object.keys(o).length <= 40);

export const sendLeadEmail = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const { sendTemplateEmail } = await import("./email-templates/send-email");
    const email = data["email"];
    const replyTo = email && z.string().email().safeParse(email).success ? email : undefined;
    const id = `${data["date"] ?? ""}-${data["source"] ?? ""}-${email ?? ""}`;
    try {
      const result = await sendTemplateEmail("lead-notification", "contact@optiline-mada.com", {
      templateData: { source: data["source"], fields: data },
      idempotencyKey: `lead-notification-${id}`,
      ...(replyTo ? { replyTo } : {}),
    });
      return { ok: result.sent };
    } catch (e) {
      // e.g. domain_not_verified while DNS is pending — report, don't crash.
      console.error("Lead email not sent:", e instanceof Error ? e.message : e);
      return { ok: false };
    }
  });
