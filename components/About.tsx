"use client";
import Image from "next/image";
import React from "react";
import AboutAvatar from "@/public/about.svg";
import { Fade } from "./Animation";

export default function About() {
  return (
    <Fade bottom once={false}>
      <div className="flex flex-col gap-2 justify-center items-centerm mt-5">
        <div className="flex items-center w-full gap-2 mb-5">
          <Image
            width={75}
            height={75}
            src={AboutAvatar.src}
            alt=""
            className="object-cover rounded-full bg-gray-500"
          />
          <code className="uppercase font-bold">about me</code>
        </div>
        <p className="text-sm indent-8 sm:tracking-wide">
          Hello! I'm Euger Bonete, a React web developer specializing in
          creating interactive web applications using modern tools and
          frameworks. With a strong background in front-end development, I build
          scalable React applications, develop dynamic UI components, and stay
          up-to-date with industry trends to deliver cutting-edge solutions.
          Collaboration is essential as I translate design concepts into
          functional interfaces. Let's connect and bring your ideas to life!
        </p>

        <button className="btn mt-5 btn-secondary">Contact me</button>
      </div>
    </Fade>
  );
}
