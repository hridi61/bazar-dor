import { Suspense } from "react";
import AuthShell from "@/components/AuthShell";
import SignUpForm from "@/components/SignUpForm";

export const metadata = { title: "অ্যাকাউন্ট তৈরি করুন — বাজার দর" };

export default function SignUpPage() {
  return (
    <AuthShell
      title="অ্যাকাউন্ট তৈরি করুন"
      subtitle="বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।"
    >
      <Suspense>
        <SignUpForm />
      </Suspense>
    </AuthShell>
  );
}
