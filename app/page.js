
"use client"

import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

const features = [
  "Short your long URLs instantly",
  "Tracking every clcik on real-time analytics",
  "Manage all your links in one dashboard",
  "Custom aliases for your brand"
];


export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() =>{
    const timer = setInterval(() =>{
      setIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer)
  }, []);
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

        {/* Left Content */}
        <div className="flex flex-col gap-1 md:gap-2 items-center justify-center text-center px-6 md:px-10 py-20">
          
          <p className={`text-2xl md:text-3xl font-bold py-5 ${poppins.className}`}>
            The best URL shortener in the market
          </p>

          <p className="text-gray-700 max-w-2xl py-10">
We deliver a reliable URL shortening solution that enables users to create, monitor, and manage links effectively with a clean interface.
          </p>

          <div className="h-[30px] flex items-center gap-3 md:gap-5 justify-center mt-2">
            <AnimatePresence mode="wait">
              <motion.p
              key={features[index]}
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x:-20}}
              transtion={{duration: 0.4}}
              className="text-purple-500 font-semibold italic"
              >
                {features[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 py-10">
            <Link href="/shorten">
              <button className="bg-purple-500 px-6 py-2 text-white rounded-lg font-bold hover:bg-purple-600 transition">
                Try Now
              </button>
            </Link>

            <Link href="/Github">
            
              <button className="bg-gray-50 flex gap-3 px-4 py-2 text-black border-2 border-black rounded-lg font-bold hover:bg-gray-100 transition">
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
               <span>  Github</span>
              </button>
            </Link>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative gap-2 flex items-center justify-center min-h-[300px] md:min-h-auto w-full md:mt-0 pt-4 md:pt-20 md:gap-2 pb-10 md:pb-0">
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="w-[70%] md:w-full h-full relative"
  >
    <Image
      className="object-contain mix-blend-darken"
      alt="vector illustration"
      src="/vector.jpg"
      fill
      priority // LCP speed warning fix
      sizes="(max-w-768px) 100vw, 50vw" // Performance fix
    />
  </motion.div>
</div>
      </section>
    </main>
  );
}