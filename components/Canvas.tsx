import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import Model from "./3d";

export default function CanvasContainer() {
  return (
    <Canvas
      shadows
      camera={{ position: [1, 7, 15], rotation: [0, 0, 0], fov: 45 }}
    >
      <ambientLight intensity={5} />
      <Model />
      <OrbitControls
        minDistance={18} // Set the minimum zoom distance
        maxDistance={30} // Set the maximum zoom distance
      />
    </Canvas>
  );
}
