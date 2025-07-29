import React, { JSX } from "react";
import { animated, SpringValue } from "@react-spring/three";
export default function Stage(props: JSX.IntrinsicElements["group"] & { color: SpringValue<string> }) {
  return (
    <animated.group {...props} dispose={null}>
      <mesh position-y={0.1}>
        <animated.meshStandardMaterial color={props.color} />
        <boxGeometry args={[1, 0.2, 1]} />
      </mesh>
    </animated.group>
  );
}
