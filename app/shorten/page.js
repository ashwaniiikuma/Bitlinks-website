"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState()

    const generate = () =>{
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`${process.env.NEXT_PUBLIC_HOST}/api/generate`, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${result.shorturl}`)
    seturl("")
    setshorturl("")
    console.log(result)
    alert(result.message || "Short URL generated!")
  })
  .catch((error) => console.error(error));
}
   
  return (
<div className="min-h-[95vh] bg-gradient-to-r from-pink-100 via-pink-200 to-gray-100 flex items-start justify-center pt-10">
  <div className='mx-auto max-2xl bg-purple-100 my-16 p-8 rounded-lg shadow-lg flex flex-col gap-4'>
      
<h1 className='font-bold text-4xl text-purple-700 text-center'>
Generate Your Short URLs
</h1>

<div className='flex flex-col gap-3'>

<input
type="text"
value={url}
className='bg-white p-4 rounded-md outline-none  hover:scale-105 transition-all duration-400 ease-in-out'
placeholder='Enter your URL'
onChange={e => seturl(e.target.value)}
/>

<input
type="text"
value={shorturl}
className='bg-white p-4 rounded-md   hover:scale-105 outline-none transition-all duration-400 ease-in-out'
placeholder='Enter your preferred short URL text'
onChange={e => setshorturl(e.target.value)}
/>

<button
onClick={generate}
className="bg-purple-500 font-bold shadow-lg text-white p-3 rounded-md hover:bg-purple-600 hover:scale-105 transition-all duration-400 ease-in-out">
Generate Short Link
</button>

</div>

{generated && (
<>
<span className='font-bold text-lg'>Your link:</span>
<code>
<Link target="_blank" href={generated}>{generated}</Link>
</code>
</>
)}

</div>
</div>
  )
}

export default Page
