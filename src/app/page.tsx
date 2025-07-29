"use client";
import Experience from "@/components/Experience";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="canvasDiv">
      <Canvas shadows camera={{ position: [0, 16, 42], fov: 30 }}>
        <OrbitControls />
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </div>
  );
}
