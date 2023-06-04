import ProductList from "@/components/ProductList";
import ShopList from "@/components/ShopList";
import axios from "axios";

export const metadata = {
  title: "Your Delivery - Shops",
  description: "Shops list",
};

const API_URL = process.env.API_URL;

async function getAllShops() {
  try {
    const result = await axios.get(`${API_URL}/shops`);

    return result.data;
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    return (await axios.get(`${API_URL}/products`)).data;
  } catch (error) {
    throw error;
  }
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
