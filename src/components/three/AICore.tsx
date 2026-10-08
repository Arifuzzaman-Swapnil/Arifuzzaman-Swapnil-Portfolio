import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A single calm, slowly rotating shape — a fine wireframe shell around a dark
 * faceted core. A quiet accent, not a spectacle. No distortion, particles, or bloom.
 */
const CalmShape = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x += delta * 0.04;
  });

  return (
    <group ref={ref} scale={1.35}>
      <mesh>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial color="#1c2333" roughness={0.7} metalness={0.2} flatShading />
      </mesh>
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="#5b7bb5" wireframe transparent opacity={0.22} />
      </mesh>
    </group>
  );
};

export default CalmShape;
