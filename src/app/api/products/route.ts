import { NextResponse } from "next/server";

const products: Product[] = [
  {
    id: 2001,
    title: "Super Burger",
    price: 20.95,
    shopId: 1001,
    imageUrl: "/images/burger.jpg",
  },
  {
    id: 2002,
    title: "King Cheeseburger",
    price: 19.99,
    shopId: 1001,
    imageUrl: "/images/burger.jpg",
  },
  {
    id: 2003,
    title: "Royal Burger",
    price: 25.5,
    shopId: 1001,
    imageUrl: "/images/burger.jpg",
  },
];

export async function GET(req: Request) {
  return NextResponse.json(products);
}
