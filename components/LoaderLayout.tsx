"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { loadingVariant } from "./Animation";
import { usePathname } from "next/navigation";

export default function LoaderLayout({ children }: { children: any }) {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={loadingVariant}
        key={path}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
