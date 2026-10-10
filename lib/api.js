// API থেকে ডেটা আনার জায়গা। একটি URL কাজ না করলে পরেরটি চেষ্টা করে।
const BASES = [
  process.env.API_URL,
  "https://api.abcz.workers.dev/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
].filter(Boolean);

async function request(path) {
  let lastError;
  for (const base of BASES) {
    try {
      const res = await fetch(`${base}${path}`, { next: { revalidate: 300 } });
      if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
      return await res.json();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

export const getProducts = () => request("/products");
export const getCategories = () => request("/categories");

export const getProductsByCategory = async (slug) => {
  const list = await request(`/products?category=${encodeURIComponent(slug)}`);
  // filter API কোনো কারণে সব পণ্য ফেরত দিলেও যেন ভুল পণ্য না দেখায়
  return list.filter((p) => p.category === slug);
};
