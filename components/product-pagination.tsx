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
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

interface ProductsPaginationPage {
    refetchProducts: () => Promise<void>;
}

const ProductPagintaion = ({ refetchProducts }: ProductsPaginationPage) => {
  const [offset, setOffset] = useQueryState(
    "offset",
    parseAsInteger.withDefault(1)
  );

  const handleOffsetChange = (value: number) => {
    setOffset(value);

    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  return (
    <Pagination>
      <PaginationContent>
        {offset > 1 && (
          <>
            <PaginationItem>
              <Button
                variant="outline"
                onClick={() => handleOffsetChange(offset - 1)}
              >
                <ChevronLeft />
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="outline"
                onClick={() => handleOffsetChange(offset - 1)}
              >
                {offset - 1}
              </Button>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <Button variant="outline" disabled>
            {offset}
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            variant="outline"
            onClick={() => handleOffsetChange(offset + 1)}
          >
            {offset + 1}
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagintaion;
