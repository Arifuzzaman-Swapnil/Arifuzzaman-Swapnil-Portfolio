import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A single calm, slowly rotating low-poly shape — a quiet accent, not a
 * spectacle. No distortion, particles, or bloom.
 */
const CalmShape = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x += delta * 0.04;
  });

  return (
    <mesh ref={ref} scale={1.35}>
      <icosahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial
        color="#3a4a6b"
        roughness={0.6}
        metalness={0.15}
        flatShading
      />
    </mesh>
  );
};

export default CalmShape;
