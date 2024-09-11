import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, PerspectiveCamera } from "@react-three/drei";
import Stars from "./Stars";

function StarsCanvas() {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 1]} />
        {/* <PerspectiveCamera
          makeDefault
          fov={75} // Same as default Canvas
          position={[0, 0, 1]} // Same as default Canvas
          near={0.1} // Match near clipping plane
          far={1000} // Match far clipping plane
          aspect={window.innerWidth / window.innerHeight} // Ensure matching aspect ratio
        /> */}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
}

export default StarsCanvas;
