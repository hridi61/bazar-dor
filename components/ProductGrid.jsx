import ProductCard from "./ProductCard";

// Home আর Category Page, দুই জায়গাতেই এটা ব্যবহার করা যাবে।
export default function ProductGrid({ products }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
