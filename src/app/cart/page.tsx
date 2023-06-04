"use client";
import CartItemList from "@/components/CartItemList";
import MakeOrderButton from "@/components/MakeOrderButton";
import TotalPrice from "@/components/TotalPrice";
import OrderForm from "@/components/orderForm";
import ShoppingCartProviders from "@/components/providers/ShoppingCartProviders";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Your Delivery - Cart",
  description: "Your delivery cart",
};

export default function ShoppingCartPage() {
  return (
    <ShoppingCartProviders>
      <main className="text-sky-900/70 ">
        <div className="container mt-10 mb-20 mx-auto">
          <div className=" flex gap-10 items-start ">
            <OrderForm />
            <div className="basis-full max-h-[60vh] overflow-auto">
              <CartItemList />
            </div>
          </div>
          <div className="flex justify-end gap-10 items-center mt-10">
            <TotalPrice />
            <MakeOrderButton />
          </div>
        </div>
      </main>
    </ShoppingCartProviders>
  );
}
