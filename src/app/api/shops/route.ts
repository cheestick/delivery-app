import { NextResponse } from "next/server";
import { mongooseConnect } from "@/lib/mongoose";
import { Shop } from "@/models/Shop";

export async function GET(req: Request, res: Response) {
  await mongooseConnect();

  const shops: Shop[] = await Shop.find({});

  if (!shops) {
    return new Response("Not found", { status: 404 });
  }

  return NextResponse.json(shops);
}
