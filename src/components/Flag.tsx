import type { SVGProps } from "react";

const designs: Record<string, React.ReactNode> = {
  MG: (
    <>
      <rect width="60" height="42" fill="#FFFFFF" />
      <rect x="20" width="40" height="21" fill="#FC3D32" />
      <rect x="20" y="21" width="40" height="21" fill="#007A5E" />
    </>
  ),
  US: (
    <>
      <rect width="60" height="42" fill="#FFFFFF" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 42) / 13} width="60" height={42 / 13} fill="#B22234" />
      ))}
      <rect width="24" height={(42 * 7) / 13} fill="#3C3B6E" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <circle key={`${row}-${col}`} cx={5 + col * 7} cy={5 + row * 6} r="1" fill="#FFFFFF" />
        )),
      )}
    </>
  ),
  AE: (
    <>
      <rect width="60" height="42" fill="#FFFFFF" />
      <rect width="60" height="14" fill="#00843D" />
      <rect y="28" width="60" height="14" fill="#000000" />
      <rect width="18" height="42" fill="#C8102E" />
    </>
  ),
  GB: (
    <>
      <rect width="60" height="42" fill="#012169" />
      <path d="M0 0 L60 42 M60 0 L0 42" stroke="#FFFFFF" strokeWidth="9" />
      <path d="M0 0 L60 42 M60 0 L0 42" stroke="#C8102E" strokeWidth="3.5" />
      <path d="M30 0 V42 M0 21 H60" stroke="#FFFFFF" strokeWidth="13" />
      <path d="M30 0 V42 M0 21 H60" stroke="#C8102E" strokeWidth="7" />
    </>
  ),
  SG: (
    <>
      <rect width="60" height="42" fill="#FFFFFF" />
      <rect width="60" height="21" fill="#EF3340" />
      <circle cx="15" cy="10.5" r="6.5" fill="#FFFFFF" />
      <circle cx="17.5" cy="10.5" r="5" fill="#EF3340" />
      {[
        [26, 6],
        [30, 4],
        [34, 6],
        [34, 11],
        [30, 13],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.2" fill="#FFFFFF" />
      ))}
    </>
  ),
  FR: (
    <>
      <rect width="20" height="42" fill="#0055A4" />
      <rect x="20" width="20" height="42" fill="#FFFFFF" />
      <rect x="40" width="20" height="42" fill="#EF4135" />
    </>
  ),
  ES: (
    <>
      <rect width="60" height="42" fill="#AA151B" />
      <rect y="10.5" width="60" height="21" fill="#F1BF00" />
    </>
  ),
  DE: (
    <>
      <rect width="60" height="14" fill="#000000" />
      <rect y="14" width="60" height="14" fill="#DD0000" />
      <rect y="28" width="60" height="14" fill="#FFCE00" />
    </>
  ),
  IT: (
    <>
      <rect width="20" height="42" fill="#009246" />
      <rect x="20" width="20" height="42" fill="#FFFFFF" />
      <rect x="40" width="20" height="42" fill="#CE2B37" />
    </>
  ),
  PT: (
    <>
      <rect width="24" height="42" fill="#046A38" />
      <rect x="24" width="36" height="42" fill="#DA291C" />
      <circle cx="24" cy="21" r="7" fill="#FFE900" />
      <circle cx="24" cy="21" r="4" fill="#FFFFFF" />
      <circle cx="24" cy="21" r="2" fill="#DA291C" />
    </>
  ),
  NL: (
    <>
      <rect width="60" height="14" fill="#AE1C28" />
      <rect y="14" width="60" height="14" fill="#FFFFFF" />
      <rect y="28" width="60" height="14" fill="#21468B" />
    </>
  ),
  SA: (
    <>
      <rect width="60" height="42" fill="#006C35" />
      <rect x="8" y="12" width="40" height="2.6" rx="1.3" fill="#FFFFFF" />
      <rect x="10" y="17" width="34" height="2.6" rx="1.3" fill="#FFFFFF" />
      <rect x="8" y="22" width="40" height="2.6" rx="1.3" fill="#FFFFFF" />
      <rect x="10" y="27" width="34" height="2.6" rx="1.3" fill="#FFFFFF" />
      <rect x="6" y="31" width="46" height="2.2" rx="1.1" fill="#FFFFFF" />
    </>
  ),
  HK: (
    <>
      <rect width="60" height="42" fill="#DE2910" />
      <g transform="translate(30,21)" fill="#FFFFFF">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="0" cy="-7" rx="2.6" ry="5.2" transform={`rotate(${deg})`} />
        ))}
      </g>
    </>
  ),
};

export function Flag({ code, ...props }: { code: string | undefined } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 42"
      aria-hidden="true"
      className="size-4 shrink-0 rounded-[3px]"
      {...props}
    >
      {designs[code ?? ""] ?? null}
    </svg>
  );
}
