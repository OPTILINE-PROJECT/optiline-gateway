/** Direction is shared by the document and native language labels. */
export function languageDirection(code: string): "ltr" | "rtl" {
  return code === "ar" || code === "he" ? "rtl" : "ltr";
}