"use client";
import CartItem from "./CartItem";
import { useContext } from "react";
import { OrderContext } from "@/context/OrderProvider";

function CartItemList() {
  const { checkout } = useContext(OrderContext);
  const isCheckoutEmpty = checkout.length < 1;
  return (
    <>
      {isCheckoutEmpty ? (
        <p className="mt-10 text-center">
          Add products you wish to be delivered
        </p>
      ) : (
        checkout.map(({ _id, title, price, imageURL, quantity }) => (
          <CartItem
            key={_id}
            _id={_id}
            title={title}
            price={price}
            imageURL={imageURL}
            quantity={quantity}
          />
        ))
      )}
    </>
  );
}

export default CartItemList;
