import type { Metadata } from "next";
import { Suspense } from "react";
import { PlainHead } from "@/components/PageHead";
import Phone from "@/components/Phone";
import { ContactForm, PrayerForm } from "@/components/SiteForms";
import { church, schedule } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kingsway Baptist Church, 744 Kings Highway, Mickleton, NJ 08056. Send a message or a prayer request, or call the church.",
};

export default function Contact() {
  return (
    <>
      <PlainHead kicker="Contact" title="We look forward to hearing from you." intro="If you have a question, please feel free to contact us. You may call in, send a note, or leave a prayer request." />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 lg:pt-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <div className="border border-line bg-white p-7 sm:p-9" data-reveal>
              <p className="caps text-orange">Send a message</p>
              <h2 className="display-light mt-2 text-3xl text-ink">Ask anything.</h2>
              <div className="mt-6">
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
            <div id="prayer" className="mt-8 scroll-mt-24 border-2 border-orange bg-white p-7 sm:p-9" data-reveal>
              <p className="caps text-orange">Prayer request</p>
              <h2 className="display-light mt-2 text-3xl text-ink">How can we pray for you?</h2>
              <p className="mt-2 text-ink-soft">Our prayer ministry meets every Wednesday night. Requests marked confidential go to the pastor only.</p>
              <div className="mt-6">
                <PrayerForm />
              </div>
            </div>
          </div>

          <aside className="mt-12 space-y-8 lg:col-span-5 lg:mt-0" data-reveal="1">
            <div>
              <p className="caps text-orange">Find us</p>
              <address className="display-light mt-2 text-3xl not-italic text-ink">
                {church.street}
                <br />
                {church.city}, {church.stateCode} {church.zip}
              </address>
              <p className="mt-2 text-sm text-muted">On the Kings Highway in East Greenwich Township, Gloucester County.</p>
              <p className="mt-4 flex flex-wrap gap-3">
                <a href={church.mapsUrl} target="_blank" rel="noopener" className="btn btn-ink">
                  Directions
                </a>
                <Phone className="btn btn-line-ink" fallback="Call the church" />
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-sand">
              <iframe
                src={church.mapsEmbed}
                title="Map to Kingsway Baptist Church"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div>
              <p className="caps text-orange">Services</p>
              <ul className="mt-3 divide-y divide-line border-y border-line">
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
            </div>
            <div>
              <p className="caps text-orange">Keep in touch</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={church.facebook} target="_blank" rel="noopener" className="btn btn-line-ink">
                  Facebook
                </a>
                <a href={church.instagram} target="_blank" rel="noopener" className="btn btn-line-ink">
                  Instagram
                </a>
                <a href={church.youtube} target="_blank" rel="noopener" className="btn btn-line-ink">
                  YouTube
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
