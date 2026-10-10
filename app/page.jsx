import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";
import { toBn, topFallers, topRisers } from "@/lib/format";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        <Section title="আজ দাম বেড়েছে" marker="▲" markerClass="text-up">
          <ProductGrid products={topRisers(products)} />
        </Section>

        <Section title="আজ দাম কমেছে" marker="▼" markerClass="text-down">
          <ProductGrid products={topFallers(products)} />
        </Section>

        <Section
          id="সব-পণ্য"
          title="সব পণ্য"
          subtitle={`মোট ${toBn(products.length)}টি পণ্য দেখানো হচ্ছে`}
        >
          <ProductGrid products={products} />
        </Section>
      </div>
    </>
  );
}
