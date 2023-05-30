import Button from "@/components/ui/Button";

export const metadata = {
  title: "Your Delivery - Shops",
  description: "Shops list",
};

export default function Home() {
  return (
    <main className="mt-10  text-sky-950">
      <h1>Shop</h1>
      <Button>Add to cart</Button>
    </main>
  );
}
