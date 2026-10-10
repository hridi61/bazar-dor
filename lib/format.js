// বাংলা সংখ্যা, একক ও তারিখের helper। ডেটা সবসময় English number-ই থাকে,
// শুধু দেখানোর সময় বাংলায় বদলানো হয় (তাই sort-এ কোনো সমস্যা হয় না)।

export const toBn = (n) => Number(n).toLocaleString("bn-BD");

export const formatPct = (pct) =>
  Math.abs(pct).toLocaleString("bn-BD", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const UNIT_FULL = {
  kg: "প্রতি কেজি",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
};

const UNIT_SHORT = { kg: "কেজি", litre: "লিটার", dozen: "ডজন", piece: "পিস" };

export const unitFull = (unit) => UNIT_FULL[unit] ?? unit;
export const unitShort = (unit) => UNIT_SHORT[unit] ?? unit;

// server (UTC) আর browser-এর তারিখ যেন না মেলে সমস্যা না হয়, তাই সময়অঞ্চল ঠিক করা।
export const bnDate = (date = new Date()) =>
  new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(date);

export const topRisers = (products, count = 6) =>
  products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, count);

export const topFallers = (products, count = 6) =>
  products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct) // pct ঋণাত্মক, তাই ছোট মানই বেশি কমা
    .slice(0, count);

// Product Details Page-এর হিসাব: সর্বনিম্ন, সর্বাধিক, গড় এবং বাজারের সারি
export function marketStats(markets = []) {
  if (markets.length === 0) return null;

  const rows = markets
    .map((m) => ({ ...m, avg: Math.round((m.min + m.max) / 2) }))
    .sort((a, b) => a.avg - b.avg);

  const min = Math.min(...markets.map((m) => m.min));
  const max = Math.max(...markets.map((m) => m.max));
  const avg = Math.round(
    markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length
  );

  return {
    min,
    max,
    avg,
    minMarket: markets.find((m) => m.min === min)?.market,
    maxMarket: markets.find((m) => m.max === max)?.market,
    rows,
  };
}
