import React from "react";
import ShopCard from "./ShopCard";

const shops = ["KFCK", "Mc Daddy", "Salmoneira", "Gold & Wine", "Susiray"];

type ShopListProps = {
  title?: string;
};

export default function ShopList({ title }: ShopListProps) {
  const content = shops.map((shop) => <ShopCard key={shop} shopname={shop} />);

  return (
    <div>
      {title && <h2 className="flex place-content-center">{title}</h2>}
      <div className="flex flex-col gap-2 mt-4">{content}</div>
    </div>
  );
}
