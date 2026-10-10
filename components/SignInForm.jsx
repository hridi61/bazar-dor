"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authErrorBn } from "@/lib/auth-errors";
import { safeRedirect, withRedirect } from "@/lib/utils";
import AuthField from "./AuthField";
import SocialButtons from "./SocialButtons";

export default function SignInForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = safeRedirect(params.get("redirect"));
  const [loading, setLoading] = useState(false);

  // Protected পেজ থেকে ফেরত পাঠানো হলে একবার toast দেখাবে (id দেওয়ায় দুইবার আসে না)
  useEffect(() => {
    if (params.get("reason") === "login-required") {
      toast.error("বিস্তারিত দেখতে আগে সাইন ইন করুন", { id: "login-required" });
    }
  }, [params]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email")).trim();
    const password = String(form.get("password"));

    if (!email || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড দুটোই দিন");
      return;
    }

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      toast.error(authErrorBn(error));
      return;
    }
    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthField label="ইমেইল" id="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <AuthField label="পাসওয়ার্ড" id="password" type="password" placeholder="কমপক্ষে ৮ অক্ষর" autoComplete="current-password" required />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-brand py-3 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand/90 disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="loading loading-spinner loading-sm" />
              সাইন ইন হচ্ছে...
            </span>
          ) : (
            "সাইন ইন"
          )}
        </button>
      </form>

      <SocialButtons callbackURL={redirectTo} />

      <p className="mt-6 text-center">
        অ্যাকাউন্ট নেই?{" "}
        <Link href={withRedirect("/signup", redirectTo)} className="font-medium text-brand hover:underline">
          সাইন আপ করুন
        </Link>
      </p>
    </>
  );
}
