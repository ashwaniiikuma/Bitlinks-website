import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const session = await getServerSession(authOptions)

if (!session) {
  return NextResponse.json({ error: "Not logged in" }, { status: 401 })
}

    // check if short url already exists
    const doc = await collection.findOne({ shorturl: body.shorturl })

    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already exists!"
      })
    }

    await collection.insertOne({
  url: body.url,
  shorturl: body.shorturl,
  email: session.user.email, // ✅ ADD THIS LINE
  visit: 0,
  clicks: 0
})

    return Response.json({
      success: true,
      error: false,
      message: "URL generated successfully"
    })

  } catch (error) {
    console.log(error)

    return Response.json({
      success: false,
      error: true,
      message: "Server Error"
    })
  }
}