import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";

import CanvasLoader from "../../components/CanvasLoader";
import Computer3DModel from "./Computer3DModel";

function ComputerCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      className="text-red-600"
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <PerspectiveCamera makeDefault position={[20, 3, 5]} fov={25} />
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={1} groundColor="black" />
        <pointLight intensity={3} />
        <directionalLight position={[0, 10, 0]} intensity={3} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <group
          scale={isMobile ? 0.5 : 0.7}
          position={isMobile ? [0, -2.5, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        >
          <Computer3DModel />
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default ComputerCanvas;
