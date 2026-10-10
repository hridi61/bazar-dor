import Image from "next/image";
import BnDate from "./BnDate";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8">
      <div className="grid items-center gap-8 rounded-3xl border border-line bg-card p-6 md:grid-cols-[1.6fr_1fr] md:p-10">
        <div>
          <BnDate className="inline-block rounded-full bg-brand-soft px-4 py-1 text-sm font-medium text-brand" />
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          {/* anchor link: route বদলায় না, একই পেজে নিচে নামে */}
          <a
            href="#সব-পণ্য"
            className="mt-8 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand/90"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        <Image
          src="/bazar-hero.png"
          alt="ফল ও সবজিতে ভরা ঝুড়ি"
          width={420}
          height={360}
          priority
          className="mx-auto h-auto w-full max-w-[15rem] md:max-w-[18rem]"
        />
      </div>
    </section>
  );
}
