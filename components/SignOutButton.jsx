"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authErrorBn } from "@/lib/auth-errors";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const { error } = await authClient.signOut();
    if (error) {
      setLoading(false);
      toast.error(authErrorBn(error));
      return;
    }
    toast.success("সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-2 rounded-lg border border-up px-5 py-2.5 font-medium text-up hover:bg-up/5 disabled:opacity-60"
    >
      <span aria-hidden>↩</span> সাইন আউট
    </button>
  );
}
