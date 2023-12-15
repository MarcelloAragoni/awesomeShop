import { Product } from "../components/ProductGrid/ProductGrid";

export type Data = {
  products: Product[];
  hasPrev: boolean;
  hasNext: boolean;
};

export async function getProducts(
  newURL: string,
  params: string,
): Promise<Data> {
  const response = await fetch(`${newURL}?${params}`);
  const hasPrev = response.headers.get("Link")!.includes("prev");
  const hasNext = response.headers.get("Link")!.includes("next");

  return {
    products: await response.json(),
    hasPrev: hasPrev,
    hasNext: hasNext,
  };
}
