"use client";
import { ButtonHTMLAttributes, ReactNode, useContext } from "react";
import Button from "./ui/Button";
import { OrderContext } from "@/context/OrderProvider";

type ButtonType = "reset" | "submit" | "button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  sx?: string;
  type?: ButtonType;
  cartItem: LSCartItem;
}

export default function SaveToLocalStorageButton({
  cartItem,
  ...attributes
}: ButtonProps) {
  const { checkout, saveCheckout } = useContext(OrderContext);

  const handleSaveToCart = () => {
    let newCheckout: RequiredLSCartItem[] = [];

    const foundProduct = checkout.find((item) => item._id === cartItem._id);

    if (!foundProduct) {
      newCheckout = [...checkout, { ...cartItem, quantity: 1 }];
    } else {
      foundProduct.quantity += 1;
      newCheckout = [...checkout];
    }

    saveCheckout(newCheckout);
  };

  return <Button onClick={handleSaveToCart} {...attributes} />;
}
