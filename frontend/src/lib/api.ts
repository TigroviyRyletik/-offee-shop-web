const API_BASE_URL = "http://localhost:5229/api";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId?: number;
}

export interface Category {
  id: number;
  name: string;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, { cache: 'no-store' });
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createOrder(userId: number, items: { productId: number, quantity: number }[]) {
  const res = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, items })
  });
  if (!res.ok) throw new Error("Order failed");
  return await res.json();
}
