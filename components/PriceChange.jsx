import { formatPct } from "@/lib/format";

// Figma অনুযায়ী: দাম বাড়া = লাল, কমা = সবুজ, অপরিবর্তিত = ধূসর।
// রং বদলাতে চাইলে শুধু globals.css-এর --color-up / --color-down বদলাও।
const STYLES = {
  up: { icon: "▲", color: "text-up", label: "বেড়েছে" },
  down: { icon: "▼", color: "text-down", label: "কমেছে" },
  flat: { icon: "—", color: "text-flat", label: "অপরিবর্তিত" },
};

export default function PriceChange({ change, pill = false }) {
  const s = STYLES[change.dir] ?? STYLES.flat;
  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold ${s.color} ${
        pill ? "rounded-full bg-page px-3 py-1 text-xs" : "text-sm"
      }`}
    >
      <span aria-hidden>{s.icon}</span>
      {formatPct(change.pct)}%<span className="sr-only"> {s.label}</span>
    </span>
  );
}
