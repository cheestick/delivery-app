import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { defaultImageURL } from "@/utils/constants";

type ProductCardProps = {
  imageUrl: string;
  title: string;
};

export default function ProductCard({ imageUrl, title }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-2 w-80">
      <Image
        src={imageUrl || defaultImageURL}
        alt={title}
        width={300}
        height={150}
        className="w-full object-cover object-center aspect-video"
      />
      <h2 className="uppercase">{title}</h2>
      <Button sx="self-end">add to cart</Button>
    </div>
  );
}
