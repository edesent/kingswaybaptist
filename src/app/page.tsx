import Image from "next/image";
import Link from "next/link";
import Clip from "@/components/Clip";
import HeroVideo from "@/components/HeroVideo";
import Crown, { Beams } from "@/components/Crown";
import YouTube from "@/components/YouTube";
import { dateParts, longDate, upcomingEvents } from "@/lib/dates";
import { church, nursery, pastor, schedule, streams, theme2026 } from "@/lib/site";

export const revalidate = 3600;

const sunday = [
  { src: "/photos/sanctuary.jpg", alt: "The sanctuary full on a Sunday night: white pews, red carpet, brass chandeliers and the crown and cross on the platform wall", span: "md:col-span-2 md:row-span-2" },
  { src: "/photos/congregation-singing.jpg", alt: "The congregation standing to sing, hands raised" },
  { src: "/photos/bible-hands.jpg", alt: "An open Bible held in two hands during the service" },
  { src: "/photos/singers-instruments.jpg", alt: "A group singing special music with guitar and mandolin" },
  { src: "/photos/greeting-elder.jpg", alt: "A warm handshake in the aisle after the service" },
];

const life = [
  { src: "/photos/life/hayride.jpg", alt: "Church families on a hayride at the pumpkin patch" },
  { src: "/photos/life/pony-ride.jpg", alt: "A child on a pony ride" },
  { src: "/photos/life/family-on-hay.jpg", alt: "A family sitting together on hay bales" },
  { src: "/photos/life/young-ladies.jpg", alt: "Young ladies from the church laughing together at the pumpkin patch" },
  { src: "/photos/life/red-wagon.jpg", alt: "The red tractor wagon at the farm" },
  { src: "/photos/life/archery.jpg", alt: "A little girl trying archery at the fall outing" },
  { src: "/photos/kids-crafts.jpg", alt: "Children working on crafts at a table" },
  { src: "/photos/field-games.jpg", alt: "The church playing games on the field behind the building" },
];

