import React, { ReactNode } from "react";
import ShopCard from "./ShopCard";

type ShopListProps = {
  title?: string;
  shopList: Shop[];
};

export default function ShopList({ title, shopList = [] }: ShopListProps) {
  const content = shopList?.map(({ _id, name }) => (
    <ShopCard key={_id} shopname={name} />
  ));

  return (
    <div>
      {title && <h2 className="flex place-content-center">{title}</h2>}
      <div className="flex flex-col gap-2 mt-4">{content}</div>
    </div>
  );
}
