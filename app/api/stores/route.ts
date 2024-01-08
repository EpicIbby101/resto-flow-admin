import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// We need to export an async function where we make a POST request and catch any errors.
// It's good practice to console log any errors during development.
export async function POST(req: Request) {
  try {
    // We want to use Clerk to authenticate the POST route for the user who wants to create a new store.
    // If the user is not authorized to create a store, we need to return an error.
    // Next we want to extract the body of the API response in json format.
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    // After catching errors for insufficient user details, we can move onto creating the store when user has sufficient details.
    // We create an await variable and call prismadb and create the store using name and userId.
    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });

    // Return the json.
    return NextResponse.json(store)

  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
