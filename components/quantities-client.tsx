"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Separator } from "./ui/separator";
import { useParams, useRouter } from "next/navigation";
import { QuantitiesColumn, columns } from "./quantities-columns";
import { DataTable } from "./ui/data-table";
import { ApiList } from "./api-list";

interface QuantitiesClientProps {
  data: QuantitiesColumn[];
}

const BillboardsClient: React.FC<QuantitiesClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Quantity List (${data.length})`}
          description="Manage Your Product Quantities"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/quantities/new`)}
        >
          <Plus className="mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="List of API quantities" />
      <ApiList entityName="quantities" entityIdName="quantityId" />
      <Separator />
    </>
  );
};

export default BillboardsClient;
