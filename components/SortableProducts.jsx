"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProductGrid from "./ProductGrid";
import { toBn } from "@/lib/format";

const OPTIONS = [
  { value: "default", label: "ডিফল্ট" },
  { value: "asc", label: "দাম: কম থেকে বেশি" },
  { value: "desc", label: "দাম: বেশি থেকে কম" },
];

export default function SortableProducts({ products }) {
  const [sort, setSort] = useState("default");

  // মূল array না ছুঁয়ে কপির ওপর sort করা হয়, তাই "ডিফল্ট"-এ ফিরলে আগের ক্রম ফেরত আসে।
  // দাম number হিসেবে আছে, তাই বাংলা সংখ্যা নিয়ে sort-এর সমস্যা নেই।
  const sorted = useMemo(() => {
    const list = [...products];
    if (sort === "asc") list.sort((a, b) => a.today - b.today);
    if (sort === "desc") list.sort((a, b) => b.today - a.today);
    return list;
  }, [products, sort]);

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-line bg-card px-6 py-16 text-center">
        <p aria-hidden className="text-5xl">🛒</p>
        <h2 className="mt-4 text-2xl font-bold">এই বিভাগে এখনো কোনো পণ্য নেই</h2>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand/90"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-end gap-3 rounded-2xl border border-line bg-card px-5 py-4">
        <label htmlFor="sort" className="text-muted">
          সাজান
        </label>
        <div className="relative">
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="appearance-none rounded-lg border border-line bg-card py-2 pl-3 pr-9 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            {OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
            className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2"
          >
            <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
          </svg>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted">মোট {toBn(sorted.length)}টি পণ্য দেখানো হচ্ছে</p>
      <div className="mt-4">
        <ProductGrid products={sorted} />
      </div>
    </>
  );
}
