import { makeOrder } from "@/services/makeOrder";
import { validateCredentials } from "@/utils/validateCredentials";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ message: "Get Orders" });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!validateCredentials(body.credentials))
    return NextResponse.json(
      { message: "All credentials required" },
      { status: 400 }
    );

  const hasOrderCreated = await makeOrder(body);

  if (!hasOrderCreated)
    return NextResponse.json({ message: "Order not created" }, { status: 500 });

  return NextResponse.json({ message: "New order created" }, { status: 201 });
}
