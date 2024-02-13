import ProductsClient from "@/components/products-client";
import { ProductsColumn } from "@/components/products-columns";
import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      quantity: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductsColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured.toString(),
    isArchived: item.isArchived.toString(),
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    quantity: item.quantity.name,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
