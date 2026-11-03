/**
 * The spotlight crown from the church's logo, redrawn as vector for
 * decorative use: three translucent beams rising from a dark base, with the
 * cross at the center. The real logo (public/logo.png) is what goes in the
 * header and footer; this is for big, soft, background-sized marks.
 */
export default function Crown({
  className = "",
  beam = "#e85a22",
  ink = "#1c1917",
  opacity = 1,
  title,
}: {
  className?: string;
  beam?: string;
  ink?: string;
  opacity?: number;
  title?: string;
}) {
  return (
    <svg viewBox="0 0 220 200" className={className} aria-hidden={title ? undefined : true} role={title ? "img" : undefined} style={{ opacity }}>
      {title && <title>{title}</title>}
      <g fill={beam}>
        {/* left beam */}
        <path d="M2 2 L92 178 L128 178 Z" opacity="0.48" />
        {/* right beam */}
        <path d="M218 2 L128 178 L92 178 Z" opacity="0.48" />
        {/* center beam */}
        <path d="M110 0 L80 178 L140 178 Z" opacity="0.58" />
      </g>
      <g fill={ink}>
        {/* the base, an ellipse of shadow */}
        <ellipse cx="110" cy="182" rx="56" ry="11" />
        {/* the cross: a tall four-point star, like the logo */}
        <path d="M110 46 L116 110 L146 118 L116 126 L110 184 L104 126 L74 118 L104 110 Z" />
      </g>
    </svg>
  );
}

/** Just the three beams, with no base or cross, to put light behind a headline. */
export function Beams({ className = "", beam = "#e85a22" }: { className?: string; beam?: string }) {
  return (
    <svg viewBox="0 0 220 200" className={className} aria-hidden>
      <g fill={beam}>
        <path d="M2 2 L92 178 L128 178 Z" opacity="0.45" />
        <path d="M218 2 L128 178 L92 178 Z" opacity="0.45" />
        <path d="M110 0 L80 178 L140 178 Z" opacity="0.55" />
      </g>
    </svg>
  );
}
