"use client"
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen({finishLoading, duration = 2500}) {
useEffect(() =>{
    const timeout = setTimeout(() =>{
        finishLoading();
    }, duration);

    return () =>clearTimeout(timeout);
}, [finishLoading, duration]);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden">
            {/* Main Logo Container - items-baseline is key here */}
            <div className="flex items-baseline justify-center">
                
                {/* Big 'B' - Size thoda adjust kiya hai ratio match karne ke liye */}
                <motion.span
                    initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ 
                        duration: 0.8, 
                        ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="text-[120px] md:text-[150px] font-black text-purple-600 leading-[0.8]"
                >
                    B
                </motion.span>

                {/* 'itlinks' - Width reveal with proper spacing */}
                <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{ 
                        delay: 0.5, 
                        duration: 0.9, 
                        ease: [0.65, 0, 0.35, 1] 
                    }}
                    className="overflow-hidden whitespace-nowrap text-6xl md:text-8xl font-black text-purple-600 tracking-tighter leading-none"
                >
                    itlinks
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-black ml-1"
                    >
                        .
                    </motion.span>
                </motion.span>
            </div>

            {/* Thoda niche minimal progress bar */}
            <div className="absolute bottom-32 w-40 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 1.8, 
                        ease: "easeInOut" 
                    }}
                    className="h-full w-full bg-purple-600"
                />
            </div>
        </div>
    );
}