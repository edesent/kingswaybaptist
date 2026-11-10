import type { Metadata } from "next";
import Link from "next/link";
import { PlainHead } from "@/components/PageHead";
import YouTube from "@/components/YouTube";
import { kjvExtra, kjvSeries } from "@/lib/site";

export const metadata: Metadata = {
  title: "What’s the Big Deal About the KJV?",
  description: "Brother Sam Gipp’s seven-part video series on why Kingsway Baptist Church holds the King James Bible to be the preserved Word of God for English-speaking people.",
};

export default function KJV() {
  return (
    <>
      <PlainHead
        kicker="The King James Bible"
        title="What’s the big deal about the KJV?"
        intro="Brother Sam Gipp’s seven-part series on why the King James Bible is the only version accepted and used in the ministries of this church."
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 lg:pt-20 sm:px-6 lg:px-8">
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
          <div className="mt-16 border-t border-line pt-12 lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:pr-6" data-reveal>
              <p className="caps text-orange">One more to watch</p>
              <h2 className="display-light mt-2 text-3xl text-ink">KJV vs. NKJV</h2>
              <p className="mt-3 text-ink-soft">The pilot episode of VERSES from {kjvExtra.from}. It isn’t part of Brother Gipp’s series.</p>
            </div>
            <div className="mt-6 lg:mt-0" data-reveal="1">
              <YouTube id={kjvExtra.id} title={kjvExtra.title} />
            </div>
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
