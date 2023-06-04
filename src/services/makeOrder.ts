import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Orders";

export async function makeOrder(order: Order) {
  try {
    await mongooseConnect();

    const newOrder = new Order(order);
    await newOrder.validate();

    await Order.create(order);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
