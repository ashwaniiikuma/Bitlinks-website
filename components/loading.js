"use client";
import { useState, useEffect } from "react";
import SplashScreen from "./splashScreen";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingHandler({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [duration, setDuration] = useState(2500);

useEffect(()=>{

  const isMainWebsitePage = 
  pathname === "/" ||
   pathname.startsWith("/dashboard") ||
   pathname.startsWith("/about") ||
   pathname.startsWith("/contactus") ||
   pathname.startsWith("/privacy") ||
   pathname.startsWith("/shorten");

   const hasSeenSplash = typeof window !=="undifine"? sessionStorage.getItem(hasSeenSplash) : null;

   if(!isMainWebsitePage){

    setDuration(0);
    setIsLoading(false);
   }else if(hasSeenSplash){
    setDuration(0);
    setIsLoading(false);

   }else{
    setDuration(2500);
    
    sessionStorage.getItem("hasSeenSplash", "true");
   }
},[pathname]);

return(
  <>
  <AnimatePresence mode="wait">
    {isLoading && duration > 0 ? (
      <SplashScreen key="loader" finishLoading={() => setIsLoading(false)} duration={duration}/>
    ) : (
      <motion.div
      key = "content"
      initial={duration > 0 ? {opacity: 0}: {opacity: 1}}
      animate={{opacity:1}}
      transition={{duration: 0.3}}
      >
        {children}
      </motion.div>
    )}

  </AnimatePresence>
  </>
);
  
}

// useEffect(() =>{
  //   const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

  //   if(hasSeenSplash){
  //     setLoading(false);
  //   }else{
  //     const timer = setTimeout(() =>{
  //       setLoading(false);
  //       sessionStorage.setItem("hasSeenSplash", "true");
  //     }, 2500);

  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  // if (loading) return <SplashScreen/>
  // return <div className="animate-in fade-in duration-700">{children}</div>
