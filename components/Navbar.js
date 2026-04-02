"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false)

  return (
    <nav className='bg-purple-700 text-white px-4 py-3 relative'>

      {/* TOP BAR */}
      <div className='flex justify-between items-center'>
        
        {/* LOGO */}
        <div className='font-bold text-2xl'>
          <Link href="/">Bitlinks</Link>
        </div>

        {/* MENU ICON (MOBILE) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 cursor-pointer md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setOpen(!open)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        {/* DESKTOP MENU */}
        <ul className='hidden md:flex items-center gap-4 text-sm md:text-base'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/shorten"><li>Shorten</li></Link>
          <Link href="/contactus"><li>Contact Us</li></Link>
          <Link href="/dashboard"><li>Your links</li></Link>
          <Link href="/privacy"><li>Privacy</li></Link>

          <li className='flex gap-2'>
            <Link href="/shorten">
              <button className='bg-purple-500 px-3 py-1 rounded-lg font-bold'>
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/ashwaniiikuma/Bitlinks-website" target="_blank">
              <button className='bg-purple-500 px-3 py-1 rounded-lg font-bold'>
                Github
              </button>
            </Link>
          </li>

          {/* AUTH */}
          <li>
            {session ? (
              <div className="flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full">
                <span className="text-sm">
                  {session.user.email}
                </span>

                <button
                  onClick={() => signOut()}
                  className="bg-purple-500 px-3 py-1 rounded-full text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="bg-purple-600 px-4 py-1 rounded-full"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>

      {/* ✅ SIDEBAR (MOBILE) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-purple-800 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 md:hidden`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b border-purple-600">
          <h2 className="text-lg font-bold">Menu</h2>

          <span
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ✕
          </span>
        </div>

        {/* MENU ITEMS */}
        <ul className="flex flex-col gap-4 p-4 text-lg">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/shorten" onClick={() => setOpen(false)}>Shorten</Link>
          <Link href="/contactus" onClick={() => setOpen(false)}>Contact Us</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)}>Your links</Link>
          <Link href="/privacy" onClick={() => setOpen(false)}>Privacy</Link>

          <Link href="/shorten" onClick={() => setOpen(false)}>
            <button className="bg-purple-500 px-3 py-1 rounded-lg">
              Try Now
            </button>
          </Link>

          <Link href="https://github.com/ashwaniiikuma/Bitlinks-website" target="_blank">
            <button className="bg-purple-500 px-3 py-1 rounded-lg">
              Github
            </button>
          </Link>

          {/* AUTH */}
          {session ? (
            <>
              <span className="text-sm break-all">{session.user.email}</span>
              <button
                onClick={() => {
                  signOut()
                  setOpen(false)
                }}
                className="bg-purple-500 px-3 py-1 rounded-full"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                signIn()
                setOpen(false)
              }}
              className="bg-purple-600 px-4 py-1 rounded-full"
            >
              Login
            </button>
          )}
        </ul>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  )
  
}


