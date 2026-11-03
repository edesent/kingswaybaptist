"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { church, nav } from "@/lib/site";

/** Their logo: the Garamond wordmark with the orange spotlight crown in place of the W. */
export function Logo({ white = false, className = "" }: { white?: boolean; className?: string }) {
  return (
    <Image
      src={white ? "/logo-white.png" : "/logo.png"}
      alt={church.name}
      width={1090}
      height={268}
      priority
      className={className}
    />
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  // Pages whose top is a photograph get a white header; the rest start dark on cream.
  const photoTop = pathname === "/" || pathname === "/new-here" || pathname === "/about" || pathname === "/watch";

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const dark = !solid && photoTop && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          solid || open ? "bg-paper/95 shadow-[0_1px_0_rgba(28,25,23,0.08)]" : photoTop ? "bg-gradient-to-b from-black/55 to-transparent" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" aria-label={`${church.name} home`} className="shrink-0">
            <Logo white={dark} className="h-11 w-auto sm:h-13" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex xl:gap-7">
            {nav.map((n) => {
              const active = pathname === n.href || pathname.startsWith(n.href + "/");
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`caps !text-[0.68rem] transition-colors ${
                    dark ? `on-photo ${active ? "text-orange-soft" : "text-white hover:text-orange-glow"}` : active ? "text-orange" : "text-ink hover:text-orange"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link href="/give" className="btn btn-orange !px-5 !py-2.5">
              Give
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`caps flex items-center gap-2.5 py-2 !text-[0.7rem] lg:hidden ${dark ? "on-photo text-white" : "text-ink"}`}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-orange transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-orange transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-orange transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </header>

      {/* A sibling of the header, so nothing in the header can trap it. */}
      <div id="mobile-menu" hidden={!open} className="fixed inset-0 z-30 overflow-y-auto bg-paper px-6 pb-10 pt-24 lg:hidden">
        <nav aria-label="Mobile" className="flex flex-col">
          <Link href="/" className="display border-b border-line py-4 text-4xl text-ink">
            Home
          </Link>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="display border-b border-line py-4 text-4xl text-ink">
              {n.label}
            </Link>
          ))}
          <Link href="/give" className="btn btn-orange mt-8">
            Give
          </Link>
        </nav>
        <p className="caps mt-10 text-center !text-[0.68rem] text-muted">
          {church.streetShort} · {church.city}, {church.stateCode}
        </p>
      </div>
    </>
  );
}
