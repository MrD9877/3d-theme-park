"use client";
import Experience from "@/components/Experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full h-screen">
          <Canvas shadows camera={{ position: [0, 16, 42], fov: 30 }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
          </Canvas>
        </div>
      </div>
    </>
  );
}
