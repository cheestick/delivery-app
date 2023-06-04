import Image from "next/image";
import { defaultImageURL } from "@/utils/constants";
import ButtonLS from "./ButtonLS";

type ProductCardProps = {
  imageURL: string;
  title: string;
  _id: string;
  price: number;
};

export default function ProductCard({
  imageURL,
  title,
  _id,
  price,
}: ProductCardProps) {
  const cartItem = { _id, price, title, imageURL };

  return (
    <div className="flex flex-col gap-2 w-80 shadow-xl">
      <Image
        src={imageURL || defaultImageURL}
        alt={title}
        width={300}
        height={150}
        className="w-full object-cover object-center aspect-video"
      />
      <h2 className="uppercase ml-2">{title}</h2>
      <ButtonLS
        cartItem={cartItem}
        sx="self-end mt-4 mb-3 mr-2"
        title="The product should be added to the Shopping Cart"
      >
        add to cart
      </ButtonLS>
    </div>
  );
}
