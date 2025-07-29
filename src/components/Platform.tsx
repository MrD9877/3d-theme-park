import React from "react";
import Beach from "./beach/Beach";
import { animated, useSpring } from "@react-spring/three";
import Food from "./food/Food";

export default function Platform() {
  const ROTATION_DELAY = 3000;
  const { carouselRotation } = useSpring({
    from: {
      carouselRotation: 0,
    },
    to: [
      {
        carouselRotation: -Math.PI / 2,
        delay: ROTATION_DELAY,
      },
      {
        carouselRotation: -Math.PI,
        delay: ROTATION_DELAY,
      },
      {
        carouselRotation: -1.5 * Math.PI,
        delay: ROTATION_DELAY,
      },
      {
        carouselRotation: -2 * Math.PI,
        delay: ROTATION_DELAY,
      },
    ],
    config: {
      mass: 5,
      friction: 50,
      tension: 400,
    },
    loop: true,
    immediate: true,
    pause: true,
  });

  return (
    <>
      <group rotation-y={-Math.PI / 4}>
        <animated.group rotation-y={carouselRotation}>
          <group>
            <mesh position={[0, -2, 0]}>
              <meshStandardMaterial color={"white"} />
              <cylinderGeometry args={[12, 12, 4, 64]} />
            </mesh>
            <mesh scale={[1, 6, 24]} position-y={3}>
              <boxGeometry />
              <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh scale={[24, 6, 1]} position-y={3}>
              <boxGeometry />
              <meshStandardMaterial color={"white"} />
            </mesh>
          </group>
          <Beach />
          <Food />
        </animated.group>
      </group>
    </>
  );
}
