import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Clip from "@/components/Clip";
import PageHead from "@/components/PageHead";
import Phone from "@/components/Phone";
import { church, nursery, schedule } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Here?",
  description:
    "Visiting Kingsway Baptist Church in Mickleton, NJ for the first time: service times, nursery, what to expect, and directions to 744 Kings Highway.",
};

export default function NewHere() {
  return (
    <>
      <PageHead
        kicker="New here?"
        title="Come as you are and let God work on you."
        intro="We understand that visiting a church can be intimidating, but we want everyone to feel welcome and at home."
        photo="/photos/screenshot-2026-11-11-at-1-08-53-pm.png"
        alt="A warm handshake between two men at the church doors at Kingsway"
        position="center 30%"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <div className="prose-church lg:col-span-7" data-reveal>
            <p className="lede text-ink">
              We’re not perfect; everyone here is a work in progress and seeks to grow in grace. We don’t evaluate you when you walk in; we’re simply glad to see you! Don’t worry about fitting in or measuring up. Our church family is diverse, so there’s no need to conform.
            </p>
            <p className="text-ink-soft">
              We’re not interested in “religion.” Honestly, religion has let many people down. Religious structures and systems can be confusing, complicated, and disconnected from real life. We want to help you move from “religion” into an authentic relationship with God through Jesus Christ. If you’re new to this, that’s okay. We’d be happy to show you where to start.
            </p>
            <p className="text-ink-soft">
              We speak plain English and worship God through Jesus Christ. We study the Bible and encourage each other in simple terms that you can connect to your daily life. We believe and teach what the Bible actually says and why it matters. No pointless traditions, no archaic languages, no droning or irrelevant lectures, no pious arrogance. We open the Bible and apply it to real life in the twenty-first century.
            </p>
            <p className="text-ink-soft">
              We’re just regular people. “Religious” people often come across as contrived, artificial, and argumentative. You won’t find that at our church. We’re just friendly, hardworking people who are looking for encouragement and good friends who also have faith in Jesus Christ.
            </p>
          </div>
          <aside className="mt-12 lg:col-span-5 lg:mt-0" data-reveal="1">
            <div className="border border-line bg-white p-7">
              <p className="caps text-orange">When we meet</p>
              <ul className="mt-4 divide-y divide-line">
                {schedule.map((s) => (
                  <li key={s.name} className="flex items-baseline justify-between gap-4 py-3">
                    <span>
                      <span className="font-semibold text-ink">{s.name}</span>
                      <span className="block text-sm text-muted">{s.day}s</span>
                    </span>
                    <span className="display-light text-2xl text-ink">{s.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">{nursery}</p>
              <p className="mt-4 text-sm text-ink-soft">
                {church.street}, {church.city}, {church.stateCode} {church.zip}.{" "}
                <a href={church.mapsUrl} target="_blank" rel="noopener" className="font-semibold text-orange underline-offset-4 hover:underline">
                  Directions
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="caps text-orange" data-reveal>
            What to expect
          </p>
          <h2 className="display mt-3 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] text-ink" data-reveal="1">
            Hymns, an open Bible, and people who’ll remember your name.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Sunday School first",
                b: "At 10 AM we split into classes for every age and dig into the Bible together. Morning service follows at 11, and we’re back at 6 for the evening service.",
                src: "/photos/hymnbook.jpg",
                alt: "Hands holding an open hymnbook",
              },
              {
                t: "Singing from the hymnbook",
                b: "We express our devotion to the Lord through hymns and spiritual songs, with the piano, guitars, violin and mandolin from our own families.",
                src: "/photos/singers-trio.jpg",
                alt: "Three singers with microphones on the platform",
              },
              {
                t: "Straight, practical preaching",
                b: "Sound biblical preaching from the King James Bible, with practical application to your daily life. Bring your Bible, or use one from the pew.",
                src: "/photos/img-6236.jpeg",
                alt: "Pastor Ryman preaching from the pulpit at Kingsway under the Christ Our Hope banner",
                pos: "center 28%",
              },
              {
                t: "A nursery and a discipleship program",
                b: "A clean, safe nursery for ages 3 and under on Sunday mornings. For new believers, a discipleship program to get grounded in God’s Word.",
                src: "/photos/kids-crafts.jpg",
                alt: "Children working on crafts",
              },
            ].map((c, i) => (
              <div key={c.t} data-reveal={String(i)}>
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image src={c.src} alt={c.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <h3 className="display-light mt-5 text-2xl text-ink">{c.t}</h3>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper">
        <div className="road absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-7" data-reveal>
            <p className="caps text-orange">Be our guest</p>
            <h2 className="display mt-3 text-[clamp(2.4rem,5vw,4.4rem)] text-ink">Questions before you come? Just ask.</h2>
            <p className="lede mt-5 max-w-xl text-ink-soft">
              Call the church, send a note, or message us on Facebook. If you’d like someone to meet you at the door on your first Sunday, say so and we will.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?topic=Planning%20a%20visit" className="btn btn-orange">
                Tell us you’re coming
              </Link>
              <Phone className="btn btn-line-ink" fallback="Call the church" />
            </div>
          </div>
          <div className="mx-auto mt-12 w-60 lg:col-span-5 lg:mx-0 lg:mt-0 lg:w-72 lg:justify-self-end" data-reveal="1">
            <Clip src="/video/be-our-guest.mp4" poster="/posters/be-our-guest-poster.jpg" title="Be our guest at KBC" caption="“See you at KBC.”" />
          </div>
        </div>
      </section>
    </>
  );
}
