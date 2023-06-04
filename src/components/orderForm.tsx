import React, { ChangeEvent, useContext } from "react";
import Input from "./ui/Input";
import { CredentialsContext } from "@/context/OrderProvider";

export default function OrderForm() {
  const { credentials, setCredentials } = useContext(CredentialsContext);
  const { name, email, phone, address } = credentials;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    setCredentials({ ...credentials, [inputName]: value });
  };

  return (
    <form className="order-form h-100% basis-full" autoComplete="off">
      <label htmlFor="name" className="order-label">
        <span>Name</span>
        <Input
          autoFocus
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          minLength={2}
        />
      </label>

      <label htmlFor="email" className="order-label">
        <span>Email</span>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="example@example.com"
          required
          minLength={6}
        />
      </label>

      <label htmlFor="phone" className="order-label">
        <span>Phone</span>
        <Input
          id="phone"
          type="tel"
          name="phone"
          onChange={handleChange}
          value={phone}
          placeholder="+38 050 123 45 67"
          required
          minLength={5}
        />
      </label>

      <label htmlFor="address" className="order-label">
        <span>Address</span>
        <Input
          id="address"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="Main st. Kyiv"
          required
          minLength={10}
        />
      </label>
    </form>
  );
}
