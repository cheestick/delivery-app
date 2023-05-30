import CartItem from "@/components/CartItem";
import OrderForm from "@/components/orderForm";

export const metadata = {
  title: "Your Delivery - Cart",
  description: "Your delivery cart",
};

export default function CartPage() {
  return (
    <main className="container mt-10 mx-auto text-sky-900/70 flex gap-10">
      <OrderForm />
      <div className="basis-1/2">
        <CartItem />
      </div>
    </main>
  );
}
