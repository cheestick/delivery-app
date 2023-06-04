import { createContext } from "react";

// Order
export type OrderDefault = {
  checkout: RequiredLSCartItem[];
  saveCheckout: (value: RequiredLSCartItem[]) => void;
};

export const OrderContext = createContext<OrderDefault>({
  checkout: [],
  saveCheckout: (f) => {},
});

// TotalPrice
export type TotalPriceDefault = {
  totalPrice: number;
  setTotalPrice: (value: number) => void;
};

export const TotalPriceContext = createContext<TotalPriceDefault>({
  totalPrice: 0,
  setTotalPrice: (f) => {},
});

// Credentials
export type CredentialsDefault = {
  credentials: Credentials;
  setCredentials: (value: Credentials) => void;
};

export const CredentialsContext = createContext<CredentialsDefault>({
  credentials: { name: "", email: "", phone: "", address: "" },
  setCredentials: (f) => {},
});
