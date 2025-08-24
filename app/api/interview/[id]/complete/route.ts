import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const { transcript } = await req.json()
    const user = await currentUser()
    if(!user) {
      return NextResponse.json("Unauthorized", { status: 401 })
    }
    try {
        const interview = await db.interview.update({
            where: { id },
            data: {
              completedAt: new Date(),
              transcript
            }
        })

        await db.user.update({
          where: { id: user.id },
          data: { hasUsedFreeTrial: true }
        })

        return NextResponse.json({ message: "Interview completed successfully" })
    } catch (error) {
        console.error("Failed to complete interview", error)
        return NextResponse.json({ error: "Failed to complete interview" }, { status: 500 })
    }
}