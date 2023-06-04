"use client";
import CartItem from "./CartItem";
import { useContext } from "react";
import { OrderContext } from "@/context/OrderProvider";

function CartItemList() {
  const { checkout } = useContext(OrderContext);
  return (
    <>
      {checkout.map(({ _id, title, price, imageURL, quantity }) => (
        <CartItem
          key={_id}
          _id={_id}
          title={title}
          price={price}
          imageURL={imageURL}
          quantity={quantity}
        />
      ))}
    </>
  );
}

export default CartItemList;
