import type { Metadata } from "next";
import Link from "next/link";
import { PlainHead } from "@/components/PageHead";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "The statement of faith of Kingsway Baptist Church, Mickleton NJ: the King James Bible as the preserved Word of God, salvation by grace through faith, eternal security, and the independence of the local church.",
};

const articles: { t: string; b: string; refs: string }[] = [
  {
    t: "The Holy Scriptures",
    b: "We believe in the holy Scripture: accepting fully the writings of the Old and New Testaments as the inerrant Word of God, verbally inspired in all parts and therefore altogether sufficient as our only infallible and authoritative rule of faith and practice. We believe the King James Bible is the preserved word of God for English-speaking people and is the only version that is accepted and used in the ministries of this church.",
    refs: "Psalm 119:160; Proverbs 30:5a; II Timothy 3:16, 17; II Peter 1:19-21; Psalm 12:6-7",
  },
  {
    t: "One True God",
    b: "We believe in the one true God: who is an intelligent, sovereign, spiritual and personal Being; perfect, infinite, and eternal in His being, holiness and love, wisdom and power; absolutely separate from and above the world as its Creator, yet everywhere present in the world as the Upholder of all things. He is revealed to us as Father, Son, and Holy Spirit, three distinct persons but without division of nature, essence or being, and each having a distinct ministry in God’s relation to His creation and people.",
    refs: "Genesis 1:1; Exodus 15:11; Psalm 83:18; 139:7-9; Matthew 28:19; John 10:30; 15:26",
  },
  {
    t: "The Lord Jesus Christ",
    b: "We believe in the Lord Jesus Christ: who is the second Person of the Triune God, the eternal Word and Only Begotten Son; that without any change in His divine Person, He became man by miracle of the virgin birth, thus to continue forever as both true God and true Man, one Person with two natures; that as Man He was tempted in all points as we are, yet without sin; that as the perfect Lamb of God He gave Himself in death by the shedding of His blood upon the cross, bearing there the sin of the world, and suffering its full penalty of divine wrath in our stead; that He arose from the grave in a glorified body; that as our great High Priest He ascended into Heaven, there to appear before the face of God as our Advocate and Intercessor.",
    refs: "John 1:1, 14; 3:16; Matthew 1:18-25; Galatians 4:4, 5; Philippians 2:6-10; I Corinthians 15:3-7; Hebrews 4:14-16; I John 2:1, 2",
  },
  {
    t: "The Holy Spirit",
    b: "We believe in the Holy Spirit: who is the Third Person of the Trinity, and the divine Agent in nature, revelation and redemption; that He convicts the world concerning sin, righteousness and judgment; that He regenerates, indwells, baptizes, seals and anoints all who become children of God through Christ; that He further empowers, guides, teaches, sanctifies and fills believers who daily surrender to Him.",
    refs: "John 3:5; 14:16, 17, 26; 16:7-14; Romans 8:9; I Corinthians 12:13; II Corinthians 3:18; Ephesians 1:13; 5:18",
  },
  {
    t: "The Fallen Nature of Man",
    b: "We believe all men are lost by nature and choose to sin: that man was the direct creation of God, made in His image and likeness; that by personal disobedience to the revealed will of God, man became a sinful creature, the father of a fallen race which is universally sinful in both nature and practice, thus alienated from the life and family of God, under the righteous judgment and wrath of God, and has within himself no possible means of salvation.",
    refs: "Genesis 1:27; 3:6; Psalm 51:5; Romans 3:23; 5:12, 19; Galatians 3:11",
  },
  {
    t: "Salvation",
    b: "We believe in salvation by grace through faith: that salvation is the free gift of God, neither merited nor secured in part or in whole by any virtue or work of man, but received only by personal faith in the Lord Jesus Christ and His work of redemption through His death, burial, and resurrection, in whom all true believers have as a present possession the gift of eternal life, a perfect righteousness, sonship in the family of God, deliverance and security from eternal condemnation, every spiritual resource needed for life and godliness, and the divine guarantee that they shall never perish; that this salvation affects the whole man; that apart from Christ there is no possible salvation.",
    refs: "Ephesians 2:8, 9; Titus 3:5; John 1:12; 3:14; 10:28, 29; Romans 8:1; Philippians 1:6; I Corinthians 15:1-4",
  },
  {
    t: "Eternal Security",
    b: "We believe that all the redeemed, once saved, are kept by God’s power and are thus secure in Christ forever.",
    refs: "John 6:37-40; 10:27-30; Romans 8:1, 38-39; I Corinthians 1:4-8; I Peter 1:4-5",
  },
  {
    t: "Righteous Living and Godly Works",
    b: "We believe in righteous living and godly works for the saved: not as a means of salvation in any sense, but as its proper evidence and fruit, as ordained by God; and therefore as Christians we should obey the Word of our Lord, seek the things which are above, walk as He walked, accept as our solemn responsibility the duty and privileges of bearing the gospel to a lost world; remembering that a victorious and fruitful Christian life is possible only for those who in gratitude for the infinite and undeserved mercies of God have presented themselves wholly to Christ.",
    refs: "Ephesians 2:10; Romans 12:1, 2; Philippians 2:16",
  },
  {
    t: "Satan",
    b: "We believe in the existence of Satan: who originally was created a holy and perfect being, but through pride and wicked ambition rebelled against God, thus becoming utterly depraved in character, the great adversary of God and His people, the leader of all other evil angels and wicked spirits, the deceiver and god of this present world; that his powers are vast, but strictly limited by the permissive will of God who overrules all his wicked devices for good; that he was defeated and judged at the cross, and therefore his final doom is certain; that we are able to resist and overcome him only in the armor of God, by the blood of the Lamb and through the power of the Holy Spirit.",
    refs: "Isaiah 14:12-15; Ephesians 6:12; I Peter 5:8; I John 3:8; Colossians 1:13-14",
  },
  {
    t: "The Second Coming of Christ",
    b: "We believe in the second coming of Christ: that His coming in the air to rapture His Church, which is our blessed Hope, is always imminent; that when He has first by resurrection of the dead and translation of the living removed from the earth His waiting Church, He will then pour out the righteous judgments of God upon the unbelieving world and afterwards return bodily to the earth and establish His glorious and literal kingdom in Jerusalem, over all the nations for a thousand years.",
    refs: "I Thessalonians 4:13-18; James 5:8; Hebrews 10:37; Jude 14, 15; Zechariah 14:4; Acts 1:11; Revelation 19:11-16; 20:4-7",
  },
  {
    t: "Future Life, Bodily Resurrection and Eternal Judgment",
    b: "We believe in future life, bodily resurrection and eternal judgment: that the spirits of the saved at death go immediately to be with Christ in Heaven, that their works shall be brought before the Judgment Seat of Christ for the determination of rewards, which will take place at the time when Christ comes for His own; that the spirits of the unsaved at death descend immediately into hell where they are kept under punishment until the final day of judgment, at which time their bodies shall be raised from the grave, that they shall be judged and cast into the Lake of Fire, the place of final and everlasting punishment.",
    refs: "I Corinthians 3:11-15; 15; II Corinthians 5:8-10; Luke 16:19-23; Revelation 20:11-15",
  },
  {
    t: "Separation of Church and State",
    b: "We believe in the separation of church and state, with each having definite and distinct spheres of responsibility.",
    refs: "Matthew 22:21; Romans 13:1-7",
  },
  {
    t: "Priesthood of All Believers",
    b: "We believe in the priesthood of all believers: that Christ is our Great High Priest and through Him every born-again person has direct access into God’s presence without the need of a human priest; that the believer has the right and responsibility to personally study and interpret the Scriptures guided by the Holy Spirit.",
    refs: "John 14:6; Hebrews 4:16; II Timothy 2:15; Ephesians 2:18; 3:12; I Peter 2:1, 5, 9",
  },
  {
    t: "The Institution of the Home",
    b: "We believe in the institution of the home as defined by Scripture: that it was divinely established in the beginning as the union by marriage of one male and one female and is the basic unit of society; that each family member, husband, wife, or child, has distinct duties and responsibilities; that it is the responsibility of parents to train up children in the nurture and admonition of the Lord and to provide them godly instruction through Christian example and formal education.",
    refs: "Genesis 2:18-25; 3:16; 18:19; Deuteronomy 6:4-9; 32:46; Psalm 78:5, 6; 127:1-5; Proverbs 3:12; 13:24; 22:6; Isaiah 28:9, 10; Matthew 19:3-9; Ephesians 5:21-33; 6:1-4; Colossians 3:18-21",
  },
  {
    t: "The Local Church",
    b: "We believe in the importance of the local church: that all believers should assemble and identify themselves in local churches; that a New Testament church is a local assembly of born-again believers united in organization to practice New Testament ordinances, to meet together for worship, prayer, fellowship, teaching and a united testimony, and to actively engage in carrying out the Great Commission.",
    refs: "Acts 2:41, 42; I Corinthians 11:2; II Corinthians 5:18-21; Matthew 28:19-20",
  },
  {
    t: "Independent",
    b: "We believe in the independence and autonomy of the local church: that each New Testament church is free to govern itself without ecclesiastical interference, and should cooperate with other New Testament churches as the Holy Spirit leads; that it is responsible to follow the pattern of the New Testament church and is directly accountable to God.",
    refs: "Matthew 18:17; Acts 6:1-5; 13:1-3; 15:22-23",
  },
  {
    t: "Baptism and the Lord’s Supper",
    b: "We believe the ordinances given to the local church are two, baptism and the Lord’s Supper: that baptism is by immersion of believers, thus portraying the death, burial, and the resurrection of Jesus Christ and the believer’s identification in Christ; that the Lord’s Supper is the partaking of the bread and cup by the believer as a continuing memorial of the broken body and shed blood of Christ.",
    refs: "Acts 2:41; 8:38-39; Matthew 26:26-30; I Corinthians 11:23-34",
  },
];

