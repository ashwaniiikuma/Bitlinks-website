import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST (req) {
    
    try{
        const {oldShort, newShort } = await req.json()

        //Validation
    if(!oldShort || !newShort){
        return NextResponse.json(
            {success: false, message: "All field are requird"},
            {status: 400}
        )
    }

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    //check duplicate short url
    const exist = await collection.findOne({ shorturl: newShort})

    if(exist){
        return NextResponse.json({
            success: false,
            message: "short URL already exists"
        })
    }
    //update query
    const result = await collection.updateOne(
        {shorturl: oldShort},
        {$set: {shorturl: newShort}}
    )

    if(result.modifiedCount === 0){
        return NextResponse.json({
            success: false,
            message: "Link not found"
        })
    }
    return NextResponse.json({
        success: true,
        message: "Link update successfully"
    })
    }catch(error){
        console.log("Error:", error)

        return NextResponse.json(
            {success: false, message: "Server error"},
            {status: 500}
        )
    }
}