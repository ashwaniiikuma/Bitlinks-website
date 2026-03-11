  "use client"
import React from "react";

const page = () => {
  const handlesubmit =(e)=>{
    alert("Message send successfully")
  }

  
  return (
    <section className="flex justify-center items-center min-h-[80vh] bg-purple-50">
      <form onSubmit={handlesubmit} className="w-full max-w-[600px] bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Form</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full h-[45px] border border-gray-300 rounded-md px-3 focus:outline-none focus:border-purple-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            className="w-full h-[45px] border border-gray-300 rounded-md px-3 focus:outline-none focus:border-purple-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Your Message</label>
          <textarea
            className="w-full h-[120px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-md font-medium hover:bg-purple-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default page;