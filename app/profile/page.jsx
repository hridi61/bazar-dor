import Link from "next/link";
import Avatar from "@/components/Avatar";
import SignOutButton from "@/components/SignOutButton";
import { requireSession } from "@/lib/session";

export const metadata = { title: "আমার প্রোফাইল — বাজার দর" };

export default async function ProfilePage() {
  const { user } = await requireSession("/profile");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">আমার প্রোফাইল</h1>
      <p className="mt-1 text-muted">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

      <section className="mt-8 flex flex-col gap-5 rounded-2xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <Avatar user={user} size={96} square />
          <div className="min-w-0">
            <h2 className="truncate text-2xl font-semibold">{user.name}</h2>
            <p className="truncate text-lg text-muted">{user.email}</p>
          </div>
        </div>
        <SignOutButton />
      </section>

      <section className="mt-6 rounded-2xl border border-line bg-card p-6">
        <h2 className="text-xl font-bold">তথ্য</h2>
        <dl className="mt-5 space-y-4">
          <div>
            <dt className="text-sm text-muted">নাম</dt>
            <dd className="font-medium">{user.name}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">ইমেইল</dt>
            <dd className="font-medium">{user.email}</dd>
          </div>
        </dl>
        <Link
          href="/profile/update"
          className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand/90"
        >
          তথ্য আপডেট করুন
        </Link>
      </section>
    </div>
  );
}
