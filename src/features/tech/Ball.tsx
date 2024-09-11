import { Decal, Float, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function Ball({ imgUrl }: { imgUrl: string }) {
  const [decal] = useTexture([imgUrl]);
  const { invalidate } = useThree();

  useFrame(() => {
    invalidate();
  });

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={4}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
          map={decal}
        />
      </mesh>
    </Float>
  );
}

export default Ball;
