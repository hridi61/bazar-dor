import Link from "next/link";
import { notFound } from "next/navigation";
import PriceChange from "@/components/PriceChange";
import { getProducts } from "@/lib/api";
import { marketStats, toBn, unitFull, unitShort } from "@/lib/format";
import { requireSession } from "@/lib/session";

function StatCard({ label, value, valueClass, caption }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <p className="text-sm text-muted">{label}</p>
      <p className={`mt-1 text-3xl font-bold ${valueClass}`}>
        {toBn(value)} <span className="text-lg font-medium">টাকা</span>
      </p>
      <p className="mt-1 text-sm text-muted">{caption}</p>
    </div>
  );
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  // Protected route: লগইন না থাকলে এখানেই /signin-এ চলে যাবে
  await requireSession(`/product/${slug}`);

  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const stats = marketStats(product.markets);
  const diff = product.today - product.yesterday;
  const diffWord = diff > 0 ? "বেড়েছে" : "কমেছে";

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
        <Link href="/" className="hover:text-brand">হোম</Link>
        <span aria-hidden className="text-muted">›</span>
        <Link href={`/category/${product.category}`} className="hover:text-brand">
          {product.categoryNameBn}
        </Link>
        <span aria-hidden className="text-muted">›</span>
        <span className="text-muted">{product.nameBn}</span>
      </nav>

      <header className="flex flex-col gap-6 rounded-2xl border border-line bg-card p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <span aria-hidden className="grid size-24 shrink-0 place-items-center rounded-2xl bg-page text-5xl">
            {product.image}
          </span>
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">{product.nameBn}</h1>
            <p className="mt-1 text-muted">
              {unitFull(product.unit)} ·{" "}
              <Link
                href={`/category/${product.category}`}
                className="rounded-full bg-brand-soft px-2.5 py-0.5 text-sm text-brand"
              >
                {product.categoryNameBn}
              </Link>
            </p>
            <p className="mt-2">
              {diff === 0 ? (
                "গতকালের তুলনায় আজ দাম অপরিবর্তিত"
              ) : (
                <>
                  গতকালের তুলনায় আজ দাম <strong>{diffWord}</strong> · {toBn(Math.abs(diff))} টাকা
                </>
              )}
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-page px-8 py-5 text-center">
          <p className="text-sm text-muted">আজকের দাম</p>
          <p className="text-5xl font-bold">{toBn(product.today)}</p>
          <p className="text-muted">টাকা / {unitShort(product.unit)}</p>
          <div className="mt-2">
            <PriceChange change={product.change} />
          </div>
        </div>
      </header>

      {stats && (
        <>
          <section className="rounded-2xl border border-line bg-card p-6">
            <h2 className="text-xl font-bold">দামের সারসংক্ষেপ</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <StatCard
                label="সর্বনিম্ন দাম"
                value={stats.min}
                valueClass="text-down"
                caption={`সবচেয়ে কম দামের বাজার: ${stats.minMarket}`}
              />
              <StatCard
                label="সর্বাধিক দাম"
                value={stats.max}
                valueClass="text-up"
                caption={`সবচেয়ে বেশি দামের বাজার: ${stats.maxMarket}`}
              />
              <StatCard
                label="গড় দাম"
                value={stats.avg}
                valueClass="text-down"
                caption={`${unitFull(product.unit)}-এর হিসাবে`}
              />
            </div>

            <h2 className="mt-8 text-xl font-bold">বাজারভিত্তিক আজকের দাম</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[34rem] text-left">
                <thead className="text-muted">
                  <tr className="border-b border-line">
                    <th scope="col" className="px-5 py-4 font-medium">বাজার</th>
                    <th scope="col" className="px-5 py-4 font-medium">বিভাগ</th>
                    <th scope="col" className="px-5 py-4 text-right font-medium">সর্বনিম্ন</th>
                    <th scope="col" className="px-5 py-4 text-right font-medium">সর্বাধিক</th>
                    <th scope="col" className="px-5 py-4 text-right font-medium">গড়</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.rows.map((m) => (
                    <tr key={m.market} className="border-b border-line last:border-0">
                      <td className="px-5 py-4">{m.market}</td>
                      <td className="px-5 py-4">{m.division}</td>
                      <td className="px-5 py-4 text-right">{toBn(m.min)} টাকা</td>
                      <td className="px-5 py-4 text-right">{toBn(m.max)} টাকা</td>
                      <td className="px-5 py-4 text-right font-semibold">{toBn(m.avg)} টাকা</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
