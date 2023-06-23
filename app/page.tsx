import React from "react";
import About from "@/components/About";
import Bio from "@/components/Bio";
import Hobbies from "@/components/Hobbies";
import Featured from "@/components/Featured";
import Image from "next/image";
import Profile from "@/public/profile.svg";

export default function HomePage() {
  return (
    <div>
      <div className="flex justify-between items-center gap-2 mt-5">
        <div>
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Euger Bonete Jr.
          </h1>
          <p className="text-xs sm:text-sm">
            Frontend ( Developer / Engineer / Designer )
          </p>
        </div>
        <Image
          width={65}
          height={65}
          src={Profile.src}
          alt=""
          className="object-cover rounded-full bg-gray-500"
        />
      </div>
      <div className="divider mb-10"></div>
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
