import type { Metadata } from "next";
import Link from "next/link";
import { PlainHead } from "@/components/PageHead";
import YouTube from "@/components/YouTube";
import { kjvSeries } from "@/lib/site";

export const metadata: Metadata = {
  title: "What’s the Big Deal About the KJV?",
  description: "A seven-part video series from Kingsway Baptist Church on why we hold the King James Bible to be the preserved Word of God for English-speaking people.",
};

export default function KJV() {
  return (
    <>
      <PlainHead
        kicker="The King James Bible"
        title="What’s the big deal about the KJV?"
        intro="A seven-part series from our pastor on why the King James Bible is the only version accepted and used in the ministries of this church."
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <p className="verse max-w-3xl text-2xl text-ink sm:text-3xl" data-reveal>
            “The words of the LORD are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O LORD, thou shalt preserve them from this generation for ever.”
          </p>
          <p className="caps mt-3 !text-[0.66rem] text-orange" data-reveal>
            Psalm 12:6-7
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kjvSeries.map((v, i) => (
              <div key={v.id} data-reveal={String(i % 3)}>
                <YouTube id={v.id} title={`What’s the Big Deal About the KJV? Episode ${v.episode}`} />
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/beliefs" className="btn btn-line-ink">
              Our statement of faith
            </Link>
            <Link href="/watch" className="btn btn-ink">
              Watch a Sunday service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
