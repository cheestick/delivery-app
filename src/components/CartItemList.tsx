"use client";
import { lsCheckoutKey } from "@/utils/constants";
import { useLocalStorage } from "@react-hooks-library/core";
import CartItem from "./CartItem";

function CartItemList() {
  const [checkout, setCheckout] = useLocalStorage<RequiredLSCartItem[]>(
    lsCheckoutKey,
    []
  );
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
          checkout={checkout}
          changeQuantity={setCheckout}
        />
      ))}
    </>
  );
}

export default CartItemList;
