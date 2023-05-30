import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export const metadata = {
  title: "Your Delivery - Shops",
  description: "Shops list",
};

export default function Home() {
  return (
    <main className="mt-10 flex flex-col gap-4 items-center text-sky-950">
      <h1>Shop</h1>
      <Button>Add to cart</Button>
      <Input placeholder="Maksym Chystiakov" />
      <Input placeholder="example@example.com" type="email" />
      <Input placeholder="+38 050 123 45 67" type="tel" />
      <Input placeholder="Main st. Kyiv" type="text" />
    </main>
  );
}
