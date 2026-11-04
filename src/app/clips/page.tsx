import type { Metadata } from "next";

/**
 * A private review page for choosing the home-page hero clip. Not linked
 * from the site or the sitemap; delete this folder and public/video/review
 * once a clip is chosen.
 */
export const metadata: Metadata = {
  title: "Hero clip options",
  robots: { index: false, follow: false },
};

const clips = [
  {
    id: "A",
    src: "/video/review/a-christmas-family.mp4",
    t: "Christmas program, the Ryman family singing",
    source: "Facebook reel, 1440×1080 phone video, cropped to 16:9. The sharpest footage the church has posted.",
    note: "Christmas wreaths and poinsettias are visible, so it reads as December all year.",
  },
  {
    id: "B",
    src: "/video/review/b-christmas-congregation.mp4",
    t: "Christmas program, family then the congregation singing",
    source: "Facebook reel, 960×720 phone video, cropped to 16:9 and left at native size (no upscale). This is what the hero uses now, recut without the upscaling.",
    note: "Softest of the three landscape options, but the only one that shows the whole church singing.",
  },
  {
    id: "C",
    src: "/video/review/c-photos-singing-preaching.mp4",
    t: "Slow zoom across three of their own DSLR photos: singers, preaching, the congregation",
    source: "Made from the church's professional photos on kbc4u.org (2400px). Sharp on any screen. Not video of a service, but it is their people and their room.",
    note: "The preacher in the second photo is from before Pastor Ryman's time. It could be swapped for the stream frame of Pastor Ryman if you prefer.",
  },
  {
    id: "D",
    src: "/video/review/d-sunday-october-vertical.mp4",
    t: "A Sunday in October: the foyer, then a moment at the front of the sanctuary",
    source: "Facebook reel, 720×1280 vertical phone video, shown as shot. Would need to be cropped to a narrow slice for a landscape hero.",
    note: "Works better as the phone-shaped clip it already is on the home page.",
    vertical: true,
  },
  {
    id: "E",
    src: "/video/bible-giveaway-day.mp4",
    t: "Bible giveaway day along the Kings Highway",
    source: "Facebook video, 1280×720. Already on the Highways & Hedges band.",
    note: "Outdoors and bright, but it is the giveaway, not singing or preaching.",
  },
  {
    id: "Now",
    src: "/video/hero-singing.mp4",
    t: "The clip on the hero right now, for comparison",
    source: "Option B's footage upscaled to 1280×720.",
    note: "",
  },
];

export default function Clips() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <p className="caps text-orange">Private review page</p>
        <h1 className="display mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink">Hero clip options</h1>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Everything below is the church's own footage or photos. YouTube blocks downloading their Sunday streams from our end, which is where the real
          preaching footage lives; if the church sends a service recording, a sermon cut can go in the hero. All clips are silent and loop.
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {clips.map((c) => (
            <div key={c.id}>
              <div className={`${c.vertical ? "mx-auto aspect-[9/16] max-w-xs" : "aspect-video"} overflow-hidden bg-dusk-950`}>
                <video src={c.src} controls muted loop playsInline autoPlay preload="metadata" className="h-full w-full object-cover" />
              </div>
              <p className="caps mt-4 !text-[0.62rem] text-orange">Option {c.id}</p>
              <h2 className="display-light mt-1 text-2xl text-ink">{c.t}</h2>
              <p className="mt-2 text-[0.95rem] text-ink-soft">{c.source}</p>
              {c.note && <p className="mt-1 text-[0.95rem] text-muted">{c.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
