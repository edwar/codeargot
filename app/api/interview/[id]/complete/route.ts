import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const { transcript } = await req.json()
    try {
        const interview = await db.interview.update({
            where: {
                id,
            },
            data: {
              completedAt: new Date(),
              transcript
            }
        })

        return NextResponse.json({ message: "Interview completed successfully" })
    } catch (error) {
        console.error("Failed to complete interview", error)
        return NextResponse.json({ error: "Failed to complete interview" }, { status: 500 })
    }
}