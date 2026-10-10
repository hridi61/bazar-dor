import { notFound } from "next/navigation";
import SortableProducts from "@/components/SortableProducts";
import { getCategories, getProductsByCategory } from "@/lib/api";
import { toBn } from "@/lib/format";

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const [categories, products] = await Promise.all([
    getCategories(),
    getProductsByCategory(slug),
  ]);

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound(); // ভুল slug হলে 404 পেজ

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <header className="flex items-center gap-5 rounded-2xl border border-line bg-card p-6">
        <span aria-hidden className="text-5xl">{category.icon}</span>
        <div>
          <h1 className="text-3xl font-bold">{category.nameBn}</h1>
          <p className="text-muted">{toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </header>

      <div>
        <SortableProducts products={products} />
      </div>
    </div>
  );
}
