import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      hasPaid: true,
      hasUsedFreeTrial: true,
    },
  });

  if (!user) {
    return NextResponse.json("User not found", { status: 404 });
  }

  return NextResponse.json(user);
} 