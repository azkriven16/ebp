"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { fadeVariant } from "./Animation";
import { usePathname } from "next/navigation";
import { oldWorkData, workData } from "@/data/workData";
import Link from "next/link";

export default function Featured() {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 justify-center items-center"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center w-full gap-2 mb-5">
          <code className="uppercase font-bold">Works</code>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {workData.map((data) => {
            return (
              <Link
                href={`/works/${data.id}`}
                key={data.id}
                className="flex flex-col justify-center items-center gap-2"
              >
                <img src={data.thumbnail} alt="" className="rounded-lg" />
                <p>{data.title}</p>
                <p className="text-sm">{data.short}</p>
              </Link>
            );
          })}
        </div>

        {pathname !== "/" && (
          <>
            <div className="flex items-center w-full gap-2 my-5">
              <code className="uppercase font-bold">Old Works</code>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {oldWorkData.map((data) => {
                return (
                  <Link
                    href={`/works/${data.id}`}
                    key={data.id}
                    className="flex flex-col justify-center items-center gap-1"
                  >
                    <img src={data.thumbnail} alt="" className="rounded-lg" />
                    <p>{data.title}</p>
                    <p className="text-sm">{data.short}</p>
                  </Link>
                );
              })}
            </div>
          </>
        )}
        {pathname === "/" && (
          <Link href="/works" className="btn mt-5 btn-secondary">
            More
          </Link>
        )}
      </div>
    </motion.div>
  );
}
