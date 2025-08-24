import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const interviews = await db.interview.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  return NextResponse.json(interviews);
}