export default function Home() {
  const events = upcomingEvents();
  const latest = streams[0];

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-dusk-900 text-white">
        <HeroVideo
          src="/video/hero-drone.mp4"
          srcSmall="/video/hero-drone-sm.mp4"
          poster="/posters/hero-drone-poster.jpg"
          alt="Kingsway Baptist Church from the air: the brick building, white steeple and flag on six acres along the Kings Highway"
        />
        {/* Wash the copy side and the bottom so the headline reads over the footage. */}
        <div className="absolute inset-0 bg-gradient-to-r from-dusk-950/60 via-dusk-950/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk-950/80 via-dusk-950/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-40 sm:px-6 lg:px-8 lg:pb-16">
          <p className="caps on-photo text-orange-soft">
            An independent Baptist church · Mickleton, New Jersey
          </p>
          <h1 className="display on-photo mt-4 max-w-5xl text-[clamp(3rem,8vw,7.4rem)]">{church.invitation}</h1>
          <p className="lede on-photo mt-6 max-w-xl text-white/90">
            On the Kings Highway since {church.founded}. King James Bible, hymns, and straight, practical preaching. Come as you are. We’d be glad to see you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/new-here" className="btn btn-orange">
              Plan a visit
            </Link>
            <Link href="/watch" className="btn btn-line">
              Watch a service
            </Link>
          </div>

          {/* service times, on the photo */}
          <div className="mt-12 grid gap-px border-t border-white/25 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {schedule.map((s) => (
              <div key={s.name} className="on-photo pr-6">
                <p className="caps !text-[0.62rem] text-orange-soft">{s.day}</p>
                <p className="display-light mt-1 text-3xl">{s.time}</p>
                <p className="text-sm text-white/85">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- welcome */}
      <section className="relative overflow-hidden bg-paper">
        <Beams className="pointer-events-none absolute -top-16 left-[55%] h-[140%] w-auto opacity-[0.14]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-7" data-reveal>
            <p className="caps text-orange">Welcome to Kingsway</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4.6rem)] text-ink">
              The people of Kingsway are passionate about God, His sacred Holy Word, and loving people.
            </h2>
            <p className="lede mt-6 max-w-2xl text-ink-soft">
              Our sincere prayer is that through this website you’ll be inspired to visit us in person. In the meantime, take some time to get to know us a bit. Above all, we pray that you’ll come to know our Lord and Savior, Jesus Christ.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:col-span-5 lg:mt-0 lg:grid-cols-1 lg:border-l lg:border-line lg:pl-12" data-reveal="1">
            {[
              ["Since 1975", "Planted by Pastor Jim Fish, who moved his family from Michigan to start a Bible-believing church in Gloucester County. Our first service was the Sunday after Thanksgiving."],
              ["King James Bible", "We preach and teach from the AV 1611 King James Bible, which we hold to be the perfect, preserved Word of God."],
              ["Hymns & spiritual songs", "We express our devotion to the Lord the old way, with hymnbooks in the pews and special music from our own families."],
            ].map(([t, b]) => (
              <div key={t}>
                <h3 className="display-light text-2xl text-ink">{t}</h3>
                <p className="mt-2 text-[0.98rem] text-ink-soft">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- sunday mosaic */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="caps text-orange">Sunday at Kingsway</p>
              <h2 className="display mt-3 text-[clamp(2.4rem,5vw,4.4rem)] text-ink">A full house, a red carpet, and the Word opened.</h2>
            </div>
            <Link href="/new-here" className="btn btn-line-ink">
              What to expect
            </Link>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-4 md:auto-rows-[15rem]">
            {sunday.map((p, i) => (
              <div key={p.src} className={`relative aspect-[4/3] overflow-hidden bg-sand md:aspect-auto ${p.span ?? ""}`} data-reveal={String(i % 4)}>
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- be our guest */}
      <section className="relative overflow-hidden bg-paper">
        <div className="road absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div className="mx-auto w-64 sm:w-72 lg:col-span-4 lg:mx-0 lg:w-full lg:max-w-[22rem]" data-reveal>
            <Clip src="/video/be-our-guest.mp4" poster="/posters/be-our-guest-poster.jpg" title="Be our guest at KBC, a short invitation from one of our young ladies" caption="“See you at KBC.” From our Facebook page." />
          </div>
          <div className="mt-12 lg:col-span-8 lg:mt-0" data-reveal="1">
            <p className="caps text-orange">New here?</p>
            <h2 className="display mt-3 text-[clamp(2.4rem,5vw,4.4rem)] text-ink">We don’t evaluate you when you walk in. We’re simply glad to see you.</h2>
            <div className="prose-church mt-6 max-w-2xl text-ink-soft">
              <p>
                We understand that visiting a church can be intimidating, but we want everyone to feel welcome and at home. We’re not perfect; everyone here is a work in progress and seeks to grow in grace. Don’t worry about fitting in or measuring up. Come as you are and let God work on you.
              </p>
              <p>
                We speak plain English and worship God through Jesus Christ. We open the Bible and apply it to real life in the twenty-first century. No pointless traditions, no droning lectures, no pious arrogance. Just friendly, hardworking people looking for encouragement and good friends who also have faith in Jesus Christ.
              </p>
            </div>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-orange pl-4">
                <dt className="font-semibold text-ink">Nursery</dt>
                <dd className="mt-1 text-[0.95rem] text-ink-soft">{nursery}</dd>
              </div>
              <div className="border-l-2 border-orange pl-4">
                <dt className="font-semibold text-ink">Bring your Bible</dt>
                <dd className="mt-1 text-[0.95rem] text-ink-soft">We read and study together, and there are Bibles in every pew if you don’t have your own.</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/new-here" className="btn btn-ink">
                Plan your first Sunday
              </Link>
              <Link href="/contact" className="btn btn-line-ink">
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ pastor */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-5" data-reveal>
            <p className="caps text-orange-soft">Our pastor</p>
            <h2 className="display mt-3 text-[clamp(2.4rem,5vw,4.4rem)]">Pastor Samson Ryman</h2>
            <p className="lede mt-6 max-w-2xl text-cream/85">
              Elected as the third pastor of Kingsway on {pastor.since}. Before that he served as a full-time evangelist, pastored Central Bible Baptist Church in Massena, New York, for ten years, and spent twelve years as youth pastor at Faith Baptist Church of Smyrna, Delaware, under his father, Dr. Alan Ryman.
            </p>
            <p className="mt-5 max-w-2xl text-cream/70">
              Pastor Ryman is passionate about teaching men to grow biblically and spiritually, and he has a genuine concern for teens. He and his wife, Linnet, have been married since 1997 and have four grown children: Israel, Isabel, Juliet, and Grace, every one of them serving at Kingsway.
            </p>
            <p className="verse mt-8 max-w-2xl text-2xl text-orange-glow">
              “And the things that thou hast heard of me among many witnesses, the same commit thou to faithful men, who shall be able to teach others also.”
              <span className="caps mt-2 block !text-[0.62rem] text-orange-soft">{pastor.lifeVerse}, his life verse</span>
            </p>
            <Link href="/about#leadership" className="btn btn-orange mt-8">
              Meet our leadership
            </Link>
          </div>
          <div className="mt-12 lg:col-span-7 lg:mt-0" data-reveal="1">
            <Clip
              src="/video/pastor-preaching.mp4"
              poster="/posters/pastor-preaching-poster.jpg"
              title="Pastor Ryman preaching at Kingsway"
              caption="Pastor Ryman preaching on a Sunday at Kingsway. Tap the speaker to hear him."
              vertical={false}
              aspect="aspect-[4/3]"
              className="text-cream [&_figcaption]:text-cream/60"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- highways & hedges */}
      <section className="relative isolate overflow-hidden bg-dusk-950 text-white">
        <Image src="/photos/congregation-back.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-dusk-950 via-dusk-950/70 to-dusk-950" />
        <Crown className="pointer-events-none absolute -right-16 top-1/2 h-[120%] w-auto -translate-y-1/2 opacity-30 mix-blend-screen" beam="#f6a37a" ink="#0b1623" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <p className="caps text-orange-soft" data-reveal>
            Our theme for {theme2026.year}
          </p>
          <h2 className="display mt-3 text-[clamp(3.2rem,9vw,8.5rem)] text-orange-glow" data-reveal="1">
            {theme2026.title}
          </h2>
          <p className="verse mt-8 max-w-3xl text-[clamp(1.5rem,3vw,2.4rem)] text-white/95" data-reveal="2">
            “{theme2026.verse.text}”
          </p>
          <p className="caps mt-4 !text-[0.66rem] text-orange-soft" data-reveal="2">
            {theme2026.verse.ref}
          </p>
          <div className="road-light mt-12 max-w-md" />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6" data-reveal>
              <Clip
                src="/video/bible-giveaway-day.mp4"
                poster="/posters/bible-giveaway-day-poster.jpg"
                title="Our church family handing out free King James Bibles along the Kings Highway"
                vertical={false}
              />
            </div>
            <div className="lg:col-span-6" data-reveal="1">
              <h3 className="display-light text-3xl sm:text-4xl">Out on the highway, every summer.</h3>
              <p className="mt-4 max-w-xl text-white/80">
                Each year our church family sets up along the Kings Highway and gives away free King James Bibles to anyone who stops. In 2026 we marked America’s 250th with flag Bibles and signs held high by our own young people. That is the highways and hedges verse, lived out at the end of our driveway.
              </p>
              <Link href="/events" className="btn btn-line mt-6">
                Through the year at Kingsway
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- life at kbc */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5" data-reveal>
              <p className="caps text-orange">Life at Kingsway</p>
              <h2 className="display mt-3 text-[clamp(2.4rem,5vw,4.4rem)] text-ink">Church family, not church attendance.</h2>
              <p className="lede mt-5 max-w-xl text-ink-soft">
                Pumpkin patch outings, hayrides, Cowboy Sunday with hot dogs after church, dinners on the grounds, games on the back field. We’re just regular people who like being together.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Clip src="/video/reel-oct27.mp4" poster="/posters/reel-oct27-poster.jpg" title="A Sunday at Kingsway: greeting in the foyer, singing, and a birthday" caption="A Sunday in October" />
                <Clip src="/video/bible-giveaway.mp4" poster="/posters/bible-giveaway-poster.jpg" title="Our young people inviting the town to the free Bible giveaway" caption="The Bible giveaway invitation" />
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7 lg:mt-0 lg:grid-cols-3">
              {life.map((p, i) => (
                <div key={p.src} className={`relative overflow-hidden bg-sand ${i % 5 === 0 ? "aspect-[3/4] sm:row-span-2 sm:aspect-auto" : "aspect-square"}`} data-reveal={String(i % 3)}>
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- watch */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-5" data-reveal>
            <Link href="/watch" className="caps flex items-center gap-3 text-orange underline-offset-4 hover:underline">
              <span className="live-dot" aria-hidden /> Streamed every Sunday
            </Link>
            <h2 className="display mt-3 text-[clamp(2.4rem,5vw,4.4rem)] text-ink">Bad weather? Out of town? Too sick to come?</h2>
            <p className="lede mt-5 max-w-xl text-ink-soft">
              Jump on our live stream and be part of the service from wherever you are. Both Sunday services go out on YouTube, morning around 11:30 and evening around 6:30, and every one stays up afterward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/watch" className="btn btn-ink">
                Recent services
              </Link>
              <a href={church.youtube} target="_blank" rel="noopener" className="btn btn-line-ink">
                Our YouTube channel
              </a>
            </div>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0" data-reveal="1">
            <YouTube id={latest.id} title={`${latest.title} · ${longDate(latest.date)}`} big />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ events */}
      {events.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="caps text-orange" data-reveal>
              Coming up
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {events.map((e, i) => {
                const d = dateParts(e.startsAt);
                return (
                  <article key={e.id} className="flex gap-6 border border-line bg-white p-6" data-reveal={String(i)}>
                    <div className="shrink-0 text-center">
                      <p className="caps !text-[0.6rem] text-orange">{d.month}</p>
                      <p className="display text-5xl text-ink">{d.day}</p>
                    </div>
                    <div>
                      <h3 className="display-light text-3xl text-ink">{e.title}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {e.day} · {e.time} · {e.where}
                      </p>
                      <p className="mt-3 text-[0.98rem] text-ink-soft">{e.summary}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- close */}
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-dusk-900 text-white">
        <Image src="/photos/exterior-day.jpg" alt="The front of Kingsway Baptist Church on a sunny day, the orange crown logo on the brick wall" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dusk-950/85 via-dusk-950/40 to-transparent" />
        {/* fades the photo into the footer below */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-dusk-950" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="caps on-photo text-orange-soft">744 Kings Highway · Mickleton, NJ 08056</p>
          <h2 className="display on-photo mt-3 max-w-3xl text-[clamp(2.6rem,6vw,5.4rem)]">We would be delighted to have you join us.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-orange">
              Get in touch
            </Link>
            <a href={church.mapsUrl} target="_blank" rel="noopener" className="btn btn-line">
              Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
