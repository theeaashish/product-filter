import Image from "next/image";
import { Products } from "./shared/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: Products;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const imageUrl = product.images[0].startsWith("http")
    ? product.images[0]
    : `https://i.imgur.com/${product.images[0]}`;

  return (
    <Card key={product.id} className="px-0 pt-0 flex flex-col justify-between">
      <CardHeader className="p-0 relative">
        <Image
          src={imageUrl}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <Badge className="absolute top-2 left-2 ">
          {product.category.name}
        </Badge>
        <div className="px-6 py-4">
          <CardTitle>{product.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="font-semibold text-xl">${product.price}</p>
        <CardDescription>{product.description.slice(0, 80)}...</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="cursor-pointer">
          <ShoppingCartIcon size={4} />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
