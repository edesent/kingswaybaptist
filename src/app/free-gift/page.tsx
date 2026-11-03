import type { Metadata } from "next";
import Link from "next/link";
import { PlainHead } from "@/components/PageHead";
import YouTube from "@/components/YouTube";
import { gospelVideos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Gift",
  description:
    "Did you know there is a penalty for sin? God offers salvation as a free gift through Jesus Christ. How to receive it, from Kingsway Baptist Church, Mickleton NJ.",
};

const steps = [
  {
    t: "Admit that you are a sinner",
    v: [
      ["For all have sinned, and come short of the glory of God.", "Romans 3:23"],
      ["Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned.", "Romans 5:12"],
      ["As it is written, There is none righteous, no, not one.", "Romans 3:10"],
    ],
  },
  {
    t: "Believe that Jesus Christ died for your sin",
    v: [
      ["But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.", "Romans 5:8"],
      ["This is a faithful saying, and worthy of all acceptation, that Christ Jesus came into the world to save sinners.", "I Timothy 1:15"],
      ["For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; and that he was buried, and that he rose again the third day according to the scriptures.", "I Corinthians 15:3-4"],
    ],
  },
  {
    t: "Receive Jesus Christ as your personal Saviour",
    v: [
      ["But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.", "John 1:12"],
      ["For whosoever shall call upon the name of the Lord shall be saved.", "Romans 10:13"],
    ],
  },
];

export default function FreeGift() {
  return (
    <>
      <PlainHead kicker="Free gift" title="Did you know that there is a penalty for sin?" intro="That’s right. Just as man demands punishment for crime, God demands a punishment for sin." />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7" data-reveal>
            <p className="verse text-2xl text-ink sm:text-3xl">
              “For the wages of sin is death…” <span className="caps !text-[0.62rem] text-orange">Romans 6:23</span>
            </p>
            <p className="verse mt-4 text-2xl text-ink sm:text-3xl">
              “And death and hell were cast into the lake of fire. This is the second death. And whosoever was not found written in the book of life was cast into the lake of fire.”{" "}
              <span className="caps !text-[0.62rem] text-orange">Revelation 20:14-15</span>
            </p>
            <p className="lede mt-8 text-ink">
              But God, in His mercy and through His grace, gave His Son, Jesus Christ, to die on the cross to pay the penalty for us. He now offers salvation from hell as a free gift, without any works on our part, to anyone who will accept it. In order to accept this gift, you must:
            </p>

            <ol className="mt-10 space-y-10">
              {steps.map((s, i) => (
                <li key={s.t} className="grid gap-4 border-t border-line pt-6 sm:grid-cols-[4rem_1fr]" data-reveal={String(i)}>
                  <span className="display text-5xl text-orange">{i + 1}</span>
                  <div>
                    <h2 className="display-light text-3xl text-ink">{s.t}</h2>
                    <ul className="mt-4 space-y-3">
                      {s.v.map(([text, ref]) => (
                        <li key={ref} className="text-ink-soft">
                          “{text}” <span className="caps !text-[0.6rem] text-orange">{ref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-10 text-ink-soft">
              <strong className="text-ink">Whosoever</strong> includes you. <strong className="text-ink">Shall be saved</strong> means not maybe, nor can, but shall be saved.
            </p>
            <p className="mt-4 text-ink-soft">
              Right now, if you’ve never accepted Jesus Christ as your personal Saviour and you would like to, simply go to God in prayer. If you’re not sure how to pray, you might pray something like this:
            </p>
            <blockquote className="verse mt-6 border-l-4 border-orange bg-cream p-6 text-xl text-ink sm:text-2xl">
              “Dear God, I know that I am a sinner. I believe that Jesus Christ was my substitute when He died on the cross. I believe that His shed blood, death, burial, and resurrection were for me. I now receive Him as my Saviour. Thank you for the forgiveness of my sins, the gift of salvation, and everlasting life, because of your grace. In Jesus’ name I pray, Amen.”
            </blockquote>
            <p className="mt-6 text-ink-soft">
              These are not some magical words that you repeat to get to heaven. They’re just an example of what you might pray to God if you honestly believe it and want to be saved.
            </p>
            <div className="mt-8 border-2 border-orange bg-white p-6">
              <p className="display-light text-2xl text-ink">If you have received Christ as a result of this message, please let us know.</p>
              <p className="mt-2 text-ink-soft">We’ll be glad to pray for you and answer any questions you might have.</p>
              <Link href="/contact?topic=The%20free%20gift%20of%20salvation" className="btn btn-orange mt-5">
                Tell us
              </Link>
            </div>
          </div>

          <aside className="mt-14 lg:col-span-5 lg:mt-0" data-reveal="1">
            <p className="caps text-orange">Watch</p>
            <p className="mt-2 text-ink-soft">Five short messages on the same good news.</p>
            <div className="mt-5 grid gap-4">
              {gospelVideos.map((id, i) => (
                <YouTube key={id} id={id} title={`The free gift, message ${i + 1}`} />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
