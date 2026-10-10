"use client";

export default function Error({ reset }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">দাম আনতে সমস্যা হয়েছে</h1>
      <p className="mt-2 text-muted">ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।</p>
      <button
        onClick={reset}
        className="mt-6 rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand/90"
      >
        আবার চেষ্টা করুন
      </button>
    </div>
  );
}
