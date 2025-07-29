import React from "react";
import { Dog } from "./Dog";
import { Bear } from "./Bear";
import { Duck } from "../beach/Duck";
import { FerrisWheel } from "./FerrisWheel";
import { Ship } from "./Ship";
import { Float } from "@react-three/drei";
import Stage from "./Stage";
import Podium from "./Podium";

export default function Park() {
  return (
    <group position={[-2, 0, -2]}>
      <Podium />
      <FerrisWheel scale={3} position={[-4, 0, 0]} />
      <Float speed={-4} floatIntensity={2} rotationIntensity={0.7}>
        <Ship scale={0.5} position={[-3, 1, -5]} />
      </Float>
    </group>
  );
}
