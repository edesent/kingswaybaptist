"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * The home-page hero: the church's drone flyover of the building and grounds,
 * playing silently behind the headline. A still from the clip shows
 * first and stays for anyone with reduced motion on, on a failed load, or while
 * the video buffers; the clip fades in over it once it plays.
 */
export default function HeroVideo({ src, srcSmall, poster, alt }: { src: string; srcSmall?: string; poster: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);
  const [ready, setReady] = useState(false);
  // Phones get the smaller file; chosen on the client so the server render stays static.
  const [file, setFile] = useState<string | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    setFile(srcSmall && window.innerWidth < 768 ? srcSmall : src);
    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    // canplay can fire before React attaches the handler, so check the state too.
    const show = () => setReady(true);
    if (v.readyState >= 3) show();
    v.addEventListener("playing", show);
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", show);
  }, [src, srcSmall]);

  return (
    <>
      <Image src={poster} alt={alt} fill priority sizes="100vw" className="object-cover object-[40%_center]" />
      {!still && (
        <video
          ref={ref}
          src={file ?? undefined}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden
          onCanPlay={() => setReady(true)}
          onError={() => setStill(true)}
          className={`absolute inset-0 h-full w-full object-cover object-[40%_center] transition-opacity duration-[1500ms] ${ready ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </>
  );
}
