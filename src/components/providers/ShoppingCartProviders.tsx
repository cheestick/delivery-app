import { CredentialsContext, OrderContext } from "@/context/OrderProvider";
import { lsCheckoutKey } from "@/utils/constants";
import { useLocalStorage } from "@react-hooks-library/core";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function ShoppingCartProviders({ children }: Props) {
  const [credentials, setCredentials] = useState({});
  const [checkout, saveCheckout] = useLocalStorage(lsCheckoutKey, []);
  return (
    <OrderContext.Provider value={{ checkout, saveCheckout }}>
      <CredentialsContext.Provider value={{ credentials, setCredentials }}>
        {children}
      </CredentialsContext.Provider>
    </OrderContext.Provider>
  );
}
