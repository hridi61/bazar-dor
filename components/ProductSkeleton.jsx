export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-line bg-card p-5">
      <div className="flex items-center gap-4">
        <div className="size-14 rounded-xl bg-line" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-2/3 rounded bg-line" />
          <div className="h-3 w-1/3 rounded bg-line" />
        </div>
      </div>
      <div className="mt-5 h-3 w-1/4 rounded bg-line" />
      <div className="mt-2 flex items-center justify-between">
        <div className="h-6 w-1/3 rounded bg-line" />
        <div className="h-6 w-16 rounded-full bg-line" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }) {
  return (
    <div
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      role="status"
      aria-label="লোড হচ্ছে"
    >
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
