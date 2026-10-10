"use client";

import { useEffect, useState } from "react";
import { bnDate } from "@/lib/format";

// আজকের তারিখ browser-এ বসে। server-এ `new Date()` ব্যবহার করলে নতুন Next.js
// build-এ আপত্তি করে, আর cache হয়ে যাওয়া তারিখও পুরনো হয়ে যেতে পারে।
export default function BnDate({ className = "" }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(bnDate());
  }, []);

  // তারিখ আসার আগে জায়গা ধরে রাখে, যাতে লেআউট লাফ না দেয়
  return (
    <span className={className} suppressHydrationWarning>
      {text || "\u00A0"}
    </span>
  );
}