export default function Beliefs() {
  return (
    <>
      <PlainHead
        kicker="What we believe"
        title="Our statement of faith."
        intro="A brief overview, not exhaustive, of what we believe regarding the major tenets of our faith."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 lg:pt-20 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5" data-reveal>
            <p className="caps text-orange">Core values</p>
            <p className="lede mt-4 text-ink">
              At our church we are dedicated to bringing glory to the Lord Jesus Christ in every aspect of our lives. We firmly believe in the power of God’s Word and strive to uphold its truths in all that we do.
            </p>
            <ul className="mt-6 space-y-4 text-ink-soft">
              <li>
                <strong className="text-ink">Sound biblical preaching.</strong> We diligently preach and teach the doctrines of the Bible, ensuring a deep understanding of God’s Word.
              </li>
              <li>
                <strong className="text-ink">Practical application.</strong> We emphasize applying biblical principles to our daily lives, fostering a closer walk with Jesus Christ.
              </li>
              <li>
                <strong className="text-ink">Spiritual growth.</strong> We believe that through obedience to God’s Word, the Holy Spirit empowers us to grow in our faith and become more like Christ each day.
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0" data-reveal="1">
            <div className="border-2 border-orange bg-white p-7 sm:p-9">
              <p className="caps text-orange">In short</p>
              <p className="mt-4 text-ink-soft">
                Kingsway Baptist Church is a local, autonomous, Bible-believing congregation, teaching and preaching the biblical principles of a New Testament church, as taught in the Word of God. We believe the absolute, sole, authoritative rule for faith and practice is the perfect, preserved Word of God, which is the AV 1611 King James Bible (Psalm 12:6-7).
              </p>
              <p className="mt-4 text-ink-soft">
                Our faith is centered on the belief that salvation can only be achieved through Jesus Christ. Any religious person who depends upon the sacraments, the Golden Rule, the church, or the Ten Commandments to justify himself before God will be condemned at the Great White Throne Judgment and banished to the Lake of Fire for trusting their own righteousness instead of the righteousness of Jesus Christ (Romans 4:5).
              </p>
              <Link href="/kjv" className="btn btn-ink mt-6">
                Why the King James Bible?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="road" />
          <ol className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {articles.map((a, i) => (
              <li key={a.t} className="border-t border-line pt-6" data-reveal={String(i % 2)}>
                <p className="caps !text-[0.62rem] text-orange">Article {i + 1}</p>
                <h2 className="display-light mt-2 text-3xl text-ink">{a.t}</h2>
                <p className="mt-3 text-[0.98rem] text-ink-soft">{a.b}</p>
                <p className="verse mt-3 text-lg text-muted">{a.refs}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-14 sm:px-6 lg:px-8">
          <div>
            <p className="caps text-orange-soft">The most important question</p>
            <p className="display-light mt-2 text-3xl">Have you received God’s free gift?</p>
          </div>
          <Link href="/free-gift" className="btn btn-orange">
            Read about the free gift
          </Link>
        </div>
      </section>
    </>
  );
}
