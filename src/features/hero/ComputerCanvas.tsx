import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";

import CanvasLoader from "../../components/CanvasLoader";
import Computer from "./Computer";

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
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default ComputerCanvas;
