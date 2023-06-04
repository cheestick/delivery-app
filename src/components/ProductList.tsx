"use client";

import React from "react";
import ProductCard from "./ProductCard";
import OrderProvider from "./providers/OrderProvider";

type ProductListProps = {
  productList: Product[];
};

export default function ProductList({ productList = [] }: ProductListProps) {
  return (
    <OrderProvider>
      <div className="flex flex-wrap gap-4 mx-auto">
        {productList ? (
          productList?.map(({ _id, title, imageURL, price }) => (
            <ProductCard
              key={_id}
              title={title}
              imageURL={imageURL}
              price={price}
              _id={_id}
            />
          ))
        ) : (
          <p>Waiting for products...</p>
        )}
      </div>
    </OrderProvider>
  );
}
