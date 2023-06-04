const URL = process.env.NEXT_PUBLIC_API_URL;

export async function createNewOrder(order: Order) {
  const body = JSON.stringify(order);
  let result = null;
  if (window) {
    result = await window.fetch(`${URL}/orders`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return result;
}
