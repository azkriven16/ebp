import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/gang_bear.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.03, 2.22, -2.55]}
        rotation={[-0.13, 0.01, 0]}
        scale={[0.42, 0.35, 0.22]}
      >
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["lambert1.001"]}
        position={[-0.03, 2.56, -0.74]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.005"]}
        position={[-0.03, 2.56, -0.74]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["Material.001"]}
        position={[0, 0.35, 0]}
        scale={15.94}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials["Material.002"]}
        position={[0, 0.53, 0]}
        rotation={[0, 0.39, 0]}
        scale={7.01}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials["Material.002"]}
        position={[0, 0.53, 0]}
        rotation={[0, -0.15, 0]}
        scale={5.84}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials["Material.002"]}
        position={[0, 0.53, 0]}
        rotation={[-Math.PI, -0.2, -Math.PI]}
        scale={4.96}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials["Material.002"]}
        position={[0, 0.53, 0]}
        rotation={[0, 0.39, 0]}
        scale={7.01}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials["Material.002"]}
        position={[0, 0.53, 0]}
        rotation={[-Math.PI, 1.24, -Math.PI]}
        scale={7.01}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials["Material.002"]}
        position={[0, 0.53, 0]}
        rotation={[0, 0.27, 0]}
        scale={7.01}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials["Material.002"]}
        position={[0, 0.53, 0]}
        rotation={[0, -0.15, 0]}
        scale={5.84}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials["Material.004"]}
        position={[0, 0.77, 0]}
        rotation={[0, 0.03, 0]}
        scale={4.46}
      />
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials["Material.005"]}
        position={[0, 0.77, 0]}
        rotation={[0, 0.03, 0]}
        scale={4.46}
      />
    </group>
  );
}

useGLTF.preload("/gang_bear.glb");
