

"use client"

import { useSession, signIn } from "next-auth/react"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const { data: session } = useSession()
  const [links, setLinks] = useState([])
  const [editing, setEditing] = useState(null)
  const [newShort, setNewShort] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (session) {
      fetchLinks()
    }
  }, [session])

  const fetchLinks = async () => {
    const res = await fetch("/api/my-links")
    const data = await res.json()
    setLinks(data)
  }

  const deleteLink = async (shorturl) => {
    const res = await fetch("/api/delete-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ shorturl })
    })

    const data = await res.json()

    if (data.success) {
      alert("Deleted successfully!")  
      fetchLinks()
    } else {
      alert("Error deleting link")
    }
  }

  const handleupdate = async (oldShort)=>{
    const res = await fetch("/api/update-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        oldShort,
        newShort
      })
    })

    const data = await res.json()

    if(data.success) {
      setEditing(null)
      fetchLinks()
    }else{
      alert(data.message)
    }
  }

  if (!session) {
    return (
      <div className="text-center mt-20 ">
        <p className="text-lg">Please login to view dashboard</p>
        <button
          onClick={() => signIn()}
          className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Login
        </button>
      </div>
    )
  }
  const filteredLinks = links.filter((link)=>
  link.url.toLowerCase().includes(search.toLowerCase()) ||
  link.shorturl.toLowerCase().includes(search.toLowerCase())

  )

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h1 className="text-2xl font-bold mb-5">Your Links</h1>
      <input type="text" placeholder="Search your links..." value={search} onChange={(e) => setSearch(e.target.value)}
      className="w-full mb-4 px-2 py-2 border rounded-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition" />

      <div className="flex flex-col gap-4">
        {filteredLinks.map((link, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center flex-wrap"
          >
            <div>
              <p className="text-sm text-gray-500 break-all">
                {link.url}
              </p>

              {editing === link.shorturl ? (
                <>
                <input value={newShort}
                onChange={(e)=> setNewShort(e.target.value)}
                className="border border-gray-300 focus:outline-none focus:ring-purple-400  focus:ring-2  transition-all duration-200 px-2 py-1 rounded" placeholder="Edit short link..." />
                <button onClick={()=> handleupdate(link.shorturl)}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 ml-2 rounded-md shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200">Save
                  
                </button>
                </>
              ):(
              <a
                href={`${process.env.NEXT_PUBLIC_HOST}/${link.shorturl}`}
                target="_blank"
                className="text-purple-600 font-semibold"
              >
                {process.env.NEXT_PUBLIC_HOST}/{link.shorturl}
              </a>
               )}


              <p className="text-xs text-gray-400">
                Clicks: {link.visit || 0}
              </p>
            </div>

            <div className="flex justify-around gap-2 flex-wrap">
              <button
              
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${process.env.NEXT_PUBLIC_HOST}/${link.shorturl}`
                  )
                  alert("Copied!")
                }}
                className="bg-purple-500 text-white px-3 py-1 md:px-1 rounded-md hover:bg-purple-600"
              >
                  <lord-icon
    src="https://cdn.lordicon.com/iykgtsbt.json"
    trigger="hover"
    style={{ width: "20px", height: "20px" }}
  ></lord-icon>

                Copy
              </button>

              <button
                className="bg-amber-500 text-white px-3 py-1 md:px-1 rounded-md hover:bg-amber-600"
                onClick={() => {
                  const ok = confirm("Are you sure you want to delete this link?")
                  if (ok) {
                    deleteLink(link.shorturl)
                  }
                }}
              >
                Delete
              </button>
              <button onClick={()=>{
                setEditing(link.shorturl)
                setNewShort(link.shorturl)
              }} className="bg-blue-300 text-white px-3 py-1 rounded-md">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}