import { Float } from "@react-three/drei";

/**
 * Scattered low-poly geometry floating around the core — adds depth and a
 * "tech lab" feel. Each shape bobs independently via drei <Float>.
 */
const shapes = [
  { pos: [-3.2, 1.6, -1], geo: "ico" as const, scale: 0.5, color: "#22d3ee" },
  { pos: [3.4, -1.2, -0.5], geo: "torus" as const, scale: 0.45, color: "#a855f7" },
  { pos: [2.8, 1.9, -2], geo: "octa" as const, scale: 0.55, color: "#38e6d4" },
  { pos: [-2.9, -1.7, -1.5], geo: "torus" as const, scale: 0.35, color: "#7c5cff" },
  { pos: [0.4, 2.6, -2.5], geo: "ico" as const, scale: 0.32, color: "#22d3ee" },
  { pos: [-1.4, -2.4, -1], geo: "octa" as const, scale: 0.4, color: "#a855f7" },
];

const Geo = ({ kind }: { kind: "ico" | "torus" | "octa" }) => {
  if (kind === "ico") return <icosahedronGeometry args={[1, 0]} />;
  if (kind === "octa") return <octahedronGeometry args={[1, 0]} />;
  return <torusGeometry args={[0.7, 0.26, 16, 40]} />;
};

const FloatingShapes = () => (
  <>
    {shapes.map((s, i) => (
      <Float key={i} speed={1.1 + i * 0.15} rotationIntensity={1.2} floatIntensity={1.6}>
        <mesh position={s.pos as [number, number, number]} scale={s.scale}>
          <Geo kind={s.geo} />
          <meshStandardMaterial
            color={s.color}
            emissive={s.color}
            emissiveIntensity={0.35}
            roughness={0.25}
            metalness={0.7}
            transparent
            opacity={0.55}
            wireframe={s.geo === "torus"}
          />
        </mesh>
      </Float>
    ))}
  </>
);

export default FloatingShapes;
