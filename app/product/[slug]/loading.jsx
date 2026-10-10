export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse space-y-6 px-4 py-8" role="status" aria-label="লোড হচ্ছে">
      <div className="h-5 w-56 rounded bg-line" />
      <div className="h-44 rounded-2xl border border-line bg-card" />
      <div className="h-96 rounded-2xl border border-line bg-card" />
    </div>
  );
}
