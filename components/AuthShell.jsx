import Link from "next/link";

export default function AuthShell({ title, subtitle, children }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-center text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-center text-muted">{subtitle}</p>

      <div className="mt-8 rounded-2xl border border-line bg-card p-6 sm:p-8">{children}</div>

      <p className="mt-6 text-center text-sm">
        <Link href="/" className="text-muted hover:text-brand">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}
