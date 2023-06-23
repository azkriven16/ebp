"use client";
import Image from "next/image";
import React, { useRef } from "react";
import featuredAvatar from "@/public/featured.svg";
import oldAvatar from "@/public/old.svg";
import { useInView, motion } from "framer-motion";
import { fadeVariant } from "./Animation";
import { usePathname } from "next/navigation";
import { oldWorkData, workData } from "@/data/workData";

export default function Featured() {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 justify-center items-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={fadeVariant}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center w-full gap-2 mb-5">
          {pathname !== "/" && (
            <Image
              width={65}
              height={65}
              src={featuredAvatar.src}
              alt=""
              className="object-cover rounded-full bg-gray-500"
            />
          )}
          <code className="uppercase font-bold">Works</code>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {workData.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-col justify-center items-center gap-2"
              >
                <img src={data.thumbnail} alt="" />
                <p>{data.title}</p>
                <p className="text-sm">{data.short}</p>
              </div>
            );
          })}
        </div>

        {pathname !== "/" && (
          <>
            <div className="flex items-center w-full gap-2 my-5">
              <Image
                width={65}
                height={65}
                src={oldAvatar.src}
                alt=""
                className="object-cover rounded-full bg-gray-500"
              />
              <code className="uppercase font-bold">Old Works</code>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {oldWorkData.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="flex flex-col justify-center items-center gap-1"
                  >
                    <img src={data.thumbnail} alt="" />
                    <p>{data.title}</p>
                    <p className="text-sm">{data.short}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {pathname === "/" && (
          <button className="btn mt-5 btn-secondary">More</button>
        )}
      </div>
    </motion.div>
  );
}
