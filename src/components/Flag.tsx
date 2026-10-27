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

export function Flag({ code, ...props }: { code: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 42"
      aria-hidden="true"
      className="size-4 shrink-0 rounded-[3px] ring-1 ring-line"
      {...props}
    >
      {designs[code] ?? null}
    </svg>
  );
}
