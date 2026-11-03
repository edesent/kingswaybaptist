import Link from "next/link";
import { church, nav, schedule } from "@/lib/site";
import Crown from "./Crown";
import { Logo } from "./Header";
import Phone from "./Phone";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dusk-950 text-cream">
      <Crown className="pointer-events-none absolute -bottom-24 -right-10 h-[28rem] w-auto select-none" beam="#e85a22" ink="#0b1623" opacity={0.22} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Logo white className="h-14 w-auto" />
          <p className="mt-6 max-w-md text-[0.98rem] text-cream/75">{church.blurb}</p>
          <div className="mt-6 flex gap-5">
            <a href={church.facebook} target="_blank" rel="noopener" className="caps !text-[0.66rem] text-orange-soft hover:text-white">
              Facebook
            </a>
            <a href={church.instagram} target="_blank" rel="noopener" className="caps !text-[0.66rem] text-orange-soft hover:text-white">
              Instagram
            </a>
            <a href={church.youtube} target="_blank" rel="noopener" className="caps !text-[0.66rem] text-orange-soft hover:text-white">
              YouTube
            </a>
          </div>
        </div>
        <div>
          <h2 className="caps !text-[0.68rem] text-orange-soft">Services</h2>
          <ul className="mt-4 space-y-3">
            {schedule.map((s) => (
              <li key={s.name}>
                <span className="font-semibold">{s.name}</span>
                <span className="block text-sm text-cream/65">
                  {s.day}s · {s.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="caps !text-[0.68rem] text-orange-soft">Find us</h2>
          <address className="mt-4 not-italic leading-relaxed">
            <a href={church.mapsUrl} target="_blank" rel="noopener" className="hover:text-orange-glow">
              {church.street}
              <br />
              {church.city}, {church.stateCode} {church.zip}
            </a>
          </address>
          <p className="mt-4">
            <Phone className="hover:text-orange-glow" />
          </p>
          <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm text-cream/70 hover:text-white">
                {n.label}
              </Link>
            ))}
            <Link href="/give" className="text-sm text-cream/70 hover:text-white">
              Give
            </Link>
          </nav>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {church.name} · An independent Baptist church on the Kings Highway since {church.founded}
          </p>
          <p>King James Bible · Hymns · Mickleton, New Jersey</p>
        </div>
      </div>
    </footer>
  );
}
