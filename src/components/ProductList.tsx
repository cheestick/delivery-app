import React from "react";
import ProductCard from "./ProductCard";

type ProductListProps = {
  productList: Product[];
};

export default function ProductList({ productList }: ProductListProps) {
  return (
    <div className="flex flex-wrap gap-4 mx-auto">
      {productList.map(({ id, title, imageUrl }) => (
        <ProductCard key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
}
