import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

/**
 * The central "AI core": a slowly morphing cyan→violet orb wrapped in a
 * counter-rotating wireframe shell. The visual anchor of the hero scene.
 */
const AICore = () => {
  const shell = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (shell.current) {
      shell.current.rotation.y += delta * 0.18;
      shell.current.rotation.x += delta * 0.05;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.12;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
      <group scale={1.25}>
        {/* Morphing inner orb */}
        <mesh ref={inner}>
          <sphereGeometry args={[1.15, 96, 96]} />
          <MeshDistortMaterial
            color="#10b3c4"
            emissive="#0a6a78"
            emissiveIntensity={0.5}
            roughness={0.18}
            metalness={0.85}
            distort={0.38}
            speed={1.8}
          />
        </mesh>

        {/* Wireframe tech shell */}
        <Icosahedron ref={shell} args={[1.55, 2]}>
          <meshBasicMaterial color="#37e6d4" wireframe transparent opacity={0.18} />
        </Icosahedron>

        {/* Violet inner glow point */}
        <pointLight position={[0, 0, 0]} color="#a855f7" intensity={2.2} distance={5} />
      </group>
    </Float>
  );
};

export default AICore;
