import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const body = await req.json()

    const { name, email, message } = body

    // ✅ Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      )
    }

    // ✅ Testing
    // console.log(" New Contact Message:")
    // console.log("Name:", name)
    // console.log("Email:", email)
    // console.log("Message:", message)

    // Nodemailer entery hogi
    // Transporter (Gmail setup)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    //Email content
    const mailoptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message - Bitlinks",
      html:`
      <h2>New Message Received</h2>
      <p><b>Name:</b>${name}</p>
      <p><b>Email:</b>${email}</p>
      <p><b>Message:</b>${message}</p>
      `
    }
    // send email
    await transporter.sendMail(mailoptions)

    return NextResponse.json({
      success: true,
      message: "✅ Email sent successfully"
    })

  } catch (error) {
    console.log(" Error:", error)

    return NextResponse.json( // ✅ FIXED HERE
      { success: false, message: "Server error" },
      { status: 500 }
    )
  }
}