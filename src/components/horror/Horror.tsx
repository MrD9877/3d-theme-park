import React from "react";
import { Witch } from "./Witch";
import { Bookcase } from "./Bookcase";
import { Fence } from "./Fence";
import { Float } from "@react-three/drei";

export default function Horror() {
  return (
    <>
      <group position={[2, 0, 2]}>
        <Float speed={5} floatIntensity={0.1}>
          <Witch scale={1.4} position={[2.5, 3, 3.5]} rotation-y={0.2 * Math.PI} />
        </Float>
        <Bookcase position={[5, 0, 0]} scale={2} />
        <Float speed={3} floatIntensity={0.005}>
          <Fence position={[5.5, 3.5, 5.5]} scale={1.4} rotation-y={0.25 * Math.PI} />
        </Float>
      </group>
    </>
  );
}
