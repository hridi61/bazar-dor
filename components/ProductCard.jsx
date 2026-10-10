import Link from "next/link";
import { toBn, unitFull } from "@/lib/format";
import PriceChange from "./PriceChange";

export default function ProductCard({ product: p }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="block rounded-2xl border border-line bg-card p-5 hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="grid size-14 shrink-0 place-items-center rounded-xl bg-page text-3xl"
        >
          {p.image}
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-tight">{p.nameBn}</h3>
          <p className="text-sm text-muted">{unitFull(p.unit)}</p>
        </div>
      </div>

      <p className="mt-5 text-sm text-muted">আজকের দাম</p>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xl font-bold">
          {toBn(p.today)} <span className="text-base font-medium">টাকা</span>
        </p>
        <PriceChange change={p.change} pill />
      </div>
    </Link>
  );
}
