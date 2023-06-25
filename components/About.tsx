"use client";
import Image from "next/image";
import React, { useRef } from "react";
import AboutAvatar from "@/public/about.svg";
import { useInView, motion } from "framer-motion";
import { fadeVariant } from "./Animation";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 justify-center items-centerm mt-5"
    >
      <div className="flex items-center w-full gap-2 mb-5">
        <code className="uppercase font-bold">about me</code>
      </div>
      <p className="text-sm indent-8 sm:tracking-wide">
        Hello! I'm Euger Bonete, a React web developer with expertise in
        building interactive web applications using modern tools and frameworks.
      </p>
      <p className="text-sm indent-8 sm:tracking-wide">
        I thrive on collaboration, working to transform concepts into functional
        interfaces. Let's connect and turn your ideas into reality!
      </p>

      <button className="btn mt-5 btn-secondary">Contact me</button>
    </motion.div>
  );
}
