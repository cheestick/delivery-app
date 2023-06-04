import React, { ChangeEvent, useCallback, useContext, useState } from "react";
import InputCounter from "./ui/InputCounter";
import Image from "next/image";
import { defaultImageURL } from "@/utils/constants";
import { OrderContext } from "@/context/OrderProvider";

type CartItemProps = {
  _id: string;
  title: string;
  price: number;
  imageURL: string;
  quantity: number;
};

export default function CartItem({
  _id,
  title,
  price,
  imageURL,
  quantity,
}: 
CartItemProps) {
  const [value, setValue] = useState(quantity);
  const { checkout, saveCheckout } = useContext(OrderContext);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const foundItem = checkout.find((item) => item._id === _id);
      if (foundItem) {
        setValue(parseInt(e.target.value));
        foundItem.quantity = parseInt(e.target.value);
        saveCheckout([...checkout]);
      }
    },
    [_id, checkout, saveCheckout]
  );

  return (
    <div className="flex gap-10 justify-between mb-3 bg-sky-700/10 rounded-2xl overflow-hidden ">
      <Image
        className="aspect-square object-cover object-center "
        src={imageURL || defaultImageURL}
        alt={"Product"}
        width={180}
        height={180}
      />
      <div className="flex flex-col justify-between my-5 mr-16">
        <h2 className="text-2xl font-medium  text-right">{title}</h2>
        <p className="text-lg font-light text-right">
          Price: <span>{price}$</span>
        </p>
        <InputCounter
          onChange={handleChange}
          value={value}
          className="self-end bg-transparent max-w-min focus:bg-white/50"
        />
      </div>
    </div>
  );
}
