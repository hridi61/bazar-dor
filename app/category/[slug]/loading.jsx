import { ProductGridSkeleton } from "@/components/ProductSkeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <div className="h-28 animate-pulse rounded-2xl border border-line bg-card" />
      <div className="h-16 animate-pulse rounded-2xl border border-line bg-card" />
      <ProductGridSkeleton count={6} />
    </div>
  );
}
