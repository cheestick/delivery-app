import { getAllProducts } from "@/services/getAllProducts";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const products: Product[] = await getAllProducts();

  return NextResponse.json(products);
}
