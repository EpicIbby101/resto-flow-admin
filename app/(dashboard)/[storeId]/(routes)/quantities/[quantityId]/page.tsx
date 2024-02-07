import { QuantityForm } from "@/components/quantities-form";
import prismadb from "@/lib/prismadb";

const QuantitiesPage = async ({
  params,
}: {
  params: { quantityId: string };
}) => {
  const quantity = await prismadb.quantity.findUnique({
    where: {
      id: params.quantityId,
    },
  });



  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
        <QuantityForm initialData={quantity}/>
        </div>
    </div>
  );
};

export default QuantitiesPage;
