import { useGLTF } from "@react-three/drei";

function Computer({ isMobile }: { isMobile: boolean }) {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={3} />
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      {/* <ambientLight intensity={1} /> */}
      <directionalLight castShadow position={[0, 10, 0]} intensity={3} />
      <primitive
        object={scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2.5, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

export default Computer;
