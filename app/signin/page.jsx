import { Suspense } from "react";
import AuthShell from "@/components/AuthShell";
import SignInForm from "@/components/SignInForm";

export const metadata = { title: "সাইন ইন — বাজার দর" };

export default function SignInPage() {
  return (
    <AuthShell
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"
    >
      {/* useSearchParams ব্যবহার করে, তাই Suspense লাগে */}
      <Suspense>
        <SignInForm />
      </Suspense>
    </AuthShell>
  );
}
