import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import AICore from "./AICore";
import ParticleField from "./ParticleField";
import FloatingShapes from "./FloatingShapes";
import { useIsMobile } from "@/hooks/use-mobile";

/** Group that eases its rotation toward the pointer for a parallax effect. */
const ParallaxRig = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.35, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.22, 0.05);
  });
  return <group ref={group}>{children}</group>;
};

const HeroScene = () => {
  const isMobile = useIsMobile();

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, isMobile ? 1.4 : 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      {/* Lighting bath: cyan key + violet rim */}
      <ambientLight intensity={0.45} />
      <pointLight position={[6, 4, 5]} intensity={1.1} color="#22d3ee" />
      <pointLight position={[-6, -3, 2]} intensity={1.0} color="#a855f7" />
      <directionalLight position={[0, 5, 4]} intensity={0.5} color="#ffffff" />

      <ParallaxRig>
        <AICore />
        {!isMobile && <FloatingShapes />}
        <ParticleField count={isMobile ? 700 : 1900} />
      </ParallaxRig>

      <EffectComposer>
        <Bloom
          intensity={isMobile ? 0.7 : 1.15}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.4}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroScene;
