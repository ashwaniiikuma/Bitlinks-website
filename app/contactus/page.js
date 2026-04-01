"use client"

import React, { useState } from "react"

const Page = () => {
  const [success, setSuccess] = useState(false)

  // ✅ form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  // ✅ handle change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log("Form Data:", form)

    const res = await fetch("/api/contact",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    
    const data = await res.json()
    

    // ✅ reset form
    if(data.success){
      setSuccess(true)

    setForm({
      name: "",
      email: "",
      message: ""
    })
  }else{
    alert(data.message)
  }
}

  return (
    <section className="flex justify-center items-center min-h-[85vh] bg-gradient-to-br from-purple-100 via-white to-purple-50 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] bg-white p-8 rounded-2xl shadow-xl"
      >
        
        <h2 className="text-3xl font-bold text-center mb-2 text-purple-700">
          Get in Touch
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Have a question or feedback? We'd love to hear from you.
        </p>

        {success && (
          <p className="text-green-600 text-center mb-4">
            ✅ Message sent successfully!
          </p>
        )}

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full h-[45px] border border-gray-300 rounded-md px-3 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full h-[45px] border border-gray-300 rounded-md px-3 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message, feedback or issue here..."
            required
            className="w-full h-[120px] border border-gray-300 rounded-md px-3 py-2 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-md font-medium 
          hover:bg-purple-600 hover:scale-[1.02] transition-all duration-200"
        >
          Send Message
        </button>

      </form>
    </section>
  )
}

export default Page