import React from "react";
import { IceCream } from "./IceCream";
import { Palm } from "./Palm";
import BallGame from "./BallGame";

export default function Beach() {
  return (
    <>
      <group>
        <IceCream position={[6.5, 4.7, -8.5]} scale={[2.0, 2.0, 2.0]} />
        <IceCream position={[2.0, 4.7, -10.5]} scale={[2.0, 2.0, 2.0]} />
        <IceCream position={[10.5, 4.7, -2.0]} scale={[2.0, 2.0, 2.0]} />
      </group>
      <Palm position={[-7.0, 0, 18.0]} scale={[3.3, 3.3, 3.3]} />
      <Palm position={[0, 0, 14.0]} scale={[2.7, 2.7, 2.7]} />
      <BallGame />
    </>
  );
}
