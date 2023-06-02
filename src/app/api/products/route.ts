import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await mongooseConnect();

  const products: Product[] = await Product.find({});

  return NextResponse.json(products);
}
