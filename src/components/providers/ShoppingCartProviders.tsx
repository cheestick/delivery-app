import {
  CredentialsContext,
  OrderContext,
  TotalPriceContext,
} from "@/context/OrderProvider";
import { lsCheckoutKey } from "@/utils/constants";
import { useLocalStorage } from "@react-hooks-library/core";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export const initCredentials: Credentials = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export default function ShoppingCartProviders({ children }: Props) {
  const [credentials, setCredentials] = useState<Credentials>(initCredentials);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkout, saveCheckout] = useLocalStorage<RequiredLSCartItem[]>(
    lsCheckoutKey,
    []
  );

  return (
    <OrderContext.Provider value={{ checkout, saveCheckout }}>
      <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
        <CredentialsContext.Provider value={{ credentials, setCredentials }}>
          {children}
        </CredentialsContext.Provider>
      </TotalPriceContext.Provider>
    </OrderContext.Provider>
  );
}
