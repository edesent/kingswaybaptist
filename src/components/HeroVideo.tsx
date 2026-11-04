"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * The home-page hero: the church's own footage of a Sunday, playing silently
 * behind the headline. The sunset photo of the building shows first and stays
 * for anyone with reduced motion on, on a failed load, or while the video
 * buffers; the clip fades in over it once it can play.
 */
export default function HeroVideo({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    // canplay can fire before React attaches the handler, so check the state too.
    const show = () => setReady(true);
    if (v.readyState >= 3) show();
    v.addEventListener("playing", show);
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", show);
  }, []);

  return (
    <>
      <Image src={poster} alt={alt} fill priority sizes="100vw" className="object-cover object-[62%_center]" />
      {!still && (
        <video
          ref={ref}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden
          onCanPlay={() => setReady(true)}
          onError={() => setStill(true)}
          className={`absolute inset-0 h-full w-full object-cover object-[55%_30%] transition-opacity duration-[1500ms] ${ready ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </>
  );
}
