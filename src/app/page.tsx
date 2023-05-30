import ProductList from "@/components/ProductList";
import ShopList from "@/components/ShopList";

export const metadata = {
  title: "Your Delivery - Shops",
  description: "Shops list",
};

export default function Home() {
  return (
    <main className="text-sky-950">
      <div className="container mx-auto mt-10 flex gap-10">
        <ShopList title="Shops" />
        <ProductList />
      </div>
    </main>
  );
}
