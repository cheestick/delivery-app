import React from "react";
import ProductCard from "./ProductCard";
import { defaultImageURL } from "@/utils/constants";

type ProductListProps = {
  productList: Product[];
};

export default function ProductList({ productList }: ProductListProps) {
  return (
    <div className="flex flex-wrap gap-4 mx-auto">
      {productList.map(({ _id, title, imageURL, price }) => (
        <ProductCard
          key={_id}
          title={title}
          imageURL={imageURL}
          price={price}
          _id={_id}
        />
      ))}
    </div>
  );
}
