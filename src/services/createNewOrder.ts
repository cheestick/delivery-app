import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL;

export async function createNewOrder(order: Order) {
  const body = JSON.stringify(order);
  try {
    const result = await axios.post(`${URL}/orders`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result;
  } catch (error) {
    return null;
  }
}
