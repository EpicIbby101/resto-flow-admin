"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Separator } from "./ui/separator";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@prisma/client";
import { DataTable } from "./ui/data-table";
import { ApiList } from "./api-list";
import { ProductsColumn, columns } from "./products-columns";

interface ProductsClientProps {
  data: ProductsColumn[];
}

const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Your Products (${data.length})`}
          description="Manage Your Products"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/products/new`)}
        >
          <Plus className="mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="List of API routes" />
      <ApiList entityName="products" entityIdName="productId" />
      <Separator />
    </>
  );
};

export default ProductsClient;
