import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export async function getAllProducts() {
  await mongooseConnect();

  const products: Product[] = await Product.find({});

  return products;
}
