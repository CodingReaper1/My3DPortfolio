import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import { Points as ThreePoints } from "three";

function Stars(props: object) {
  const ref = useRef<ThreePoints>(null);

  const sphere = random.inSphere(new Float32Array(5000), {
    radius: 1.2,
  }) as Float32Array;

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default Stars;
