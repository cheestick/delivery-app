import OrderForm from "@/components/orderForm";

export const metadata = {
  title: "Your Delivery - Cart",
  description: "Your delivery cart",
};

export default function CartPage() {
  return (
    <main className="mt-10 text-sky-900/70">
      <OrderForm />
    </main>
  );
}
