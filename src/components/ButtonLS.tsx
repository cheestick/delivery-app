"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import Button from "./ui/Button";
import { useLocalStorage } from "@react-hooks-library/core";
import { lsCheckoutKey } from "@/utils/constants";

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
  const [checkout, setCheckout] = useLocalStorage<RequiredLSCartItem[]>(
    lsCheckoutKey,
    []
  );

  // Bug. Every button has ininital LS state []
  const foundProduct = checkout.find((item) => item._id === cartItem._id);

  let newCheckout: RequiredLSCartItem[] = [];
  if (!foundProduct) {
    newCheckout = [...checkout, { ...cartItem, quantity: 1 }];
  } else {
    foundProduct.quantity += 1;
    newCheckout = [...checkout];
  }

  return <Button onClick={() => setCheckout(newCheckout)} {...attributes} />;
}
