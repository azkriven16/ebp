"use client";
import Image from "next/image";
import React, { useRef } from "react";
import BioAvatar from "@/public/bio.svg";
import { useInView, motion } from "framer-motion";
import { fadeVariant } from "./Animation";

export default function Bio() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 justify-center items-centerm mt-5"
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center w-full gap-2 mb-5">
          <code className="uppercase font-bold">bio</code>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2003</h3>
          <p>Born in Roxas, Philippines.</p>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2020</h3>
          <p>Graduated Hightschool at Iloilo King of Glory Christian Academy</p>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2023</h3>
          <p>Pursuing a degree at Northern Iloilo State University</p>
        </div>
      </div>
    </motion.div>
  );
}
