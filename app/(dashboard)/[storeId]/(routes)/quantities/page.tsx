import QuantitiesClient from "@/components/quantities-client";
import { QuantitiesColumn } from "@/components/quantities-columns";
import { format } from "date-fns";
import prismadb from "@/lib/prismadb";

const QuantitiesPage = async ({ params }: { params: { storeId: string } }) => {
  const quantities = await prismadb.quantity.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedQuantities: QuantitiesColumn[] = quantities.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <QuantitiesClient data={formattedQuantities} />
      </div>
    </div>
  );
};

export default QuantitiesPage;
