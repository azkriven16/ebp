import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/tom.glb");
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01 / 2;
  });
  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
        <mesh
          geometry={nodes["tom-waits_0"].geometry}
          material={materials.palette}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.11}
        />
        <mesh
          geometry={nodes.smoke_0.geometry}
          material={materials.smoke}
          position={[1.13, -0.63, 5.38]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.98}
        />
        <mesh
          geometry={nodes.smoke001_0.geometry}
          material={materials["smoke.001"]}
          position={[1.23, -0.69, 5.21]}
          rotation={[1.55, 1.49, -0.04]}
          scale={2.69}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/tom.glb");
