"use client";
import React from "react";
import { motion } from "framer-motion";
import { loadingVariant } from "./Animation";

export default function LoaderLayout({ children }: { children: any }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={loadingVariant}
    >
      {children}
    </motion.div>
  );
}
