import { Order } from "@/models/Orders";

export async function makeOrder(order: Order) {
  const newOrder = new Order(order);

  try {
    await newOrder.validate();
    await Order.create(order);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
