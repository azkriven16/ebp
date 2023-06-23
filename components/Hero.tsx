"use client";
import React from "react";
import Img from "@/public/typing-guy.gif";
import { motion } from "framer-motion";
import { homeVariant } from "./Animation";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={homeVariant}
    >
      <div className="relative w-full h-full" id="home">
        <img src={Img.src} alt="" className="w-full h-72 object-contain" />
        {pathname === "/" && (
          <h1 className="text-center px-4 py-3 w-full rounded-md btn btn-secondary capitalize">
            Hello, I'm a react web developer.
          </h1>
        )}
      </div>
    </motion.div>
  );
}
