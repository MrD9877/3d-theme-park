import React from "react";
import { Duck } from "./Duck";
import { BeachBall } from "./BeachBall";
import { useControls } from "leva";
import { animated, useSpring } from "@react-spring/three";

export default function BallGame() {
  const { beachBallPosition } = useSpring({
    from: {
      beachBallPosition: 0,
    },
    to: [
      {
        beachBallPosition: 1,
      },
      {
        beachBallPosition: 2,
      },
    ],
    loop: true,
    immediate: true,
    pause: false,
    config: {
      mass: 2,
      tension: 170,
      friction: 36,
    },
  });

  const ballY = beachBallPosition.to([0, 0.5, 1, 1.5, 2], [2.15, 3.5, 2.15, 3.5, 2.15]);
  const ballX = beachBallPosition.to([0, 1, 2], [2.5, 7.5, 2.5]);
  const ducK1Y = beachBallPosition.to([0, 0.4, 0.7, 2], [0, 0.3, 0, 0]);
  const ducK2Y = beachBallPosition.to([0, 1, 1.4, 1.7, 2], [0, 0, 0.3, 0, 0]);

  return (
    <group>
      <Duck position-y={ducK1Y} position-x={2.5} position-z={-8} rotation-y={0.5 * Math.PI} color="yellow" />
      <Duck position-y={ducK2Y} position-x={7.5} position-z={-8} rotation-y={1.5 * Math.PI} color="pink" />
      <BeachBall position-y={ballY} position-x={ballX} position-z={-8.0} scale={0.6} />
    </group>
  );
}
