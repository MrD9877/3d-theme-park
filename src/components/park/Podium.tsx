import React from "react";
import { Bear } from "./Bear";
import { Dog } from "./Dog";
import { Duck } from "../beach/Duck";
import { useSpring, animated } from "@react-spring/three";
import Stage from "./Stage";

const defaultStageColor = "#906efa";

export default function Podium() {
  const { stageARotation, stageBRotation, stageCRotation, duckPodiumColor, dogPodiumColor, bearPodiumColor, duckPodiumScale, dogPodiumScale, bearPodiumScale, duckScale, dogScale, bearScale, duckY, dogY, bearY } = useSpring<{
    stageARotation: number;
    stageBRotation: number;
    stageCRotation: number;
    duckPodiumColor: string;
    dogPodiumColor: string;
    bearPodiumColor: string;
    duckPodiumScale: [number, number, number];
    dogPodiumScale: [number, number, number];
    bearPodiumScale: [number, number, number];

    duckScale: number;
    dogScale: number;
    bearScale: number;

    duckY: number;
    dogY: number;
    bearY: number;
  }>({
    from: {
      stageARotation: 0,
      stageBRotation: 0,
      stageCRotation: 0,
      duckPodiumColor: defaultStageColor,
      dogPodiumColor: defaultStageColor,
      bearPodiumColor: defaultStageColor,
      duckPodiumScale: [1, 1, 1],
      dogPodiumScale: [1, 1, 1],
      bearPodiumScale: [1, 1, 1],
      duckScale: 1,
      dogScale: 1,
      bearScale: 1,

      duckY: 0,
      dogY: 0,
      bearY: 0,
    },
    to: [
      {
        stageARotation: Math.PI,
        duckPodiumColor: "yellow",
        duckPodiumScale: [0.7, 1.4, 0.7],
        duckScale: 1.5,
        duckY: 0.15,
      },
      {
        stageBRotation: Math.PI,
        dogPodiumColor: "#cea77d",
        dogPodiumScale: [0.7, 1.4, 0.7],
        dogScale: 1.5,
        dogY: 0.15,
      },
      {
        stageCRotation: Math.PI,
        bearPodiumColor: "#6f2f23",
        bearPodiumScale: [0.7, 1.4, 0.7],
        bearScale: 1.5,
        bearY: 0.15,
      },
      {
        stageARotation: 0,
        stageBRotation: 0,
        stageCRotation: 0,
        duckPodiumColor: defaultStageColor,
        dogPodiumColor: defaultStageColor,
        bearPodiumColor: defaultStageColor,
        duckPodiumScale: [1, 1, 1],
        dogPodiumScale: [1, 1, 1],
        bearPodiumScale: [1, 1, 1],
        duckScale: 1,
        dogScale: 1,
        bearScale: 1,
        duckY: 0,
        dogY: 0,
        bearY: 0,
      },
    ],
    config: {
      mass: 4,
      tension: 700,
      friction: 40,
    },
    loop: true,
  });
  return (
    <group position={[0.5, 0, -2]} rotation-y={-0.5 * Math.PI} scale={1.4}>
      <group position={[-4, 0, 0]}>
        <animated.group scale={duckScale} position-y={duckY}>
          <group position-y={0.1}>
            <Duck />
          </group>
        </animated.group>
        <animated.group scale={duckPodiumScale}>
          <Stage rotation-y={stageARotation} color={duckPodiumColor} />
        </animated.group>
      </group>
      <group position={[-2, 0, 0]}>
        <animated.group scale={dogScale} position-y={dogY}>
          <Dog />
        </animated.group>
        <animated.group scale={dogPodiumScale}>
          <Stage rotation-y={stageBRotation} color={dogPodiumColor} />
        </animated.group>
      </group>

      <group>
        <animated.group scale={bearScale} position-y={bearY}>
          <Bear />
        </animated.group>
        <animated.group scale={bearPodiumScale}>
          <Stage rotation-y={stageCRotation} color={bearPodiumColor} />
        </animated.group>
      </group>
    </group>
  );
}
