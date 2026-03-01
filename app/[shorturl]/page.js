

import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {

    const { shorturl } = await params  // ✅ no await needed

  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")


  // pehele document find karo
    const doc = await collection.findOne({ shorturl })

  if (!doc) {
    redirect(process.env.NEXT_PUBLIC_HOST)
  }
  
  const result = await collection.updateOne(
    { shorturl: shorturl },
    { $inc: { visits: 1 } },
    { returnDocument: "after" }
  )
  //Redirect
  redirect(doc.url)

    return <div>My Post: {url}</div>


  
}