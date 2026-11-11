/**
 * Everything a pastor or volunteer is likely to change lives in this file:
 * service times, leaders, events, giving links and the navigation.
 *
 * Sources (November 2026): kbc4u.org (Home, New Here?, Our History, Our
 * Leadership, What We Believe, KJV, Media, Giving, Free Gift, Contact), the
 * church's Facebook Page (KingswayBaptistNJ) and YouTube channel
 * (@KingswayBaptistChurch). Anything two sources disagree on is listed under
 * "Confirm with the church" in README.md.
 */

/**
 * The church's own address. Every other host (the elijahdesent.com preview,
 * *.vercel.app) is kept out of search by the X-Robots-Tag rule in
 * next.config.ts, so nothing here has to change when DNS moves.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kbc4u.org";

/** Mickleton, New Jersey keeps Eastern time. Every "today" is worked out here. */
export const TZ = "America/New_York";

export const church = {
  name: "Kingsway Baptist Church",
  short: "Kingsway",
  initials: "KBC",
  street: "744 Kings Highway",
  streetShort: "744 Kings Hwy",
  city: "Mickleton",
  township: "East Greenwich Township",
  county: "Gloucester County",
  state: "New Jersey",
  stateCode: "NJ",
  zip: "08056",
  founded: 1975,
  /**
   * The church line, base64'd so it never sits in the HTML for scrapers:
   * `printf 8564671672 | base64`. Rendered by components/Phone.tsx.
   * Never type the digits into a page.
   */
  phoneB64: "ODU2NDY3MTY3Mg==",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kingsway+Baptist+Church+744+Kings+Highway+Mickleton+NJ+08056",
  mapsEmbed: "https://www.google.com/maps?q=744+Kings+Highway,+Mickleton,+NJ+08056&output=embed",
  facebook: "https://www.facebook.com/KingswayBaptistNJ",
  instagram: "https://www.instagram.com/kingswaybc",
  youtube: "https://www.youtube.com/@KingswayBaptistChurch",
  youtubeChannelId: "UCN1D07I_TtFTM7a3XseUzFg",
  /** The line at the top of their Facebook Page, word for word. */
  invitation: "Come hear the Word of God preached and the love of God felt.",
  /** The footer paragraph from their current site, word for word. */
  blurb:
    "Looking for a church? Welcome to Kingsway, where we hold onto traditional biblical beliefs. We believe in expressing our devotion to the Lord through hymns and spiritual songs, while also delivering sermons and teachings based on the King James Bible. Our mission is to inspire and encourage biblical living, spreading the joy of the Lord to all who visit. We would be delighted to have you join us.",
};

/** Planning Center. The old site's Giving page explains all three. */
export const giving = {
  online: "https://kbc4u.churchcenter.com/giving",
  textNumber: "84321",
  churchCenterIos: "https://apps.apple.com/us/app/church-center-app/id1357742931",
  churchCenterAndroid: "https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter",
};

/** The weekly rhythm, from the old site's home page. */
export const schedule: { day: string; name: string; time: string; note?: string }[] = [
  { day: "Sunday", name: "Sunday School", time: "10:00 AM" },
  { day: "Sunday", name: "Morning Service", time: "11:00 AM", note: "Streamed on YouTube around 11" },
  { day: "Sunday", name: "Evening Service", time: "6:00 PM", note: "Streamed on YouTube around 6:30" },
  { day: "Wednesday", name: "Bible Study & Prayer", time: "7:00 PM" },
];

export const nursery = "A clean, safe nursery is open for children ages 3 and under on Sunday mornings.";

/** The people on the old site's Our Leadership page. */
export const pastor = {
  name: "Pastor Samson Ryman",
  shortName: "Pastor Ryman",
  wife: "Linnet Ryman",
  children: ["Israel", "Isabel", "Juliet", "Grace"],
  since: "January 12, 2025",
  lifeVerse: "II Timothy 2:2-4",
  photo: "/photos/pastor-ryman-preaching.jpg",
  photoAlt: "Pastor Samson Ryman at the pulpit at Kingsway, smiling, microphone in hand",
};

export const leaders: { name: string; role: string }[] = [
  { name: "Phil Wood", role: "Deacon, Bible Teacher, Preacher" },
  { name: "Paul Mitchell", role: "Trustee, Treasurer, Head of Prayer Ministry" },
];

/** The year's theme, from the screens in the sanctuary. */
export const theme2026 = {
  title: "Highways & Hedges",
  year: 2026,
  verse: {
    text: "And the lord said unto the servant, Go out into the highways and hedges, and compel them to come in, that my house may be filled.",
    ref: "Luke 14:23",
  },
};

/**
 * Recent Sunday streams from the YouTube channel (November 2026). The channel
 * has nearly 700 videos; these are the newest. Update by adding to the top.
 */
