// "use client";
// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { useAnimationFrame } from "framer-motion";

// export default function Model(props) {
//   const { nodes, materials } = useGLTF("/gamer_dog.glb");
//   const { camera } = useThree();
//   const ref = useRef();
//   useAnimationFrame(() => {
//     ref.current.rotation.y += 0.01 / 2;
//   });
//   return (
//     <group ref={ref} {...props} dispose={null}>
//       <group position={[-0.9, 0.55, 0]} scale={0.24}>
//         <group
//           position={[1.17, 0.15, 0]}
//           rotation={[0, 0, -Math.PI / 2]}
//           scale={0.96}
//         >
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Object_13.geometry}
//             material={materials["Material.001"]}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Object_14.geometry}
//             material={materials.Material}
//           />
//         </group>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_8.geometry}
//           material={materials["Material.002"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_9.geometry}
//           material={materials["Material.007"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_11.geometry}
//           material={materials["Material.001"]}
//         />
//       </group>
//       <group
//         position={[0.22, 0.55, 0]}
//         rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//         scale={0.59}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_16.geometry}
//           material={materials["Material.009"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_17.geometry}
//           material={materials["Material.010"]}
//         />
//       </group>
//       <group
//         position={[-0.18, 0.09, -0.23]}
//         rotation={[0, Math.PI / 2, 0]}
//         scale={0.14}
//       >
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_19.geometry}
//           material={materials["Material.011"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_20.geometry}
//           material={materials["Material.012"]}
//         />
//       </group>
//       <group position={[-0.17, 0.11, 0.38]} scale={0.39}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_22.geometry}
//           material={materials["Material.013"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_23.geometry}
//           material={materials["Material.014"]}
//         />
//       </group>
//       <group position={[-0.2, 0.17, 0.68]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_25.geometry}
//           material={materials["Material.004"]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_26.geometry}
//           material={materials["Material.006"]}
//         />
//       </group>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_4.geometry}
//         material={materials["Material.008"]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_6.geometry}
//         material={materials["Material.008"]}
//         position={[-1.02, -0.28, -0.03]}
//         rotation={[-Math.PI, 0, -Math.PI]}
//         scale={0.31}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/gamer_dog.glb");
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/gang_bear.glb");
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01 / 2;
  });
  return (
    <motion.group
      initial={{ rotateY: 100, y: 100, opacity: 0 }}
      animate={{
        rotateY: 0,
        y: 0,
        opacity: 1,
        transition: { delay: 2, duration: 2 },
      }}
      ref={ref}
      {...props}
      dispose={null}
    >
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
    </motion.group>
  );
}

useGLTF.preload("/gang_bear.glb");
