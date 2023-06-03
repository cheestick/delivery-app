import ProductList from "@/components/ProductList";
import ShopList from "@/components/ShopList";

export const metadata = {
  title: "Your Delivery - Shops",
  description: "Shops list",
};

const { API_URL } = process.env;

async function getAllShops() {
  return (await fetch(`${API_URL}/shops`, { next: { revalidate: 5 } })).json();
}

async function getAllProducts() {
  return (
    await fetch(`${API_URL}/products`, { next: { revalidate: 5 } })
  ).json();
}

export default async function Home() {
  const [shops, products] = await Promise.all([
    getAllShops(),
    getAllProducts(),
  ]);

  return (
    <main className="text-sky-950">
      <div className="container mx-auto mt-10 mb-40 flex gap-10">
        <ShopList title="Shops" shopList={shops} />
        <ProductList productList={products} />
      </div>
    </main>
  );
}
