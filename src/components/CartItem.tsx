import React from "react";
import InputCounter from "./ui/InputCounter";
import Image from "next/image";
import { defaultImageURL } from "@/utils/constants";

type CartItemProps = {
  title?: string;
  price?: number;
  imageURL?: string;
};

export default function CartItem({
  title = "Default title",
  price = 25.99,
  imageURL,
}: CartItemProps) {
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
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-lg font-light">
          Price: <span>{price}$</span>
        </p>
        <InputCounter className="self-end bg-transparent max-w-min focus:bg-white/50" />
      </div>
    </div>
  );
}
