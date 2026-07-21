import { Canvas } from "@react-three/fiber";
import CalmShape from "./AICore";

/** Minimal hero scene: one calm rotating shape with soft lighting. */
const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 42 }}
    dpr={[1, 1.6]}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    style={{ pointerEvents: "none" }}
  >
    <ambientLight intensity={0.6} />
    <directionalLight position={[3, 4, 5]} intensity={1.15} />
    <directionalLight position={[-4, -2, -3]} intensity={0.3} color="#7f8db0" />
    <CalmShape />
  </Canvas>
);

export default HeroScene;
