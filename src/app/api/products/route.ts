import { getAllProducts } from "@/services/getAllProducts";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const products: Product[] = await getAllProducts();

  if (!products)
    return NextResponse.json({ message: "Not Found" }, { status: 404 });

  return NextResponse.json(products);
}
