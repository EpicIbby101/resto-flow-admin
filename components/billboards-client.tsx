"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Separator } from "./ui/separator";
import { useParams, useRouter } from "next/navigation";

const BillboardsClient = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Billboards" description="Manage Your Billboards" />
        <Button onClick={() => router.push(`/${params.storeId}/billboard/new`)}>
          <Plus className="mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default BillboardsClient;
