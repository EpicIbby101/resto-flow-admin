import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { APIAlert } from "./ui/api-alert";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`

  return (
    <>
    <APIAlert title="GET" description={`${baseUrl}/${entityName}`} variant="public"/>
    <APIAlert title="GET" description={`${baseUrl}/${entityName}/${entityIdName}`} variant="public"/>
    <APIAlert title="POST" description={`${baseUrl}/${entityName}`} variant="admin"/>
    <APIAlert title="PATCH" description={`${baseUrl}/${entityName}/${entityIdName}`} variant="admin"/>
    <APIAlert title="DELETE" description={`${baseUrl}/${entityName}/${entityIdName}`} variant="admin"/>

    </>
  );
};
