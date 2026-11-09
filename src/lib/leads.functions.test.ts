import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendTemplateEmail } = vi.hoisted(() => ({ sendTemplateEmail: vi.fn() }));
vi.mock("./email-templates/send-email", () => ({ sendTemplateEmail }));
vi.mock("@tanstack/react-start", () => ({
  createServerFn: () => ({ inputValidator: () => ({ handler: (handler: unknown) => handler }) }),
}));
import { sendLeadEmail } from "./leads.functions";

const invoke = sendLeadEmail as unknown as (input: { data: Record<string, string> }) => Promise<{ ok: boolean }>;
describe("form email delivery", () => {
  beforeEach(() => vi.clearAllMocks());
  for (const source of ["contact", "request-information", "request-a-visit", "careers"]) {
    it(`${source} sends to contact@optiline-mada.com`, async () => {
      sendTemplateEmail.mockResolvedValue({ sent: true });
      expect(await invoke({ data: { source, email: "visitor@example.com", date: "2026-11-09T12:04:00Z" } })).toEqual({ ok: true });
      expect(sendTemplateEmail).toHaveBeenCalledWith("lead-notification", "contact@optiline-mada.com", expect.objectContaining({ replyTo: "visitor@example.com", templateData: expect.objectContaining({ source }) }));
    });
  }
  it("does not claim an email was sent when the recipient is suppressed", async () => {
    sendTemplateEmail.mockResolvedValue({ sent: false, reason: "recipient_suppressed" });
    expect(await invoke({ data: { source: "contact" } })).toEqual({ ok: false });
  });
  it("silently drops bot submissions that fill the honeypot field", async () => {
    expect(await invoke({ data: { source: "contact", website: "https://spam.example" } })).toEqual({ ok: true });
    expect(sendTemplateEmail).not.toHaveBeenCalled();
  });
});