import { NextResponse } from "next/server";
import { getAllShops } from "@/services/getAllShops";

export async function GET(req: Request, res: Response) {
  try {
    const shops: Shop[] = await getAllShops();

    if (!shops)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });

    return NextResponse.json(shops);
  } catch (error) {
    return NextResponse.json({ error: "Shops" }, { status: 500 });
  }
}
