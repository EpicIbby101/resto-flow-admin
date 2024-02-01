"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Separator } from "./ui/separator";
import { useParams, useRouter } from "next/navigation";
import { columns } from "./category-columns";
import { DataTable } from "./ui/data-table";
import { ApiList } from "./api-list";
import { CategoryColumn } from "./category-columns";

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage Your Billboards"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="List of API routes" />
      <ApiList entityName="billboards" entityIdName="billboardsId" />
      <Separator />
    </>
  );
};

export default CategoryClient;
