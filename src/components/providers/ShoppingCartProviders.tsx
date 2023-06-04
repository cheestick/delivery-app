import { CredentialsContext, TotalPriceContext } from "@/context/OrderProvider";

import React, { ReactNode, useState } from "react";
import OrderProvider from "./OrderProvider";

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

  return (
    <OrderProvider>
      <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
        <CredentialsContext.Provider value={{ credentials, setCredentials }}>
          {children}
        </CredentialsContext.Provider>
      </TotalPriceContext.Provider>
    </OrderProvider>
  );
}
