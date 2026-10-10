"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authErrorBn } from "@/lib/auth-errors";
import Avatar from "./Avatar";

export default function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // মেনুর বাইরে ক্লিক করলে বা Esc চাপলে বন্ধ হবে
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function handleSignOut() {
    setOpen(false);
    const { error } = await authClient.signOut();
    if (error) {
      toast.error(authErrorBn(error));
      return;
    }
    toast.success("সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  if (isPending) {
    return <div className="h-10 w-32 animate-pulse rounded-full bg-line" aria-label="লোড হচ্ছে" />;
  }

  if (!session) {
    return (
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/signin" className="px-2 py-2 text-sm font-medium hover:text-brand sm:text-base">
          সাইন ইন
        </Link>
        <Link
          href="/signup"
          className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand/30 hover:bg-brand/90 sm:px-5 sm:text-base"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const { user } = session;
  const firstName = user.name?.split(" ")[0] || "প্রোফাইল";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 hover:bg-page"
      >
        <Avatar user={user} size={40} />
        <span className="hidden max-w-28 truncate font-medium sm:block">{firstName}</span>
        <span aria-hidden className="text-[10px] text-muted">▼</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-30 mt-2 w-72 rounded-2xl border border-line bg-card p-4 shadow-xl"
        >
          <p className="truncate font-semibold">{user.name}</p>
          <p className="truncate text-sm text-muted">{user.email}</p>

          <Link
            href="/profile"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-page"
          >
            <span aria-hidden>👤</span> আমার প্রোফাইল
          </Link>
          <button
            type="button"
            role="menuitem"
            onClick={handleSignOut}
            className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-up hover:bg-page"
          >
            <span aria-hidden>↩</span> সাইন আউট
          </button>
        </div>
      )}
    </div>
  );
}
