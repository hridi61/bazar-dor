export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl animate-pulse px-4 py-12" role="status" aria-label="লোড হচ্ছে">
      <div className="h-8 w-56 rounded bg-line" />
      <div className="mt-8 h-52 rounded-2xl border border-line bg-card" />
    </div>
  );
}
