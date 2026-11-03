"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One of the church's own short videos, playing silently in a phone-shaped
 * frame (they are vertical reels) or a landscape one, with a button to turn
 * the sound on. Plays only while on screen; the poster stands in under
 * prefers-reduced-motion.
 */
export default function Clip({
  src,
  poster,
  title,
  caption,
  vertical = true,
  className = "",
}: {
  src: string;
  poster: string;
  title: string;
  caption?: string;
  vertical?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    // Safari only honours these as properties.
    v.muted = true;
    v.playsInline = true;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = sound;
    if (!sound) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    setSound((s) => !s);
  };

  return (
    <figure className={`group relative ${className}`}>
      <div className={`relative overflow-hidden bg-dusk-900 ${vertical ? "aspect-[9/16]" : "aspect-video"}`}>
        {still ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <video
            ref={ref}
            src={src}
            poster={poster}
            loop
            preload="metadata"
            onError={() => setStill(true)}
            className="absolute inset-0 h-full w-full object-cover"
            aria-label={title}
          />
        )}
        {!still && (
          <button
            type="button"
            onClick={toggleSound}
            className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-black/55 text-white backdrop-blur-sm transition hover:bg-orange"
            aria-pressed={sound}
            aria-label={sound ? "Mute" : "Turn sound on"}
          >
            {sound ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M4 9v6h4l5 4V5L8 9H4zm11.5 3a3.5 3.5 0 0 0-2-3.15v6.3a3.5 3.5 0 0 0 2-3.15zM13.5 4.2v2.1a6 6 0 0 1 0 11.4v2.1a8 8 0 0 0 0-15.6z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M4 9v6h4l5 4V5L8 9H4zm12.6 3 2.6-2.6-1.4-1.4-2.6 2.6-2.6-2.6-1.4 1.4 2.6 2.6-2.6 2.6 1.4 1.4 2.6-2.6 2.6 2.6 1.4-1.4z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {caption && <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
