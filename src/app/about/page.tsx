import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import YouTube from "@/components/YouTube";
import { church, droneVideoId, leaders, pastor } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The history and leadership of Kingsway Baptist Church, Mickleton NJ: founded in 1975 by Pastor Jim Fish, our building on the Kings Highway since Easter 1979, and Pastor Samson Ryman today.",
};

const timeline = [
  ["1975", "Pastor Jim Fish and his family of nine (at the time) move from Michigan to Gloucester County to plant a Bible-believing church. The first service is held November 28, the Sunday after Thanksgiving."],
  ["1975–77", "For 19 months we rent the Seventh-Day Adventist church in Woodbury, then the Little Red Schoolhouse in Mickleton and the Mt. Royal Fire Hall."],
  ["1977", "Six acres on the Kings Highway are bought from a Mr. Heritage, paid for in cash. $150,000 in bonds to build the church sells in a day and a half."],
  ["1979", "Easter Sunday: the first service in our own building."],
  ["2015", "Pastor Fish retires after forty years. Josh Miller follows him as the second pastor, serving until January 2024."],
  ["2025", "Pastor Samson Ryman is elected the third pastor of Kingsway on January 12."],
];

export default function About() {
  return (
    <>
      <PageHead
        kicker="About Kingsway"
        title="A church on the Kings Highway for fifty years."
        intro="A local, autonomous, Bible-believing congregation, teaching and preaching the principles of a New Testament church."
        photo="/photos/sanctuary.jpg"
        alt="The sanctuary at Kingsway full for a service, with the crown and cross on the platform wall"
        position="center 45%"
      />

      {/* history */}
      <section id="history" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-5" data-reveal>
            <p className="caps text-orange">Our history</p>
            <h2 className="display mt-3 text-[clamp(2.4rem,5vw,4.4rem)] text-ink">It started with a burden and seven children in the car.</h2>
            <div className="prose-church mt-6 text-ink-soft">
              <p>
                With a burden in his heart and encouragement from his pastor, Paul Vanaman of Dixie Baptist Church in Clarkston, Michigan, Pastor Jim Fish felt the Lord wanted him to start a church in southern New Jersey. In September 1975 he and Mrs. Fish arrived with their seven children (at the time). The inaugural service was the week after Thanksgiving.
              </p>
              <p>
                For forty years Pastor Fish was faithful to the Lord, his family and his church. A 1974 graduate of Midwestern Bible College, he was known for preaching straight, practical messages that helped many Christians grow in the Word and in faith. He and Mrs. Fish are the parents of ten children and many, many grandchildren and great-grandchildren.
              </p>
            </div>
          </div>
          <ol className="mt-12 lg:col-span-7 lg:mt-0">
            {timeline.map(([y, t], i) => (
              <li key={y} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-line py-6 sm:grid-cols-[8rem_1fr]" data-reveal={String(i % 3)}>
                <span className="display text-3xl text-orange sm:text-4xl">{y}</span>
                <p className="text-[0.98rem] text-ink-soft">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* the building */}
      <section className="bg-dusk-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5" data-reveal>
              <p className="caps text-orange-soft">Our building</p>
              <h2 className="display mt-3 text-[clamp(2.4rem,5vw,4.4rem)]">Six acres, a white steeple, and room for the whole family.</h2>
              <p className="mt-5 max-w-xl text-white/80">
                You’ll find us on the Kings Highway in Mickleton, in East Greenwich Township. Red brick, a white steeple, a sanctuary with white pews and brass chandeliers, a fellowship hall, and a back field big enough for games and a tent dinner.
              </p>
              <a href={church.mapsUrl} target="_blank" rel="noopener" className="btn btn-line mt-8">
                Directions
              </a>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0" data-reveal="1">
              <YouTube id={droneVideoId} title="Kingsway from the air: a drone flyover of the church and grounds" big />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["/photos/life/exterior-summer.jpg", "The brick front of the church with its white steeple on a summer afternoon"],
              ["/photos/life/exterior-snow.jpg", "The church after a snowfall, seen through bare trees"],
              ["/photos/life/exterior-blue-hour.jpg", "The lit steeple at dusk"],
              ["/photos/life/tulips.jpg", "Red tulips by the stone wall along the drive"],
            ].map(([src, alt], i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden bg-dusk-800" data-reveal={String(i)}>
                <Image src={src} alt={alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* leadership */}
      <section id="leadership" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="caps text-orange" data-reveal>
            Our leadership
          </p>
          <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5" data-reveal>
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image src={pastor.photo} alt={pastor.photoAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[50%_30%]" />
              </div>
              <p className="mt-3 text-sm text-muted">Pastor Ryman on a Sunday morning at Kingsway.</p>
            </div>
            <div className="prose-church mt-10 lg:col-span-7 lg:mt-0" data-reveal="1">
              <h2 className="display text-[clamp(2.4rem,5vw,4.4rem)] text-ink">{pastor.name}</h2>
              <p className="caps mt-2 !text-[0.66rem] text-orange">Pastor · elected {pastor.since}</p>
              <p className="mt-6 text-ink-soft">
                Pastor Samson Ryman was elected as the pastor of Kingsway Baptist Church on January 12, 2025. Prior to joining Kingsway, he served as a full-time evangelist from July 2023 to January 2025. Before that, he pastored Central Bible Baptist Church in Massena, New York, from July 2013 to July 2023. From 2001 to 2013, he worked as the youth pastor and also did associate work for Faith Baptist Church of Smyrna, Delaware, under his father, Dr. Alan Ryman, for a period of twelve years.
              </p>
              <p className="text-ink-soft">
                Pastor Ryman, deeply passionate about teaching men to grow biblically and spiritually, finds his life verse in II Timothy 2:2-4. With a genuine concern for teens, he possesses a unique ability to connect with them. Pastor Ryman manages two family and youth camps, one in West Chazy, New York, and the other in San Antonio, Texas, and he preaches at youth rallies.
              </p>
              <p className="text-ink-soft">
                Pastor Ryman and his wife, Linnet Ryman, have been married since 1997 and have been blessed with four grown children: Israel, Isabel, Juliet, and Grace.
              </p>
              <h3 className="display-light mt-10 text-3xl text-ink">Mrs. Linnet Ryman</h3>
              <p className="text-ink-soft">
                With a deep passion for children’s and women’s ministry, Mrs. Ryman has dedicated her life to serving others. Over the past 25 years she has taught Sunday school to elementary children and teen girls, led ladies’ Bible classes, and planned and run numerous large ladies’ events. She has also served in the church’s media, food services, decorating, and as church secretary, and she holds a certificate in biblical counseling.
              </p>
              <h3 className="display-light mt-10 text-3xl text-ink">Israel, Isabel, Juliet and Grace</h3>
              <p className="text-ink-soft">
                The Ryman children have sung special music, run the sound system, cleaned the church, decorated, set up for events and camps, and cooked and served at them. Israel served ten years as song leader, preaches whenever possible, plays the guitar, and has taught Sunday School. Isabel, Juliet, and Grace have helped in the nursery and play piano, violin, and mandolin.
              </p>
              <p className="text-ink-soft">
                Pastor and Mrs. Ryman graduated from Bible college in 2001. Their family’s shared passion is to see people accept Jesus Christ as their personal Savior and grow in their faith daily through believing, understanding, and applying God’s Word.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l, i) => (
              <div key={l.name} className="border-l-2 border-orange pl-5" data-reveal={String(i)}>
                <h3 className="display-light text-3xl text-ink">{l.name}</h3>
                <p className="mt-1 text-[0.95rem] text-ink-soft">{l.role}</p>
              </div>
            ))}
            <div className="border-l-2 border-line pl-5" data-reveal="2">
              <h3 className="display-light text-3xl text-ink">Pastor Jim Fish</h3>
              <p className="mt-1 text-[0.95rem] text-ink-soft">Founding pastor, 1975–2015</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-14 sm:px-6 lg:px-8">
          <div>
            <p className="caps text-orange">What we believe</p>
            <p className="display-light mt-2 text-3xl text-ink">The King James Bible, salvation by grace, and a New Testament church.</p>
          </div>
          <Link href="/beliefs" className="btn btn-ink">
            Our statement of faith
          </Link>
        </div>
      </section>
    </>
  );
}
