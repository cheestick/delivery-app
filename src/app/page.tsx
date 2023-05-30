import ProductList from "@/components/ProductList";
import ShopList from "@/components/ShopList";

export const metadata = {
  title: "Your Delivery - Shops",
  description: "Shops list",
};

export default function Home() {
  return (
    <main className="flex gap-5  mt-10 text-sky-950">
      <ShopList title="Shops" />
      <ProductList />
    </main>
  );
}
