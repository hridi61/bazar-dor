import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import CategoryNav from "./CategoryNav";
import BnDate from "./BnDate";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <header className="bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-brand-soft">
            <Image src="/logo.png" alt="বাজার দর" width={26} height={26} />
          </span>
          <span>
            <span className="block text-xl font-bold leading-tight">বাজার দর</span>
            <BnDate className="block text-xs text-muted" />
          </span>
        </Link>

        <UserMenu />
      </div>

      <Suspense fallback={<div className="h-12 border-y border-line" />}>
        <CategoryNav />
      </Suspense>
    </header>
  );
}
