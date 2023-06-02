import { mongooseConnect } from "@/lib/mongoose";
import { Shop } from "@/models/Shop";

export async function getAllShops() {
  await mongooseConnect();

  const shops: Shop[] = await Shop.find({});

  return shops;
}
