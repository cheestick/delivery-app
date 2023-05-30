import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    imageUrl: "/images/burger.jpg",
    title: "Small Burger",
  },
  {
    id: 2,
    imageUrl: "/images/burger.jpg",
    title: "Medium Burger",
  },
  {
    id: 3,
    imageUrl: "/images/burger.jpg",
    title: "Large Burger",
  },
  {
    id: 4,
    imageUrl: "/images/burger.jpg",
    title: "Big Burger",
  },
];

export default function ProductList() {
  return (
    <div className="flex flex-wrap gap-4 mx-auto">
      {products.map((p) => (
        <ProductCard key={p.id} title={p.title} imageUrl={p.imageUrl} />
      ))}
    </div>
  );
}
