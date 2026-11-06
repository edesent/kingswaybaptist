import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the root so Turbopack never picks up a parent folder's lockfile.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // YouTube thumbnails for the stream list and the click-to-play embeds.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  async headers() {
    // Only kbc4u.org is indexed. The elijahdesent.com preview and *.vercel.app
    // URLs serve the same pages, so they must never compete with it in search.
    return [
      {
        source: "/:path*",
        missing: [{ type: "host", value: "(www\\.)?kbc4u\\.org" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    // The old kbc4u.org addresses, so bookmarks and Google results keep working.
    return [
      { source: "/our-history", destination: "/about#history", permanent: true },
      { source: "/our-leadership", destination: "/about#leadership", permanent: true },
      { source: "/what-we-believe", destination: "/beliefs", permanent: true },
      { source: "/what-we-believe/kjv", destination: "/kjv", permanent: true },
      { source: "/sermons", destination: "/watch", permanent: true },
      { source: "/giving", destination: "/give", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/news", destination: "/watch", permanent: false },
      { source: "/news/:path*", destination: "/watch", permanent: false },
    ];
  },
};

export default nextConfig;
