"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function Scroll() {
  const pathname = usePathname();
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [pathname]);
  return null;
}

export default Scroll;
