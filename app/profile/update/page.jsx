import Link from "next/link";
import UpdateProfileForm from "@/components/UpdateProfileForm";
import { requireSession } from "@/lib/session";

export const metadata = { title: "তথ্য আপডেট — বাজার দর" };

export default async function UpdateProfilePage() {
  const { user } = await requireSession("/profile/update");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">তথ্য আপডেট করুন</h1>
      <p className="mt-1 text-muted">আপনার নাম বদলে নিন।</p>

      <section className="mt-8 rounded-2xl border border-line bg-card p-6 sm:p-8">
        <h2 className="mb-5 text-xl font-bold">তথ্য</h2>
        <UpdateProfileForm currentName={user.name} />
      </section>

      <p className="mt-6 text-sm">
        <Link href="/profile" className="text-muted hover:text-brand">
          ← প্রোফাইলে ফিরে যান
        </Link>
      </p>
    </div>
  );
}
