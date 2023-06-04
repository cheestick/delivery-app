"use client";
import { useContext, useState } from "react";
import {
  CredentialsContext,
  OrderContext,
  TotalPriceContext,
} from "@/context/OrderProvider";
import Button from "./ui/Button";
import { initCredentials } from "./providers/ShoppingCartProviders";
import { validateCredentials } from "@/utils/validateCredentials";

const URL = process.env.NEXT_PUBLIC_API_URL;

async function createNewOrder(order: Order) {
  const body = JSON.stringify(order);

  return await fetch(`${URL}/orders`, {
    method: "POST",
    body,
  });
}

export default function MakeOrderButton() {
  const { credentials, setCredentials } = useContext(CredentialsContext);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const { checkout, saveCheckout } = useContext(OrderContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const resetOrderForm = () => {
    setCredentials(initCredentials);
    setTotalPrice(0);
    saveCheckout([]);
  };

  const submitMakeOrder = async () => {
    if (!canCreateOrder) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }

    const purchases = checkout
      .filter(({ quantity }) => quantity > 0)
      .map(({ _id, quantity }) => ({
        productID: _id,
        quantity,
      }));

    const orderDTO: Order = { credentials, totalPrice, purchases };

    setLoading(true);
    const result = await createNewOrder(orderDTO);
    if (result.ok) {
      resetOrderForm();
    }
    setLoading(false);
  };

  const hasFormGaps = !validateCredentials(credentials);
  const zeroQuantity = checkout.every(({ quantity }) => quantity < 1);
  const isCartEmpty = checkout.length < 1;
  const isButtonDisabled =
    loading || error || isCartEmpty || zeroQuantity || hasFormGaps;

  const canCreateOrder = !isButtonDisabled;

  const buttonStatusText =
    ((error || hasFormGaps) && "Complete form") ||
    (loading && "Making order...") ||
    (zeroQuantity && !isCartEmpty && "Increase quantity") ||
    "Make order";

  return (
    <Button onClick={submitMakeOrder} disabled={isButtonDisabled}>
      {buttonStatusText}
    </Button>
  );
}
