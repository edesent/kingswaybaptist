import type { Metadata } from "next";
import Image from "next/image";
import { PlainHead } from "@/components/PageHead";
import { giving } from "@/lib/site";

export const metadata: Metadata = {
  title: "Giving",
  description: "Give to Kingsway Baptist Church, Mickleton NJ, through Planning Center: online, by text to 84321, or in the Church Center app.",
};

export default function Give() {
  return (
    <>
      <PlainHead kicker="Giving" title="Thank you for giving." intro="God provides for the ministry of our church through your tithes and offerings, and He uses your giving to missionaries to help spread the Gospel around the world." />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 lg:pt-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7" data-reveal>
            <p className="lede text-ink">
              It’s more than keeping the lights on and the gears turning. It’s about personal worship to God and handing Him back what He already owns, and it’s about lives being changed through the transformative power of Jesus Christ in our region and beyond.
            </p>
            <p className="verse mt-8 text-2xl text-ink sm:text-3xl">
              “But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee.”
            </p>
            <p className="caps mt-3 !text-[0.66rem] text-orange">I Chronicles 29:14</p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <a href={giving.online} target="_blank" rel="noopener" className="group border-2 border-orange bg-white p-6 transition hover:bg-orange hover:text-white">
                <p className="caps !text-[0.62rem] text-orange group-hover:text-white">Online</p>
                <p className="display-light mt-2 text-3xl">Give here</p>
                <p className="mt-2 text-sm opacity-80">A secure link on your phone or computer, through Planning Center.</p>
              </a>
              <div className="border border-line bg-white p-6">
                <p className="caps !text-[0.62rem] text-orange">Text to give</p>
                <p className="display-light mt-2 text-3xl">Text {giving.textNumber}</p>
                <p className="mt-2 text-sm text-ink-soft">Text any amount to {giving.textNumber}. You’ll get a text back to set up your phone, which takes about two minutes.</p>
              </div>
              <div className="border border-line bg-white p-6">
                <p className="caps !text-[0.62rem] text-orange">Church Center app</p>
                <p className="display-light mt-2 text-3xl">In the app</p>
                <p className="mt-2 text-sm text-ink-soft">
                  Give, and see events and small groups.{" "}
                  <a href={giving.churchCenterIos} target="_blank" rel="noopener" className="font-semibold text-orange underline-offset-4 hover:underline">
                    iOS
                  </a>{" "}
                  ·{" "}
                  <a href={giving.churchCenterAndroid} target="_blank" rel="noopener" className="font-semibold text-orange underline-offset-4 hover:underline">
                    Android
                  </a>
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-[0.95rem] text-muted">
              We use Planning Center, one of the leading church management services, to care for our donation records securely. Because we want to be a good steward of your money and God’s money, please consider an ACH withdrawal from your bank account when you set up: the fees are substantially lower than a debit or credit card. Of course, the offering plate still comes by on Sunday.
            </p>
          </div>
          <div className="mt-12 lg:col-span-5 lg:mt-0" data-reveal="1">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image src="/photos/candle.jpg" alt="A lit candle held in two hands during a service" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
