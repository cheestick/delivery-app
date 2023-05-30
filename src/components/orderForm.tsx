import React from "react";
import Input from "./ui/Input";

export default function OrderForm() {
  return (
    <form className="order-form  mx-auto" autoFocus autoComplete="off">
      <Input placeholder="Maksym Chystiakov" name="name" />
      <Input placeholder="example@example.com" type="email" name="email" />
      <Input placeholder="+38 050 123 45 67" type="tel" name="phone" />
      <Input placeholder="Main st. Kyiv" type="text" name="address" />
    </form>
  );
}
