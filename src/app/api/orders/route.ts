import { makeOrder } from "@/services/makeOrder";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ message: "Get Orders" });
}

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, phone, address } = body.credentials;
  if (!name.trim() || !email.trim() || !phone.trim() || !address.trim())
    return NextResponse.json(
      { message: "All credentials required" },
      { status: 400 }
    );

  const hasOrderCreated = await makeOrder(body);

  if (!hasOrderCreated)
    return NextResponse.json({ message: "Order not created" }, { status: 500 });

  return NextResponse.json({ message: "New order created" }, { status: 201 });
}
