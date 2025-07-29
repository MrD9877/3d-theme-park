"use client";

import React, { useRef } from "react";
import Platform from "./Platform";
import * as THREE from "three";
import { Depth, LayerMaterial, Noise } from "lamina";
import { useFrame } from "@react-three/fiber";
import { IceCream } from "./beach/IceCream";

function Background() {
  const SPEED = 0.1;
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * SPEED;
    ref.current.rotation.y += delta * SPEED;
    ref.current.rotation.z += delta * SPEED;
  });
  return (
    <>
      <mesh ref={ref} scale={100}>
        <LayerMaterial side={THREE.BackSide}>
          <Depth colorA="#f21a62" colorB="#0081fc" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
          <Noise mapping="local" type="white" scale={100} colorA={"white"} colorB={"black"} mode="subtract" alpha={0.1} />
        </LayerMaterial>
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>
    </>
  );
}

export default function Experience() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 20, 20]} intensity={2} />
      <Platform />
      <Background />
    </>
  );
}
