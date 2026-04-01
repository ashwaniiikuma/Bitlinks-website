import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import clientPromise from "@/lib/mongodb" // 👈 tumhara DB connection

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("bitlinks") 

    const links = await db
      .collection("url")
      .find({ email: session.user.email })
      .toArray()

    return NextResponse.json(links)
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}