import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import clientPromise from "@/lib/mongodb"

export async function POST(req) {
  try {
    const { shorturl } = await req.json()

    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    await collection.deleteOne({
      shorturl: shorturl,
      email: session.user.email   // 🔥 security (sirf apne links delete kare)
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}