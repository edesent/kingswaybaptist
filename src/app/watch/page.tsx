import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import YouTube from "@/components/YouTube";
import { longDate } from "@/lib/dates";
import { church, streams } from "@/lib/site";

export const metadata: Metadata = {
  title: "Watch",
  description:
    "Kingsway Baptist Church streams every Sunday morning and evening service on YouTube. Watch live, or catch up on recent services from Mickleton, NJ.",
};

export default function Watch() {
  const [latest, ...rest] = streams;
  return (
    <>
      <PageHead
        kicker="Watch"
        title="Every service, live and after."
        intro="Kingsway streams to YouTube every Sunday morning and evening at approximately 11:30 AM and 6:30 PM. Catch up on anything you missed, or share a message with family and friends."
        photo="/photos/preaching-young.jpg"
        alt="A preacher at the pulpit at Kingsway, arms open, mid-sentence"
        position="center 25%"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`${church.youtube}/live`} target="_blank" rel="noopener" className="btn btn-orange">
            <span className="live-dot !bg-white" aria-hidden /> Watch live on YouTube
          </a>
          <a href={church.youtube} target="_blank" rel="noopener" className="btn btn-line">
            Subscribe to the channel
          </a>
        </div>
      </PageHead>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="caps text-orange" data-reveal>
            Most recent
          </p>
          <h2 className="display mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink" data-reveal>
            {latest.title} · {longDate(latest.date)}
          </h2>
          <div className="mt-8" data-reveal="1">
            <YouTube id={latest.id} title={`${latest.title}, ${longDate(latest.date)}`} big />
          </div>

          <p className="caps mt-16 text-orange" data-reveal>
            Recent services
          </p>
          <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <div key={s.id} data-reveal={String(i % 3)}>
                <YouTube id={s.id} title={s.title} />
                <p className="mt-3 text-sm text-muted">
                  {longDate(s.date)}
                  {s.who && ` · ${s.who}`}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-ink-soft">
            Nearly 700 services and messages are on{" "}
            <a href={`${church.youtube}/streams`} target="_blank" rel="noopener" className="font-semibold text-orange underline-offset-4 hover:underline">
              our YouTube channel
            </a>
            , going back to 2018. If you are a new visitor curious about our church family, peruse the archive at your leisure to learn more about us.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="border border-line bg-white p-7" data-reveal>
            <p className="caps text-orange">Series</p>
            <h2 className="display-light mt-2 text-3xl text-ink">What’s the Big Deal About the KJV?</h2>
            <p className="mt-3 text-ink-soft">Seven episodes on why we hold the King James Bible to be the preserved Word of God.</p>
            <Link href="/kjv" className="btn btn-ink mt-6">
              Watch the series
            </Link>
          </div>
          <div className="border border-line bg-white p-7" data-reveal="1">
            <p className="caps text-orange">The gospel</p>
            <h2 className="display-light mt-2 text-3xl text-ink">Did you know there is a penalty for sin?</h2>
            <p className="mt-3 text-ink-soft">God offers salvation as a free gift. Read how to receive it, and watch five short messages on the same page.</p>
            <Link href="/free-gift" className="btn btn-orange mt-6">
              The free gift
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
