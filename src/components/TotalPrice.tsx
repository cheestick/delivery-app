import { OrderContext, TotalPriceContext } from "@/context/OrderProvider";
import React, { useContext, useEffect } from "react";

export default function TotalPrice() {
  const { checkout } = useContext(OrderContext);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);

  useEffect(() => {
    const orderPrice = checkout
      .reduce((acc, { price, quantity }) => (acc += price * quantity), 0)
      .toFixed(2);

    setTotalPrice(parseFloat(orderPrice));
  }, [checkout, setTotalPrice]);

  const formattedTotalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  return (
    <div>
      Total Price: <span>{formattedTotalPrice}</span>
    </div>
  );
}
