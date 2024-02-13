"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./billboards-cell-action";

export type ProductsColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<ProductsColumn>[] = [
  {
    accessorKey: "label",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
