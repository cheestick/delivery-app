import { OrderContext } from "@/context/OrderProvider";
import { lsCheckoutKey } from "@/utils/constants";
import { useLocalStorage } from "@react-hooks-library/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function OrderProvider({ children }: Props) {
  const [checkout, saveCheckout] = useLocalStorage<RequiredLSCartItem[]>(
    lsCheckoutKey,
    []
  );
  return (
    <OrderContext.Provider value={{ checkout, saveCheckout }}>
      {children}
    </OrderContext.Provider>
  );
}
