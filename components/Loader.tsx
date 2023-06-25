"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useProgress } from "@react-three/drei";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();
  const { progress } = useProgress();

  useEffect(() => {
    setTimeout(() => {
      if (progress == 100) setLoading(false);
    }, 1000);
  }, [progress]);

  useEffect(() => {
    if (!loading) {
      controls.start({ opacity: 0, y: -20, transition: { duration: 0.5 } });
    }
  }, [loading, controls]);
  console.log(progress);
  return (
    <>
      {loading ? (
        <motion.div
          className={`fixed bg-base-100 top-0 z-50 bottom-0 left-0 right-0 flex items-center justify-center flex-col gap-5`}
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
        >
          <motion.div
            className="loading loading-spinner loading-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="font-semibold"
          >
            Euger Bonete Portfolio
          </motion.h1>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}
