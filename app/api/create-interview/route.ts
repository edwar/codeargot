import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();

  try {
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      user = await db.user.create({
        data: {
          id: userId,
          email: "",
          name: "",
        },
      });
    }

    const { name, rol, level } = await req.json();
    
    const interview = await db.interview.create({
      data: {
        name,
        rol,
        level,
        userId,
      },
    });
    return NextResponse.json(interview);
  } catch (error) {
    console.log("[INTERVIEW]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }


}