"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./products-cell-action";

export type ProductsColumn = {
  id: string;
  name: string;
  price: string;
  category: string;
  quantity: string;
  isFeatured: string;
  isArchived: string;
  createdAt: string;
};

export const columns: ColumnDef<ProductsColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
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
