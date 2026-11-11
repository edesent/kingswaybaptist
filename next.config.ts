import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the root so Turbopack never picks up a parent folder's lockfile.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Trailing slashes are stripped by the last redirect below with a 301, instead
  // of Next's built-in 308, so old "/about-us/" style links get one 301 hop.
  skipTrailingSlashRedirect: true,
  images: {
    // YouTube thumbnails for the stream list and the click-to-play embeds.
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      // Larger photos uploaded through the website editor.
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
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
    // Every address the old kbc4u.org sites used (2011 .php site, 2014 WordPress,
    // 2018 site, 2019-2025 Ministry Designs), taken from the Wayback Machine index,
    // so bookmarks, old links and Google results land on the right page. All 301.
    // Order matters: the first match wins, so specific addresses come before the
    // catch-alls. Redirects run before pages, so /about, /events and /contact
    // themselves are never caught by their /:path+ rules.
    // Each address is matched with and without a trailing slash (most of the old
    // WordPress and 2018 links end in "/"), so every one is a single 301 hop.
    const to = (source: string, destination: string) => [
      { source, destination, statusCode: 301 as const },
      { source: `${source}/`, destination, statusCode: 301 as const },
    ];
    return [
      // 2019-2025 Ministry Designs site
      to("/our-history", "/about#history"),
      to("/history", "/about#history"),
      to("/our-leadership", "/about#leadership"),
      to("/our-pastor", "/about#leadership"),
      to("/our-missionaries", "/about"),
      to("/what-we-believe", "/beliefs"),
      to("/what-we-believe/kjv", "/kjv"),
      to("/what-we-believe/:path+", "/beliefs"),
      to("/sermons", "/watch"),
      to("/sermons/:path+", "/watch"),
      to("/media", "/watch"),
      to("/live-stream", "/watch"),
      to("/podcast", "/watch"),
      to("/feed", "/watch"),
      to("/giving", "/give"),
      to("/contact-us", "/contact"),
      to("/contact-us/prayer", "/contact#prayer"),
      to("/contact-us/:path+", "/contact"),
      to("/done", "/contact"),
      to("/classes", "/new-here"),
      to("/startingpoint", "/new-here"),
      to("/reopening", "/new-here"),
      to("/vbs", "/events"),
      to("/ssc", "/events"),
      to("/summer-soccer-camp", "/events"),
      to("/salvation", "/free-gift"),
      to("/privacy-policy", "/"),
      to("/thumb", "/"),
      to("/blog", "/watch"),
      // News posts: most were sermon and podcast posts; a few were events.
      to("/news/category/events", "/events"),
      to("/news/backyard-bible-study", "/events"),
      to("/news/summer-soccer-camp-2022", "/events"),
      to("/news/kingsway-dominican-republic-missions-trip-in-2021", "/events"),
      to("/news/pensacola-christian-college-proclaim-ministry-team", "/events"),
      to("/news", "/watch"),
      to("/news/:path+", "/watch"),

      // 2018 site
      to("/about-us", "/about"),
      to("/about-us/history", "/about#history"),
      to("/about-us/leadership", "/about#leadership"),
      to("/about-us/our-pastor", "/about#leadership"),
      to("/about-us/what-to-expect", "/new-here"),
      to("/about-us/what-we-believe", "/beliefs"),
      to("/about-us/:path+", "/about"),
      to("/ministries/media", "/watch"),
      to("/ministries/prayer", "/contact#prayer"),
      to("/ministries/sunday-school", "/new-here"),
      to("/ministries/sunday-school-adult-bible-study-classes", "/new-here"),
      to("/ministries", "/events"),
      to("/ministries/:path+", "/events"),
      to("/events/:path+", "/events"),

      // 2014-2016 WordPress site
      to("/about/events", "/events"),
      to("/about/leadership", "/about#leadership"),
      to("/about/pastoral-staff", "/about#leadership"),
      to("/about/what-we-believe", "/beliefs"),
      to("/about/pastoral-blogs", "/watch"),
      to("/about/:path+", "/about"),

      // 2011 .php site
      to("/events.php", "/events"),
      to("/sermons.php", "/watch"),
      to("/blog.php", "/watch"),
      to("/our-beliefs.php", "/beliefs"),
      to("/staff.php", "/about#leadership"),
      to("/blank-template.php", "/"),
      to("/index.php", "/"),
      to("/index.html", "/"),
      to("/home", "/"),
      to("/comments/:path*", "/watch"),
      // The two old documents that were linked from the site.
      to("/mt-content/uploads/2019/01/2019events.pdf", "/events"),
      to("/wp-content/uploads/2017/01/2017-kbc-bible-reading-booklet.pdf", "/kjv"),

      // Anything else with a trailing slash goes to the same address without it.
      [{ source: "/:path+/", destination: "/:path+", statusCode: 301 as const }],
    ].flat();
  },
};

export default nextConfig;
