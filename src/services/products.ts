import { BASE_URL } from "../utilities/consts";

export async function getProducts(params: string) {
  const response = await fetch(`${BASE_URL}?${params}`);
  return await response.json();
}
