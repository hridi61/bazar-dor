"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authErrorBn } from "@/lib/auth-errors";
import AuthField from "./AuthField";

export default function UpdateProfileForm({ currentName }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name")).trim();

    if (name.length < 2) return toast.error("নাম কমপক্ষে ২ অক্ষরের দিন");
    if (name === currentName) return toast("নামে কোনো পরিবর্তন করা হয়নি");

    setLoading(true);
    const { error } = await authClient.updateUser({ name });
    setLoading(false);

    if (error) {
      toast.error(authErrorBn(error));
      return;
    }
    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AuthField label="নাম" id="name" type="text" defaultValue={currentName} autoComplete="name" required />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-brand py-3 font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand/90 disabled:opacity-60"
      >
        {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
      </button>
    </form>
  );
}
