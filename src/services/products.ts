export async function getProducts(newURL: string, params: string) {
  const response = await fetch(`${newURL}?${params}`);
  return await response.json();
}
