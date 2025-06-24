"use client";
import { parseAsInteger, useQueryState } from "nuqs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductsPaginationPage {
  refecthProducts: () => Promise<void>;
}

const ProductPagintaion = ({ refecthProducts }: ProductsPaginationPage) => {
  const [offset, setOffset] = useQueryState(
    "offset",
    parseAsInteger.withDefault(10)
  );

  const handleOffsetChange = (value: number) => {
    setOffset(value);

    setTimeout(() => {
      refecthProducts();
    }, 300);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagintaion;
