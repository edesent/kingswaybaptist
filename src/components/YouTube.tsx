"use client";

import { useState } from "react";

/**
 * A YouTube embed that loads only when someone presses play, so pages with
 * several videos stay light and nothing from YouTube runs until asked.
 * The thumbnail comes straight from i.ytimg.com (no API key needed).
 */
export default function YouTube({ id, title, className = "", big = false }: { id: string; title: string; className?: string; big?: boolean }) {
  const [on, setOn] = useState(false);
  if (on) {
    return (
      <div className={`relative aspect-video overflow-hidden bg-black ${className}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={() => setOn(true)}
      className={`group relative block aspect-video w-full overflow-hidden bg-dusk-900 text-left ${className}`}
      aria-label={`Play: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${id}/${big ? "maxresdefault" : "hqdefault"}.jpg`}
        alt=""
        loading="lazy"
        onLoad={(e) => {
          // YouTube answers a 120x90 placeholder, not a 404, when the big thumbnail doesn't exist yet.
          const im = e.currentTarget;
          if (im.naturalWidth < 300 && !im.src.includes("hqdefault")) im.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-orange text-white shadow-[0_12px_30px_-10px_rgba(232,90,34,0.9)] transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
          <path d="M6 4l14 8-14 8z" />
        </svg>
      </span>
      <span className="on-photo absolute bottom-0 left-0 right-0 p-4 text-sm font-semibold text-white sm:p-5 sm:text-base">{title}</span>
    </button>
  );
}
