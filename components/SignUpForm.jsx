"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authErrorBn } from "@/lib/auth-errors";
import { safeRedirect, withRedirect } from "@/lib/utils";
import AuthField from "./AuthField";
import SocialButtons from "./SocialButtons";

export default function SignUpForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = safeRedirect(params.get("redirect"));
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name")).trim();
    const email = String(form.get("email")).trim();
    const password = String(form.get("password"));
    const confirm = String(form.get("confirm"));

    // client-side validation
    if (name.length < 2) return toast.error("নাম কমপক্ষে ২ অক্ষরের দিন");
    if (password.length < 8) return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
    if (password !== confirm) return toast.error("দুটি পাসওয়ার্ড মিলছে না");

    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });

    if (error) {
      setLoading(false);
      toast.error(authErrorBn(error));
      return;
    }

    // সাইন আপ হলে Better Auth নিজেই লগইন করে ফেলে; assignment অনুযায়ী
    // Sign In পেজে পাঠাতে হবে, তাই আগে সাইন আউট করিয়ে নিই।
    await authClient.signOut();
    setLoading(false);
    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এবার সাইন ইন করুন");
    router.push(withRedirect("/signin", redirectTo));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthField label="নাম" id="name" type="text" placeholder="যেমন: রহিম উদ্দিন" autoComplete="name" required />
        <AuthField label="ইমেইল" id="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <AuthField label="পাসওয়ার্ড" id="password" type="password" placeholder="কমপক্ষে ৮ অক্ষর" autoComplete="new-password" required />
        <AuthField label="পাসওয়ার্ড নিশ্চিত করুন" id="confirm" type="password" placeholder="আবার লিখুন" autoComplete="new-password" required />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-brand py-3 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand/90 disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="loading loading-spinner loading-sm" />
              অ্যাকাউন্ট তৈরি হচ্ছে...
            </span>
         ) : (
            "অ্যাকাউন্ট তৈরি করুন"
         )}
        </button>
      </form>

      <SocialButtons callbackURL="/" />

      <p className="mt-6 text-center">
        ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
        <Link href={withRedirect("/signin", redirectTo)} className="font-medium text-brand hover:underline">
          সাইন ইন করুন
        </Link>
      </p>
    </>
  );
}
