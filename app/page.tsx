import { getProducts } from "@/server/products";
import { loadSearchParams } from "./search-params";
import type { SearchParams } from "nuqs/server";
import ProductCard from "@/components/product-card";
import ProductsFilter from "@/components/product-filter";
import { revalidateTag } from "next/cache";
import ProductPagintaion from "@/components/product-pagination";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

const Home = async ({ searchParams }: PageProps) => {
  const { search, perPage, offset } = await loadSearchParams(searchParams);

  const transformedOffset = (offset - 1) * perPage;

  const products = await getProducts({
    search,
    perPage,
    offset: transformedOffset,
  });

  async function refetchProducts() {
    "use server";

    revalidateTag("products");
  }

  return (
    <main className="flex flex-col gap-10 px-8 justify-center max-w-7xl mx-auto py-10">
      <h1 className="text-[4vw] w-full text-center font-bold">
        Awesome Products
      </h1>

      <ProductsFilter refetchProducts={refetchProducts} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductPagintaion refetchProducts={refetchProducts} />
    </main>
  );
};

export default Home;
