"use client";
import React from "react";
import About from "@/components/About";
import Bio from "@/components/Bio";
import Hobbies from "@/components/Hobbies";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-lg min-h-screen flex flex-col gap-5 px-5 overflow-hidden">
      <div className="absolute top-0 opacity-0" id="home"></div>
      <Hero />
      <div className="divider opacity-0"></div>
      <About />
      <div className="divider opacity-0"></div>
      <Featured />
      <div className="divider opacity-0"></div>
      <Bio />
      <div className="divider opacity-0"></div>
      <Hobbies />
    </div>
  );
}
