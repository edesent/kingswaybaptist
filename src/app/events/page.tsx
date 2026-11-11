import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlainHead } from "@/components/PageHead";
import { dateParts, upcomingEvents } from "@/lib/dates";
import { church, giving, nursery, schedule } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "What’s happening at Kingsway Baptist Church, Mickleton NJ: weekly services, special days, and the things our church family does together through the year.",
};

export const revalidate = 3600;

const year: { when: string; t: string; b: string; src: string; alt: string; pos?: string }[] = [
  {
    when: "February",
    t: "Sweetheart Banquet",
    b: "An evening for husbands and wives: dinner together under the string lights.",
    src: "/photos/tent-dinner.jpg",
    alt: "Couples at dinner tables under string lights at the Sweetheart Banquet",
  },
  {
    when: "Summer",
    t: "American Bible Giveaway",
    b: "Free King James Bibles handed out along the Kings Highway, with signs, flags and a tent in the parking lot. In 2026 it fell on June 27, America’s 250th year.",
    src: "/photos/free-bible-sign.jpg",
    alt: "A young man holding a Free Bible sign on the shoulder of the Kings Highway",
  },
  {
    when: "Fall",
    t: "Pumpkin patch outing",
    b: "The whole church at the farm: hayrides, pony rides, a corn pit, and a lot of laughter. “So thankful the Lord blessed us.”",
    src: "/photos/life/hayride-crowd.jpg",
    alt: "The church family packed onto a hay wagon",
  },
  {
    when: "November",
    t: "Cowboy Sunday",
    b: "Dress up in western wear, hear the Word preached, and stay for hot dogs after church. Wrangling hearts for Jesus.",
    src: "/photos/kingsway-hat.jpg",
    alt: "A white Kingsway Baptist Church cap, Mickleton NJ, on a pew",
  },
  {
    when: "Any Sunday",
    t: "Dinner on the grounds",
    b: "Dinners outside on the grounds or downstairs in the church basement. Church family, not church attendance.",
    src: "/photos/img-5794.jpeg",
    alt: "Church family going through the buffet line at a dinner in the church basement",
    pos: "center 55%",
  },
];

export default function Events() {
  const events = upcomingEvents();
  return (
    <>
      <PlainHead kicker="Events" title="What’s happening at Kingsway." intro="Sunday is the main event. Here is the weekly rhythm, anything special coming up, and the things we do together every year." />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 lg:pt-20 sm:px-6 lg:px-8">
          {events.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {events.map((e, i) => {
                const d = dateParts(e.startsAt);
                return (
                  <article key={e.id} className="flex gap-6 border-2 border-orange bg-white p-6" data-reveal={String(i)}>
                    <div className="shrink-0 text-center">
                      <p className="caps !text-[0.6rem] text-orange">{d.month}</p>
                      <p className="display text-5xl text-ink">{d.day}</p>
                    </div>
                    <div>
                      <h2 className="display-light text-3xl text-ink">{e.title}</h2>
                      <p className="mt-1 text-sm text-muted">
                        {e.day} · {e.time} · {e.where}
                      </p>
                      <p className="mt-3 text-ink-soft">{e.summary}</p>
                      {e.items && (
                        <ul className="mt-3 list-disc pl-5 text-[0.95rem] text-ink-soft">
                          {e.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="border border-line bg-white p-7" data-reveal>
              <p className="caps text-orange">Coming up</p>
              <p className="display-light mt-2 text-3xl text-ink">Nothing special on the calendar just now.</p>
              <p className="mt-2 text-ink-soft">
                Follow us on{" "}
                <a href={church.facebook} target="_blank" rel="noopener" className="font-semibold text-orange underline-offset-4 hover:underline">
                  Facebook
                </a>{" "}
                for the next one, or see events and sign-ups in the Church Center app.
              </p>
            </div>
          )}

          <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <p className="caps text-orange">Every week</p>
              <h2 className="display mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink">Three services on Sunday, prayer on Wednesday.</h2>
              <p className="mt-4 text-ink-soft">{nursery}</p>
            </div>
            <ul className="mt-8 divide-y divide-line border-y border-line lg:col-span-7 lg:mt-0">
              {schedule.map((s, i) => (
                <li key={s.name} className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[9rem_1fr]" data-reveal={String(i % 2)}>
                  <span className="display text-3xl text-ink sm:text-4xl">{s.time}</span>
                  <span>
                    <span className="font-semibold text-ink">{s.name}</span>
                    <span className="block text-sm text-muted">
                      {s.day}s{s.note && ` · ${s.note}`}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="caps text-orange" data-reveal>
            Through the year
          </p>
          <h2 className="display mt-3 max-w-3xl text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink" data-reveal>
            The things we do together.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {year.map((y, i) => (
              <div key={y.t} data-reveal={String(i)}>
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image src={y.src} alt={y.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" style={y.pos ? { objectPosition: y.pos } : undefined} />
                </div>
                <p className="caps mt-4 !text-[0.62rem] text-orange">{y.when}</p>
                <h3 className="display-light mt-1 text-2xl text-ink">{y.t}</h3>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{y.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-14 sm:px-6 lg:px-8">
          <div>
            <p className="caps text-orange">Church Center app</p>
            <p className="display-light mt-2 text-3xl text-ink">Events and giving, in your pocket.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={giving.churchCenterIos} target="_blank" rel="noopener" className="btn btn-line-ink">
              App Store
            </a>
            <a href={giving.churchCenterAndroid} target="_blank" rel="noopener" className="btn btn-line-ink">
              Google Play
            </a>
            <Link href="/contact" className="btn btn-ink">
              Ask us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
