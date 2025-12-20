"use client";

import { useEffect } from "react";

export default function WowInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new WOW().init();
    }
  }, []);

  return null; // This component doesn't render anything
}
