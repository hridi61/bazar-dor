"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ categories }) {
  const pathname = usePathname();

  return (
    <nav aria-label="পণ্যের ধরন" className="border-y border-line">
      <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        {categories.map((c) => {
          const href = `/category/${c.slug}`;
          const active = pathname === href;
          return (
            <li key={c.id} className="shrink-0">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                  active
                    ? "bg-brand text-white"
                    : "text-ink hover:bg-page"
                }`}
              >
                <span aria-hidden>{c.icon}</span>
                {c.nameBn}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
