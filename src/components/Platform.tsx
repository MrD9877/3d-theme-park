import React, { useEffect, useRef, useState } from "react";
import Beach from "./beach/Beach";
import { animated, useSpring } from "@react-spring/three";
import Food from "./food/Food";
import Park from "./park/Park";
import Horror from "./horror/Horror";
import { Float } from "@react-three/drei";
import { Cauldron } from "./horror/Cauldron";

export default function Platform() {
  const ROTATION_DELAY = 4000;
  const [paused, setPaused] = useState(false);
  const time = useRef<NodeJS.Timeout>(null);

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
  });
  useEffect(() => {
    if (paused) {
      carouselRotation.pause();
      time.current = setTimeout(() => {
        carouselRotation.resume();
      }, 5000);
    } else {
      carouselRotation.resume();
    }
    return () => {
      if (time.current) clearTimeout(time.current);
    };
  }, [paused, carouselRotation]);

  return (
    <>
      <group rotation-y={-Math.PI / 4} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)}>
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
          <Park />
          <Horror />
          <Float speed={-0.5} floatIntensity={0.01}>
            <Cauldron position={[3, 2, 9]} scale={1.7} />
          </Float>
        </animated.group>
      </group>
    </>
  );
}
