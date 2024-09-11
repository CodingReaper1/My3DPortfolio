import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";

import CanvasLoader from "../../components/CanvasLoader";
import Earth from "./Earth";

function EarthCanvas() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      // camera={{ fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <PerspectiveCamera
        makeDefault
        fov={45}
        position={[-4, 3, 6]}
        near={0.1}
        far={200}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default EarthCanvas;
