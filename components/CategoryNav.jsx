import { getCategories } from "@/lib/api";
import NavLinks from "./NavLinks";

// Server Component: categories fetch করে Client Component-এ পাঠায়।
export default async function CategoryNav() {
  let categories = [];
  try {
    categories = await getCategories();
  } catch {
    // category না এলেও বাকি পেজ চলবে
  }
  return <NavLinks categories={categories} />;
}
