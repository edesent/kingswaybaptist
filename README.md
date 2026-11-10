# Kingsway Baptist Church — website

Website for Kingsway Baptist Church, 744 Kings Highway, Mickleton, NJ 08056 (Pastor Samson Ryman).
It is a redesign of the Ministry Designs site at kbc4u.org.

- Live: https://kbc4u.org (since 2026-11-10)
- Preview: https://kingswaybaptist.elijahdesent.com (noindexed)
- Deploys: Vercel, automatically on every push to `main`.

## Before editing (for any AI assistant or developer)

- **Next.js 16 (App Router) + React 19 + Tailwind CSS 4.** Page files live in `src/app/<route>/page.tsx`.
  In Next 16, dynamic `params` are a `Promise` (`const { slug } = await params`). Don't use Next 13/14 signatures.
- **Almost every change is in one file: `src/lib/site.ts`.** It holds the service times, the pastor and
  leaders, the year's theme, the recent YouTube streams, the giving links, events, and the navigation.
  Edit the data there instead of hard-coding text into pages.
- **Events expire by themselves.** Each entry in `events` has an `endsOn` date (YYYY-MM-DD) and drops off
  the site the day after. `startsAt` is an ISO time with the Eastern offset, e.g. `2026-12-14T18:00:00-05:00`
  (`-04:00` in summer). The list is empty right now; add the next special day there.
- **Recent services** are the `streams` list in `site.ts` (YouTube video id, title, date). Add new ones at
  the top. The thumbnails come from i.ytimg.com, and the video loads only when someone presses play.
- **The phone number is base64'd** (`phoneB64`) and put together in the browser by
  `src/components/Phone.tsx`, so scrapers can't harvest it. Never type the digits into a page.
  To change it: `printf 8565551234 | base64`.
- **No email addresses on the site.** People reach the church through the forms on /contact.
- **Fonts are self-hosted** in `src/fonts/` (Cormorant Garamond, which matches the Garamond of the logo,
  for headings and Scripture; Poppins, which the old site used, for text). Don't switch to
  `next/font/google`; it can fail the Vercel build.
- **Colors** are defined once at the top of `src/app/globals.css`: the orange of the logo's spotlight crown,
  the near-black of the wordmark, warm cream, and "dusk" navy from the sunset photo of the building.
- **The logo** is the church's own (`public/logo.png`, and `public/logo-white.png` for dark backgrounds).
  `src/components/Crown.tsx` is a vector redraw of the crown for decorative use only; it is not the logo.
- **Photos** go in `public/photos/` (the church's own DSLR photos from kbc4u.org) and `public/photos/life/`
  (phone photos from the church's Facebook page, 843px, fine for small tiles only). Real photos of the
  church only, never AI-generated images. The "Highways & Hedges" road graphic from the old site is not
  used because it is a stock/AI composite; the theme is set as live text instead.
- **Videos** in `public/video/` are the church's own Facebook reels, re-encoded for the web. They autoplay
  muted while on screen (`src/components/Clip.tsx`) and show the poster under prefers-reduced-motion.
- Type ’ “ ” directly in JSX. Don't use `&rsquo;`-style entities; Next 16.2 can drop the space before them.

## Forms

`/api/form` handles the contact form and the prayer-request form. Messages are posted to
`FORM_WEBHOOK_URL` (a Slack or Teams incoming webhook). Until that variable is set in Vercel, the forms
answer honestly that the form isn't connected yet and ask people to call.

## Going live

1. Done 2026-11-06: canonical URLs default to `https://kbc4u.org`, every other host gets
   `X-Robots-Tag: noindex` from `next.config.ts`, and the demo-tracking script is gone.
2. DNS lives in Route 53 (AWS profile `greengreen`, zone `Z011148725RHWPTP6728Z`): Vercel A/CNAME for
   the site, Google Workspace MX + SPF for church email. kbc4u.org and www.kbc4u.org (redirects to the
   apex, 301) are on the Vercel project. LIVE 2026-11-10: the domain is registered at Amazon Route 53
   (auto-renew, WHOIS privacy and transfer lock on) and its nameservers point at that zone.
3. Every old kbc4u.org address redirects with a single 301 in `next.config.ts`: the 2019-2025 Ministry
   Designs pages, all ~270 `/news/*` sermon and podcast posts, and the 2018, 2014 WordPress and 2011 .php
   sites, with and without a trailing slash (770 archived addresses tested from the Wayback Machine index on
   2026-11-10). `/new-here`, `/free-gift`, `/events` and `/give` kept their addresses. Next's own trailing-slash
   308 is turned off (`skipTrailingSlashRedirect`) so the last rule strips slashes with a 301 instead. Only
   WordPress system files (`/wp-json`, `/xmlrpc.php`) return 404, on purpose.
4. Set `FORM_WEBHOOK_URL` so the forms deliver.

## Confirm with the church

- **Nursery age.** The old site says birth to 3 years; the Facebook intro says 4 and under. The site says
  "ages 3 and under". Israel confirmed on 2026-11-10 that the nursery is Sunday mornings only (Sunday School and
  the morning service), and that the church has no small groups.
- **Stream times.** The old Media page says streams start at approximately 11:30 AM and 6:30 PM. Confirm the
  evening stream still runs (recent evening streams are rarer on the channel than morning ones).
- **Audio sermons.** The old site had a podcast page (audio of every sermon) hosted on Ministry Designs. If
  the church wants that kept, send the podcast RSS feed and a /listen page can be added.
- **Theme.** "Highways & Hedges" (Luke 14:23) is on the sanctuary screens as the 2026 theme. Update
  `theme2026` in `site.ts` when the new year's theme is announced.
- **Events.** Cowboy Sunday (Nov 1, 2026) had passed when this was built, so nothing is in `events`.
- **Wedding and birthday footage.** The Facebook reels used on the site show church members; the wedding
  photos on Facebook were left off on purpose.
- **Phil Wood** is listed on the old site as "Deacon, Bible Teacher, Preacher" and streams as "Pastor Phil"
  on YouTube. The site uses the old site's wording.

## Hosting

Vercel project `kingswaybaptist` (team elijah-desents-projects), connected to this GitHub repo. Every push to `main` deploys.

## Photos of Pastor Ryman

The DSLR photos from kbc4u.org were taken before Pastor Ryman came (January 2025), so the men preaching
in `preaching-*.jpg` are earlier preachers, not him. Don't caption them as the pastor. The only photos of
Pastor Ryman are `pastor-ryman-preaching.jpg` and `pastor-ryman-israel.jpg`, 1280px frames
of 2026 Sunday streams (the family photo from the old site was removed at Eli's request) pulled from YouTube's own thumbnails (i.ytimg.com `maxres1/2/3.jpg`). `pastor-preaching.mp4`
(1280×720 with sound, 27 s, in the pastor band) is a web-sized copy of a 2560×1440 recording of Pastor Ryman
preaching that Eli supplied on 2026-11-04 (`pastor-sampson.mov`). The hero clip `hero-drone.mp4` is the first
30 s of the church's own drone flyover (YouTube fTDNfD4HOV8, 4K source), silent.
