import { ProductGridSkeleton } from "@/components/ProductSkeleton";

// Home লোড হওয়ার সময় Next.js নিজে থেকেই এটি দেখায়।
export default function Loading() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="h-72 animate-pulse rounded-3xl border border-line bg-card" />
      </section>
      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        <ProductGridSkeleton />
        <ProductGridSkeleton />
        <ProductGridSkeleton count={9} />
      </div>
    </>
  );
}
