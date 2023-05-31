import { NextResponse } from "next/server";

const shops: Shop[] = [
  {
    id: 1001,
    name: "KFCK",
  },
  {
    id: 1002,
    name: "Mc Daddy",
  },
  {
    id: 1003,
    name: "Salmoneira",
  },
  {
    id: 1004,
    name: "Gold & Wine",
  },
  {
    id: 1005,
    name: "Susiray",
  },
];

export async function GET(req: Request) {
  return NextResponse.json(shops);
}
