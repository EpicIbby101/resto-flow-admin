import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string; quantityId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, value } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("label is required", { status: 400 });
    }

    if (!value) {
      return new NextResponse("imageUrl is required", { status: 400 });
    }

    if (!params.quantityId) {
      return new NextResponse("quantityId is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const quantity = await prismadb.quantity.update({
      where: {
        id: params.quantityId,
      },
      data: {
        name,
        value,
      },
    });

    return NextResponse.json(quantity);
  } catch (error) {
    console.log("[QUANTITIES_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { quantityId: string } }
) {
  try {
    if (!params.quantityId) {
      return new NextResponse("quantityId is required", { status: 400 });
    }

    const quantity = await prismadb.quantity.findUnique({
      where: {
        id: params.quantityId,
      },
    });

    return NextResponse.json(quantity);
  } catch (error) {
    console.log("[QUANTITIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string; quantityId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.quantityId) {
      return new NextResponse("quantityId is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    const quantity = await prismadb.quantity.delete({
      where: {
        id: params.quantityId,
      },
    });

    return NextResponse.json(quantity);
  } catch (error) {
    console.log("[QUANTITIES_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
