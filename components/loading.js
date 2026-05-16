"use client";
import { useState, useEffect } from "react";
import SplashScreen from "./splashScreen";
export default function LoadingHandler({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return <div className="animate-in fade-in duration-700">{children}</div>;
}