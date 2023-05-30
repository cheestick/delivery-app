import React from "react";
import Input from "./ui/Input";

export default function OrderForm() {
  return (
    <form className="order-form  mx-auto" autoFocus autoComplete="off">
      <label htmlFor="name" className="order-label">
        <span>Name</span>
        <Input id="name" placeholder="Maksym Chystiakov" name="name" />
      </label>

      <label htmlFor="email" className="order-label">
        <span>Email</span>
        <Input
          id="email"
          placeholder="example@example.com"
          type="email"
          name="email"
        />
      </label>
      <label htmlFor="phone" className="order-label">
        <span>Phone</span>
        <Input
          id="phone"
          placeholder="+38 050 123 45 67"
          type="tel"
          name="phone"
        />
      </label>
      <label htmlFor="address" className="order-label">
        <span>Address</span>
        <Input
          id="address"
          placeholder="Main st. Kyiv"
          type="text"
          name="address"
        />
      </label>
    </form>
  );
}
