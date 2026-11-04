import Image from "next/image";
import { Beams } from "./Crown";

/**
 * A photographic masthead for interior pages: full-bleed photo, a wash on
 * the copy side, the kicker in caps and the title in the display face.
 */
export default function PageHead({
  kicker,
  title,
  intro,
  photo,
  alt,
  position = "center",
  children,
}: {
  kicker: string;
  title: string;
  intro?: string;
  photo: string;
  alt: string;
  position?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-dusk-900 text-white">
      <Image src={photo} alt={alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 bg-gradient-to-t from-dusk-950/90 via-dusk-950/45 to-dusk-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-dusk-950/70 via-transparent to-transparent" />
      <Beams className="pointer-events-none absolute -top-24 right-[4%] h-[120%] w-auto opacity-30 mix-blend-screen" beam="#f6a37a" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-40 sm:px-6 lg:px-8">
        <p className="caps on-photo text-orange-soft">{kicker}</p>
        <h1 className="display on-photo mt-3 max-w-4xl text-[clamp(2.9rem,7vw,6.2rem)]">{title}</h1>
        {intro && <p className="lede on-photo mt-5 max-w-2xl text-white/90">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

/** A plain cream masthead for pages that are mostly reading. */
export function PlainHead({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-cream pb-16 pt-40 sm:pt-44 lg:pb-20 lg:pt-52">
      <Beams className="pointer-events-none absolute -top-10 right-[2%] h-[150%] w-auto opacity-[0.16]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="caps text-orange">{kicker}</p>
        <h1 className="display mt-3 max-w-4xl text-[clamp(2.8rem,6.5vw,5.6rem)] text-ink">{title}</h1>
        {intro && <p className="lede mt-5 max-w-2xl text-ink-soft">{intro}</p>}
      </div>
    </section>
  );
}
