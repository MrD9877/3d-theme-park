import React from "react";
import { Cannon } from "./Cannon";
import { Candy } from "./Candy";
import { TargetStand } from "./TargetStand";
import { config, useSpring, animated } from "@react-spring/three";
export default function TargetGame() {
  const { targetX, cannonScale, candyZ, candyVisible, candyScale } = useSpring({
    from: {
      targetX: 0,
      cannonScale: 1,
      candyZ: -15.5,
      candyVisible: 0,
      candyScale: 0.5,
    },
    to: [
      {
        targetX: 0.5,
        cannonScale: 1,
      },
      {
        targetX: 0,
        cannonScale: 1.5,
      },
      {
        targetX: -0.5,
        cannonScale: 1.5,
        candyScale: 1,
        candyVisible: 1,
      },
      {
        targetX: 0,
        cannonScale: 1,
        candyZ: -24.4,
        candyVisible: 0,
        candyScale: 1,
      },
    ],
    loop: true,
    immediate: true,
    config: config.stiff,
  });
  const AnimatedCandy = animated(Candy);
  return (
    <group>
      <group position={[0, 0, 22.5]}>
        <Cannon scale={2} cannonScale={cannonScale} />
        <AnimatedCandy position-x={0.25} position-y={1} position-z={candyZ} rotation-y={Math.PI / 2} scale={candyScale.to((s) => [s, s, s])} opacity={candyVisible} />
      </group>
      <TargetStand position-x={targetX} />
    </group>
  );
}
