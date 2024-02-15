"use client";

import { Heading } from "./ui/heading";
import { Separator } from "./ui/separator";
import { Billboard } from "@prisma/client";
import { OrderColumn, columns } from "./orders-columns";
import { DataTable } from "./ui/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrdersClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage Your Orders"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};

export default OrdersClient;
