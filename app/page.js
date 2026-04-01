
"use client"

import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

        {/* Left Content */}
        <div className="flex flex-col gap-5 items-center justify-center text-center px-6 md:px-10 py-20">
          
          <p className={`text-2xl md:text-3xl font-bold py-5 ${poppins.className}`}>
            The best URL shortener in the market
          </p>

          <p className="text-gray-700 max-w-2xl py-10">
We deliver a reliable URL shortening solution that enables users to create, monitor, and manage links effectively with a clean interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 py-10">
            <Link href="/shorten">
              <button className="bg-purple-500 px-6 py-2 text-white rounded-lg font-bold hover:bg-purple-600 transition">
                Try Now
              </button>
            </Link>

            <Link href="/Github">
              <button className="bg-purple-500 px-6 py-2 text-white rounded-lg font-bold hover:bg-purple-600 transition">
                Github
              </button>
            </Link>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative h-[200px] md:h-auto w-full">
          <Image
            className="object-contain mix-blend-darken"
            alt="vector illustration"
            src="/vector.jpg"
            fill
          />
        </div>

      </section>
    </main>
  );
}