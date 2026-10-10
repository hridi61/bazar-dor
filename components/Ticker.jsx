import { getProducts } from "@/lib/api";
import { toBn, unitShort } from "@/lib/format";
import PriceChange from "./PriceChange";

export default async function Ticker() {
  let products = [];
  try {
    products = await getProducts();
  } catch {
    return null;
  }

  // তালিকা দুইবার বসালে translateX(-50%) পর্যন্ত গেলেই আবার শুরু থেকে শুরু, ফাঁক থাকে না
  const items = [...products, ...products];

  return (
    <section
      aria-label="আজকের দামের তালিকা"
      className="marquee overflow-hidden border-b border-line bg-card"
    >
      <ul className="marquee-track flex">
        {items.map((p, i) => (
          <li
            key={`${p.id}-${i}`}
            aria-hidden={i >= products.length}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap border-r border-line px-5 py-3"
          >
            <span aria-hidden>{p.image}</span>
            <span className="font-medium">{p.nameBn}</span>
            <span className="text-sm text-muted">
              {toBn(p.today)} টাকা/{unitShort(p.unit)}
            </span>
            <PriceChange change={p.change} />
          </li>
        ))}
      </ul>
    </section>
  );
}
