"use server";

import { Products } from "@/components/shared/types";
import { unstable_cache } from "next/cache";

interface GetProductsParams {
  search?: string;
  perPage?: number;
}

export const getProducts = unstable_cache(
  async (params: GetProductsParams): Promise<Products[]> => {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products/?title=${params.search}&offset=0&limit=${params.perPage}`
    );
    const data = await res.json();

    return data;
  },
  ["products"],
  {
    tags: ["products"],
  }
);
