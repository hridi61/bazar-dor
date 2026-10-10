import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <p aria-hidden className="text-6xl">🛒</p>
      <h1 className="mt-4 text-3xl font-bold">পেজটি খুঁজে পাওয়া যায়নি</h1>
      <p className="mt-2 text-muted">
        আপনি যে ঠিকানাটি খুঁজছেন সেটি নেই বা সরিয়ে নেওয়া হয়েছে।
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand/90"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