export type Stream = { id: string; title: string; date: string; who?: string };
export const streams: Stream[] = [
  { id: "ISJsU_1KBWg", title: "Sunday Morning Service", date: "2026-11-01" },
  { id: "_RyvsPx4hDo", title: "Sunday Morning Service", date: "2026-10-25" },
  { id: "JvKpO8rHc-Q", title: "Sunday Morning Service", date: "2026-10-18" },
  { id: "o0XEvFp5gpQ", title: "Sunday Morning Service", date: "2026-10-11" },
  { id: "or3CGFqscyE", title: "Sunday Morning Service", date: "2026-10-04" },
  { id: "q0FjQ4Uws80", title: "Sunday Morning Service", date: "2026-09-27" },
  { id: "berjd2AF7RM", title: "Sunday Morning Service", date: "2026-09-06" },
  { id: "BVdSYZfCec4", title: "Sunday Evening Service", date: "2026-08-30" },
  { id: "d5rrkuery8g", title: "Sunday Morning Service", date: "2026-08-30" },
  { id: "jbfwDl_YtWg", title: "Sunday Morning Service", date: "2026-08-23" },
  { id: "m-0xNRKoI70", title: "Hospitality", date: "2026-08-02", who: "Sunday morning" },
  { id: "8H1nnSKjx9s", title: "Sunday Morning Service", date: "2026-07-26", who: "Pastor Samson Ryman" },
  { id: "8xvV0pa5w78", title: "Sunday Morning Service", date: "2026-07-19", who: "Pastor Samson Ryman" },
  { id: "T6tmE7Icjks", title: "Sunday Morning Service", date: "2026-07-12", who: "Phil Wood" },
  { id: "m0gaATXhBoU", title: "Sober", date: "2026-06-28", who: "Pastor Samson Ryman" },
];

/**
 * "What's the Big Deal About the KJV?", Dr. Sam Gipp's seven-part series
 * (youtube.com/@samgipp4210). Each id was checked against its YouTube title.
 */
export const kjvSeries: { id: string; episode: number }[] = [
  { id: "uf1C7sEIlLI", episode: 1 },
  { id: "69Tw4nsV0DA", episode: 2 },
  { id: "eWLs3mSQfro", episode: 3 },
  { id: "fAIFFmkLj0w", episode: 4 },
  { id: "WgLCavjHwvI", episode: 5 },
  { id: "AsX6uWacASQ", episode: 6 },
  { id: "bSiRzrSdqEo", episode: 7 },
  // uf1C7sEIlLI was also embedded on the old KJV page without a title.
];

/** Another KJV video the church shares, not part of Brother Gipp's series. */
export const kjvExtra = { id: "FaHALxNg_1E", title: "VERSES, Pilot: KJV vs. NKJV", from: "KJV Pictures" };

/** The videos embedded on the old Free Gift page. */
export const gospelVideos: string[] = ["9Zv7YLi5P-g", "RqXi4pGVvbU", "SCYgGOKGPEo", "TCSUKIhjevo", "z6FGCEpXlb8"];

/** The drone flyover on the channel (2020), for the about page. */
export const droneVideoId = "fTDNfD4HOV8";

/**
 * Special events. Each one drops off the site by itself the day after its
 * `endsOn` date (pages re-render hourly). Dates are YYYY-MM-DD and `startsAt`
 * is an ISO time with the Eastern offset (-05:00 in winter, -04:00 in summer).
 *
 * Cowboy Sunday (November 1, 2026) has already happened, so it is not here.
 * The American Bible Giveaway happens every summer; add next year's date when
 * the church sets it.
 */
export type SpecialEvent = {
  id: string;
  title: string;
  startsAt: string;
  endsOn: string;
  day: string;
  time: string;
  where: string;
  summary: string;
  items?: string[];
};

export const events: SpecialEvent[] = [
  {
    id: "pie-and-praise-2026",
    title: "Pie and Praise Service",
    startsAt: "2026-11-24T12:00:00-05:00",
    endsOn: "2026-11-24",
    day: "Tuesday",
    time: "7:00 PM",
    where: "",
    summary: "",
  },
  {
    id: "no-midweek-2026-11-25",
    title: "No Midweek Service",
    startsAt: "2026-11-25T12:00:00-05:00",
    endsOn: "2026-11-25",
    day: "Wednesday",
    time: "",
    where: "",
    summary: "There is no Bible Study & Prayer service this Wednesday.",
  },
  {
    id: "lords-supper-2026-11-29",
    title: "The Lord’s Supper",
    startsAt: "2026-11-29T18:00:00-05:00",
    endsOn: "2026-11-29",
    day: "Sunday",
    time: "6:00 PM · Evening Service",
    where: "",
    summary: "",
  },
  {
    id: "christmas-carol-2026-12-11",
    title: "Christmas Carol Nursing Home / Christmas Party",
    startsAt: "2026-12-11T12:00:00-05:00",
    endsOn: "2026-12-11",
    day: "Friday",
    time: "",
    where: "",
    summary: "",
  },
  {
    id: "candlelight-2026-12-20",
    title: "Candlelight Service",
    startsAt: "2026-12-20T12:00:00-05:00",
    endsOn: "2026-12-20",
    day: "Sunday",
    time: "6:00 PM",
    where: "",
    summary: "",
  },
  {
    id: "no-midweek-2026-12-23",
    title: "No Midweek Service",
    startsAt: "2026-12-23T12:00:00-05:00",
    endsOn: "2026-12-23",
    day: "Wednesday",
    time: "",
    where: "",
    summary: "There is no Bible Study & Prayer service this Wednesday.",
  },
  {
    id: "omni-night-2026-12-28",
    title: "Omni Night",
    startsAt: "2026-12-28T12:00:00-05:00",
    endsOn: "2026-12-28",
    day: "Monday",
    time: "",
    where: "",
    summary: "Hosted by Solid Rock Baptist Church. Info to come.",
  },
];

/** Keep labels short: long labels wrap and break the header on phones. */
export const nav: { href: string; label: string }[] = [
  { href: "/new-here", label: "New Here" },
  { href: "/about", label: "About" },
  { href: "/beliefs", label: "Beliefs" },
  { href: "/watch", label: "Watch" },
  { href: "/events", label: "Events" },
  { href: "/free-gift", label: "Free Gift" },
  { href: "/contact", label: "Contact" },
];
