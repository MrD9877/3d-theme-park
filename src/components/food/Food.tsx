import React from "react";
import { Burger } from "./Burger";
import TargetGame from "./TargetGame";
import { Hotdog } from "./Hotdog";

export default function Food() {
  return (
    <group position={[-2, 0, 2.5]} rotation-y={1.5 * Math.PI}>
      <group>
        <Burger position={[0, 4, 0]} scale={3} />
        <Burger position={[0, 4, 7]} scale={3} />
        <Burger position={[7, 4, 0]} scale={3} />
      </group>
      <Hotdog />
      <TargetGame />
    </group>
  );
}
